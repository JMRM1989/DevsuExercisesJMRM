import { searchUserName } from './create-user.cy';

describe('GET /user/{username} API', () => {

    it('should return 200 when the user information are successfully returned', () => {
      cy.log(searchUserName);
      cy.request('GET', `https://petstore.swagger.io/v2/user/${searchUserName}`).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  
    it('should return the user object', () => {
      const USER_EXPECTED = {
        id: 2,
        username: searchUserName,
        firstName: `${searchUserName}-firstName`,
        lastName: `${searchUserName}-lastname`,
        email: `${searchUserName}@email.com`,
        password: '12345',
        phone: '12345',
        userStatus: 1,
      };
  
      cy.request('GET', `https://petstore.swagger.io/v2/user/${searchUserName}`).then((response) => {
        expect(response.body).to.deep.equal(USER_EXPECTED);
      });
    });
});