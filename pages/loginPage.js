

export class SignIn
{
    constructor(page)
    {
        this.page = page
        this.userName = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', {name: ' Login '})
    }

    async browserLauncher(data)
    {
        await this.page.goto(data.url)
    }

    async userLogin(data)
    {
        await this.userName.fill(data.userName)
        await this.passwordField.fill(data.password)
        await this.loginButton.click()
    }
}