(function() {
    function UserNameCtrl($uibModalInstance, $cookies) {
        var username = this.username;
        this.submit = function() {
            if (!this.username || this.username === "") {
                alert("You must enter a valid user name");
                console.log(this.username);
            } else {
                $cookies.put('blocChatCurrentUser', this.username);
                $uibModalInstance.close();
                console.log(this.username);
                console.log('blocChatCurrentUser');
            }

        };
    }

    angular
        .module('blocChat')
        .controller('UserNameCtrl', ['$uibModalInstance', '$cookies', UserNameCtrl]);
})();
