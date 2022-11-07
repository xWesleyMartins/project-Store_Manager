const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');

const productsServices= require('../../../src/services/products.services');
const productsController = require('../../../src/controllers/product.controller');
const mockAllProducts = require('../mocks/mockAllProducts');
const { rightProductBody, productCreateResponse } = require('../../../__tests__/_dataMock');
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

  it('Verificando findById da controller', async function() {
    const res = {}
    const req = { params: {id:2}}
    const find = mockAllProducts.find((mock) => mock.id === 2)
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()

    sinon.stub(productsServices, "findById").resolves(find)

    await productsController.findById(req, res)
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockAllProducts[1]);
  });
  it('Verificando findById da controller com id invalido', async function () {
    const res = {}
    const req = { params: { id: 200 } }
    const find = mockAllProducts.find((mock) => mock.id === 200)
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()

    sinon.stub(productsServices, "findById").resolves(find)

    await productsController.findById(req, res)
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({
      message: 'Product not found' });
  });
  it('Verificando createNewProducts', async function () {
    const res = {}
    const req = { body: rightProductBody }
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns()

    sinon.stub(productsServices, "createNewProducts").resolves(productCreateResponse)

    await productsController.createNewProducts(req, res)
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productCreateResponse);
  });
  afterEach(sinon.restore);
});