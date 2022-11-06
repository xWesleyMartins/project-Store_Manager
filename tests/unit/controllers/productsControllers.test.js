const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsModel } = require('../../../src/models/products.model');
const { productsServices } = require('../../../src/services/products.services');
const { productsController } = require('../../../src/controllers/product.controller');
const { mockAllProducts } = require('../mocks/mockAllProducts');
const { expect } = require('chai');

chai.use(sinonChai);

describe('testando camada Controller', function() {
  it('Verificando findAll da controller', async function() { 
    const res = {}
    const req = {}

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()

    sinon.stub(productsServices, "findAll").resolves(mockAllProducts)

    await productsController.findAll(req, res)
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockAllProducts);
  });

  it.only('Verificando findAll da controller', async function() {
    const res = {}
    const req = { params: {id:3}}

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()

    sinon.stub(productsServices, "findById").resolves(mockAllProducts)

    await productsController.findAll(req, res)
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockAllProducts[2]);
  });
  afterEach(sinon.restore);
});