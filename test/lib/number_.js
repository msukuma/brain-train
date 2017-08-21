import Number_ from '../../lib/number_';
import ArgumentError from '../../lib/errors/argument-error';
import typeOf from '../../lib/type-of';
import { expect } from 'chai';

describe('#Number_', () => {
  const number = 3;
  const n = new Number_({ number: number });

  describe('instantiation', () => {
    it('should validate that input has property "number" of type "Number"', () => {
      expect(() => { new Number_(number);}).to.throw();
      expect(() => { new Number_({ number: number }); }).to.not.throw();
    });

    it('should create an instance of "Number_"', () => {
      expect(typeOf(n)).to.equal('number_');
    });
  });

  describe('_number', () => {
    it('should have own property "number"', () => {
      expect(n).to.have.own.property('number');
    });

    it('should equal to number set at creation', () => {
      expect(n.number).to.equal(number);
    });
  });

  describe('_hidden', () => {
    it('should have own property "hidden"', () => {
      expect(n).to.have.own.property('hidden');
    });

    it('should be a boolean', () => {
      expect(n.hidden).to.be.a('boolean');
    });

    it('should defaults to false', () => {
      expect(n.hidden).to.equal(false);
    });

  });

  describe('_isInput', () => {
    it('should have own property "isInput"', () => {
      expect(n).to.have.own.property('isInput');
    });

    it('should be a boolean', () => {
      expect(n.isInput).to.be.a('boolean');
    });

    it('should default to true', () => {
      expect(n.isInput).to.equal(true);
    });
  });

  describe('_setNumber', () => {
    it('should have method setNumber', () => {
      expect(n).to.respondTo('setNumber');
    });

    it('should set own property "number" to that provided as an input to the function', () => {
      const newNumber = 5;
      n.setNumber(newNumber);

      expect(n.number).to.equal(newNumber);
    });

    it('should throw an "ArgumentError" if input is not a Number', () => {
      expect(() => n.setNumber()).to.throw();
    });
  });

  describe('_show', () => {
    it('should have method show', () => {
      expect(n).to.respondTo('show');
    });

    it('should set own property "hidden" to false', () => {
      n.show();
      expect(n.hidden).to.equal(false);
    });
  });

  describe('_hide', () => {
    it('should have method hide', () => {
      expect(n).to.respondTo('hide');
    });

    it('should set own property "hidden" to true', () => {
      n.hide();
      expect(n.hidden).to.equal(true);
    });
  });

});
