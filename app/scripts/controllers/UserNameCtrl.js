(function() {
    function UserNameCtrl($uibModalInstance, $cookies) {

        this.submit = function(username) {
            if (username === '') {
                alert("You must enter a valid user name");
            } else {
                $cookies.put('blocChatCurrentUser', username);
                $uibModalInstance.close();
            }

        };
    }

    angular
        .module('blocChat')
        .controller('UserNameCtrl', ['uibModalInstance', '$cookies', UserNameCtrl]);
})();
