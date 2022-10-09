import { getPage } from '../helpers'
import { serve } from '../runners'

jest.retryTimes(2)

test('crx runs from server output', async () => {
  const { browser } = await serve(__dirname)
  const page = await getPage(browser, 'chrome-extension')

  const app = page.locator('#app')
  await app.locator('img').waitFor()

  expect(await app.screenshot()).toMatchImageSnapshot({
    customSnapshotIdentifier: __filename + 1,
  })
})
