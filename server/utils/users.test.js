const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId  = '1';
        let res = users.removeUser(userId)[0];
        console.log(res);

        expect(res.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let res = users.removeUser('4');

        expect(res.length).toBe(0);
    });

    it('should find user', () => {
        let userId = '2';
        let res = users.getUser(userId);

        expect(res.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '4';
        let res = users.getUser(userId);

        expect(res).toBeFalsy();
    });

    it('should return names for node couse', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return namse for react course', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    })
})