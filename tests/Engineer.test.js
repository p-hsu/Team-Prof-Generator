const Engineer = require('../lib/Engineer');

const engineer = new Engineer ('Hansi Lo Wangsi', '666', 'hlow@email.io', 'hlo-wangsi');
describe('Engineer class', () => {
    test('creates a engineer object', () => {

        expect(engineer.name).toBe('Hansi Lo Wangsi');
        expect(engineer.id).toBe('666');
        expect(engineer.email).toBe('hlow@email.io');
        expect(engineer.github).toBe('hlo-wangsi')
    });

    describe('getName', () => {
        test('Returns name string of engineer object', () => {
            
            expect(engineer.getName()).toEqual(expect.stringContaining('Hansi Lo Wangsi'));
        });
    })

    describe('getId', () => {
        test('Returns ID string of engineer object', () => {

            expect(engineer.getId()).toEqual(expect.stringContaining('666'));
        });
    })

    describe('getEmail', () => {
        test('Returns email string of engineer object', () => {

            expect(engineer.getEmail()).toEqual(expect.stringContaining('hlow@email.io'));
        });
    })

    describe('getGithub', () => {
        test('Returns guithub string of engineer object', () => {

            expect(engineer.getGithub()).toEqual(expect.stringContaining('hlo-wangsi'));
        });
    })

    describe('getRole', () => {
        test('Returns role string of engineer object', () => {

            expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
        });
    })
})
