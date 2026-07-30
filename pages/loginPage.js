

export class SignIn
{
    constructor(page)
    {
        this.page = page
        this.userName = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', {name: ' Login '})
    }

    async browserLauncher()
    {
        await this.page.goto('/')
    }

    async userLogin(data)
    {
        await this.userName.fill(data.userName)
        await this.passwordField.fill(data.password)
        await this.loginButton.click()
    }
}