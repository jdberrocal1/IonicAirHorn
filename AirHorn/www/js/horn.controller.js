(function () {
  var controllerId = 'hornController';
  angular.module('horn').controller(controllerId, [
    '$scope',
    '$ionicPlatform',
    '$cordovaNativeAudio',
    function (
      $scope,
      $ionicPlatform,
      $cordovaNativeAudio
      )
    {
      var vm =this;

      $ionicPlatform.ready(function(){
        $cordovaNativeAudio.preloadSimple('horn1', 'sounds/horn1.mp3');
        $cordovaNativeAudio.preloadSimple('horn2', 'sounds/horn2.mp3');
        $cordovaNativeAudio.preloadSimple('horn3', 'sounds/horn3.mp3');
        $cordovaNativeAudio.preloadSimple('horn4', 'sounds/horn4.mp3');
      });

      vm.play = function(sound) {
        $cordovaNativeAudio.play(sound);
    };

    }
  ])
})();
