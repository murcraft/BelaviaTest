let MainPage = require('../lib/page/mainPage')

let mainPage

describe('Test belavia.com from Minsk to RIga with ticket in one way', () => {

  beforeAll(async () => {
    mainPage = new MainPage()
  })

  it('fill data tickets', async () => {
    await mainPage.navigate()
    await expect(0).toBe(0)

  })
})

