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
            username: "PepitoSarandela",
            email: "pepito.sarandela@gmail.com",
            address: {
              street: "Liniers 1014",
              suite: "Apt. 113",
              city: "Rosario",
              zipcode: "2000",
              geo: {
                lat: "-37.3159",
                lng: "81.1496"
              }
            },
            phone: "3415566778",
            website: "https://uat.admin.app.radiumrocket.com/",
            company: {
              name: "Radium Rocket",
              catchPhrase: "We don't make apps, we make magic",
              bs: "software development"
            }
        }
        await createUser(user);;
        userId = "10";
    });

    it('Getting data of the created user', async () => {
        await getUser(userId);
    })
});