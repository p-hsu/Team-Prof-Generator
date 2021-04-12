const Intern = require('../lib/Intern');

const intern = new Intern ('Lolo Hu', '888', 'lhu@email.io', 'WashU');
describe('Intern class', () => {
    test('creates a intern object', () => {

        expect(intern.name).toBe('Lolo Hu');
        expect(intern.id).toBe('888');
        expect(intern.email).toBe('lhu@email.io');
        expect(intern.school).toBe('WashU')
    });

    describe('getName', () => {
        test('Returns name string of intern object', () => {
            
            expect(intern.getName()).toEqual(expect.stringContaining('Lolo Hu'));
        });
    })

    describe('getId', () => {
        test('Returns ID string of intern object', () => {

            expect(intern.getId()).toEqual(expect.stringContaining('888'));
        });
    })

    describe('getEmail', () => {
        test('Returns email string of intern object', () => {

            expect(intern.getEmail()).toEqual(expect.stringContaining('lhu@email.io'));
        });
    })

    describe('getSchool', () => {
        test('Returns school string of intern object', () => {

            expect(intern.getSchool()).toEqual(expect.stringContaining('WashU'));
        });
    })

    describe('getRole', () => {
        test('Returns role string of intern object', () => {

            expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
        });
    })
})
