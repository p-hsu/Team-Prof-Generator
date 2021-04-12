const Employee = require('../lib/Employee');

const employee = new Employee ('Lucy Diaz', '123', 'ldiaz@email.io');
describe('Employee class', () => {
    test('creates a employee object', () => {

        expect(employee.name).toBe('Lucy Diaz');
        expect(employee.id).toBe('123');
        expect(employee.email).toBe('ldiaz@email.io');
    });

    describe('getName', () => {
        test('Returns name string of employee object', () => {
            
            expect(employee.getName()).toEqual(expect.stringContaining('Lucy Diaz'));
        });
    })

    describe('getId', () => {
        test('Returns ID string of employee object', () => {

            expect(employee.getId()).toEqual(expect.stringContaining('123'));
        });
    })

    describe('getEmail', () => {
        test('Returns email string of employee object', () => {

            expect(employee.getEmail()).toEqual(expect.stringContaining('ldiaz@email.io'));
        });
    })

    describe('getRole', () => {
        test('Returns role string of employee object', () => {

            expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
        });
    })
})
