import { searchUserName } from './create-user.cy';

describe('User API Tests', () => {
    
  it('should delete the user', () => {
    // Delete the user
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/user/${searchUserName}`
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
