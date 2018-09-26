class BasePage {
  constructor (){
  }

  async navigate(targetUrl){
    browser.get(targetUrl)
  }





}

module.exports = BasePage