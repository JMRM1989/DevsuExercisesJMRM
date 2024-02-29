import { generateRandomUsername } from '../../support/random';
let searchUserName;
const USERNAME = generateRandomUsername();
const USER_OBJECT_LIST = [
  {
    id: 2,
    username: USERNAME,
    firstName: `${USERNAME}-firstName`,
    lastName: `${USERNAME}-lastname`,
    email: `${USERNAME}@email.com`,
    password: '12345',
    phone: '12345',
    userStatus: 1,
  },
];

describe('POST /user/createWithList API', () => {
  it('should return 200 when a new user is successfully created', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/user/createWithList', USER_OBJECT_LIST).then(
      (response) => {
        expect(response.status).to.equal(200);
        searchUserName = USER_OBJECT_LIST[0].username;
        cy.log(searchUserName);
      },
    );
  });
});
export {searchUserName};




