import Operation from '../../lib/operation';
import Number_ from '../../lib/number_';
import ArgumentError from '../../lib/errors/argument-error';
import typeOf from '../../lib/type-of';
import { expect } from 'chai';

describe('#Operation', () => {
  const o = new Operation();
  const n1 = new Number_({ number: 25 });
  const n2 = new Number_({ number: 5 });

  describe('instantiation', () => {
    it('should create an instance of Operation', () => {
        expect(typeOf(o)).to.equal('operation');
      });
  });

  describe('_add', () => {
    it('should have method "add"', () => {
      expect(o).to.respondTo('add');
    });

    it('should accept 2 instances of Number_', () => {
      expect(() => { o.add(n1, n2); }).to.not.throw();
      expect(() => { o.add(n1); }).to.throw();
    });

    it('should return an instance of Number_ that sums it\'s inputs', () => {
      expect(typeOf(o.add(n1, n2))).to.equal('number_');
      expect(o.add(n1, n2).number).to.equal(30);
    });
  });

  describe('_subtract', () => {
    it('should have method "subtract"', () => {
      expect(o).to.respondTo('subtract');
    });

    it('should accept 2 instances of Number_', () => {
      expect(() => { o.subtract(n1, n2); }).to.not.throw();
      expect(() => { o.subtract(n1); }).to.throw();
    });

    it('should return an instance of Number_ that sums it\'s inputs', () => {
      expect(typeOf(o.subtract(n1, n2))).to.equal('number_');
      expect(o.subtract(n1, n2).number).to.equal(20);
    });
  });

  describe('_multiply', () => {
    it('should have method "multiply"', () => {
      expect(o).to.respondTo('multiply');
    });

    it('should accept 2 instances of Number_', () => {
      expect(() => { o.multiply(n1, n2); }).to.not.throw();
      expect(() => { o.multiply(n1); }).to.throw();
    });

    it('should return an instance of Number_ that sums it\'s inputs', () => {
      expect(typeOf(o.multiply(n1, n2))).to.equal('number_');
      expect(o.multiply(n1, n2).number).to.equal(125);
    });
  });

  describe('_divide', () => {
    it('should have method "divide"', () => {
      expect(o).to.respondTo('divide');
    });

    it('should accept 2 instances of Number_', () => {
      expect(() => { o.divide(n1, n2); }).to.not.throw();
      expect(() => { o.divide(n1); }).to.throw();
    });

    it('should return an instance of Number_ that sums it\'s inputs', () => {
      expect(typeOf(o.divide(n1, n2))).to.equal('number_');
      expect(o.divide(n1, n2).number).to.equal(5);
    });
  });

});
