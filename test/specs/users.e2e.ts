import UsersPage from '../pageobjects/users.page';
import {createUser, getUser, deleteUser} from '../utils/apiCommands.js';

describe('Testing the endpoints', () => {
    let userId;

    afterAll(async () => {
        await deleteUser(userId);
    })

    it('Creating a user', async () => {
        const user = {
            name: "Christian",
            email: "pepito.sarandela@gmail.com",
        }
        await createUser(user);;
        userId = "10";
    });

    it('Getting data of the created user', async () => {
        const userData = await getUser(userId);
        const userName = userData.name;
        const userEmail = userData.email;
        console.log(userName);
        console.log(userEmail);
    })
});