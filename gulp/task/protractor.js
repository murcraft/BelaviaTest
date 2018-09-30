'use strict'

module.exports = function () {
  $.gulp.task('startProtractor', function () {
    $.gulp
    .src(['./spec/oneWaySpec.js'])
    .pipe($.notify('Were found changes, Executing scripts'))
    .pipe($.protractor({
      configFile: 'protractorConf.js',
      directConnect: true,
      browserName: 'chrome'
    }))
    .on('error', function (e) {
      console.log(e)
    })

  })

}