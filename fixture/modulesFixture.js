import {test as base} from '../fixture/loginFixture.js'
import {pimPage} from '../pages/pimPage.js'
import {Time} from '../pages/timePage.js'
import {Leave} from '../pages/leavePage.js'

export let test = base.extend(
    {
        pimPage: async ({page}, use) => {
            let pim = new pimPage(page)
            await use(pim)
        },
        timePage: async ({page}, use) => {
            let userTime = new Time(page)
            await use(userTime)
        },
        leavePage: async ({page}, use) => {
            let userLeave = new Leave(page)
            await use(userLeave)
        }
    }
)