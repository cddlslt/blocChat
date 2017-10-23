(function() {
    function BlocChatCookies($cookies, $uibModal) {

        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
           $uibModal.open({
              templateUrl: '/templates/username.html',
              controller: 'UserNameCtrl',
              controllerAs: 'user',
              keyboard: false,
              backdrop: 'static'
          });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies])
})();
