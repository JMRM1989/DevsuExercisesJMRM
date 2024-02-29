import { searchUserName } from './create-user.cy';

describe('PUT /user/{username} API', () => {

  it('should return 200 when the user is successfully updated', () => {
    const USER_UPDATED = {
      id: 10,
      username: `${searchUserName}_UPDATED`,
      firstName: `${searchUserName}-firstName_UPDATED`,
      lastName: `${searchUserName}-lastname_UPDATED`,
      email: `${searchUserName}_UPDATED@email.com`,
      password: '54321',
      phone: '54321',
      userStatus: 1,
    };
    cy.request('PUT', `https://petstore.swagger.io/v2/user/${searchUserName}`, USER_UPDATED).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});