import {test} from '../fixture/modulesFixture.js'
import userData from '../test_data/login.json'

test.beforeEach('Login User', async ({loginPage}) => {
    await loginPage.browserLauncher(userData)
    await loginPage.userLogin(userData)
})

test('Time Page', async ({timePage}) => {
    console.log('Launch Successful')
    await timePage.timeClick()
})