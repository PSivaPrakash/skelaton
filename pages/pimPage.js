

export class pimPage{
    constructor(page)
    {
        this.page = page
        this.pimModule = page.getByText('PIM')
    }

    async pimClick()
    {
        await this.pimModule.click()
    }
}