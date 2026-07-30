

export class Time{
    constructor(page)
    {
        this.page = page
        this.timeModule = page.getByText('Time').first()
    }

    async timeClick()
    {
        await this.timeModule.click()
    }
}