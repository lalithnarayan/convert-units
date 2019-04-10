var t = new jake.TestTask('dg-convert-units', function () {
  this.testFiles.include('test/*');
});

var d = new jake.PublishTask('dg-convert-units', function () {
  this.packageFiles.include([
    'lib/**'
  , 'test/*'
  , 'Jakefile'
  , 'package.json'
  , 'Readme.md'
    ]);
});

