

export class Leave{
    constructor(page)
    {
        this.page = page
        this.leaveModule = page.getByText('Leave').first()
    }

    async leaveClick()
    {
        await this.leaveModule.click()
    }
}