(function() {
    function BlocChatCookies($cookies, $uibModal) {

        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser | currentUser === '') {
            $cookies.open = function() {
              var modalInstance = $$uibModal.open({
              templateUrl: 'templates/username.html',
              controller: 'UserNameCtrl',
              controllerAs: 'user',
              keyboard: false
          });
        }
    }
  }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies])
})();
