const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { productsModel } = require('../../../src/models/products.model');
const { productsService } = require('../../../src/services/products.services');
const { expect } = require('chai');
chai.use(sinonChai);
const { mockAllProducts } = require('../mocks/mockAllProducts');

describe('testando camada Services', () => {
  it('Verifica se todos os produtos são mostrados caso não seja passado id', async () => {

    sinon.stub(productsModel, 'findAll').resolves(mockAllProducts);

    const result = await productsService.findAll();

    expect(result).to.be.deep.equal(mockAllProducts);

  });
  it('Verifica se ao passar um "id" é retornado o valor correspondente ao id passado.', async () => {
    sinon.stub(productsModel, 'findById').resolves(mockAllProducts);

    const result = await productsService.findById(3);

    expect(result).to.be.deep.equal(mockAllProducts[2]);
  });
afterEach(sinon.restore);
})