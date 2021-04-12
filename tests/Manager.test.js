const Manager = require('../lib/Manager');

const manager = new Manager ('John Wayne', '999', 'jwayne@email.io', '1234567890');
describe('Manager class', () => {
    test('creates a manager object', () => {

        expect(manager.name).toBe('John Wayne');
        expect(manager.id).toBe('999');
        expect(manager.email).toBe('jwayne@email.io');
        expect(manager.officeNumber).toBe('1234567890')
    });

    describe('getName', () => {
        test('Returns name string of manager object', () => {
            
            expect(manager.getName()).toEqual(expect.stringContaining('John Wayne'));
        });
    })

    describe('getId', () => {
        test('Returns ID string of manager object', () => {

            expect(manager.getId()).toEqual(expect.stringContaining('999'));
        });
    })

    describe('getEmail', () => {
        test('Returns email string of manager object', () => {

            expect(manager.getEmail()).toEqual(expect.stringContaining('jwayne@email.io'));
        });
    })

    describe('getRole', () => {
        test('Returns role string of manager object', () => {

            expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
        });
    })
})
