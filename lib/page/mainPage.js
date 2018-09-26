let BasePage = require ('./basePage')

class MainPage extends BasePage {
  constructor () {
    super()
    this.Url = 'http://www.belavia.by'
  }

  async navigate(){
    super.navigate(this.Url)
  }

}

module.exports = MainPage