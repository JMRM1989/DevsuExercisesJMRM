import { searchUserName } from './create-user.cy';

describe('GET /user/{username} API', () => {

    it('should return 200 when the user information is successfully returned', () => {
      cy.log(searchUserName); // Log the searchUserName for debugging
      cy.request('GET', `https://petstore.swagger.io/v2/user/${searchUserName}`).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  
    it('should return the updated user object', () => {
      const USER_EXPECTED = {
        id: 10,
        username: `${searchUserName}_UPDATED`,
        firstName: `${searchUserName}-firstName_UPDATED`,
        lastName: `${searchUserName}-lastname_UPDATED`,
        email: `${searchUserName}_UPDATED@email.com`,
        password: '54321',
        phone: '54321',
        userStatus: 1,
      };
  
      cy.request('GET', `https://petstore.swagger.io/v2/user/${searchUserName}`).then((response) => {
        expect(response.status).to.equal(200); // Ensure the request was successful
        expect(response.body).to.deep.equal(USER_EXPECTED);
      });
    });
});
