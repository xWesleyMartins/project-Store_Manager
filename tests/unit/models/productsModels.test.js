const { expect } = require('chai');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
// const { mockAllProducts } = require('../mocks/mockAllProducts');

const mockAllProducts = [
    {
      id: 1,
      name: "Martelo de Thor"
    },
    {
      id: 2,
      name: "Traje de encolhimento"
    },
    {
      id: 3,
      name: "Escudo do Capitão América"
    },
  ]


describe('testando camada Model', function() {
  it('Verifica se todos os produtos são mostrados caso não seja passado id', async function() {
    sinon.stub(connection, 'execute').resolves([mockAllProducts]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(mockAllProducts);
  });
  it.only('Verifica se ao passar um "id" é retornado o valor correspondente ao id passado.', async function() {
    sinon.stub(connection, 'execute').resolves(mockAllProducts[2]);
    console.log('x', mockAllProducts[2]);
    
    console.log('xx', await productsModel.findById(3));
    const result = await productsModel.findById(3);
    expect(result).to.be.deep.equal(mockAllProducts[2])
  });
  afterEach(sinon.restore);
})