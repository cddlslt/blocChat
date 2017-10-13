(function() {
    function HomeCtrl(Room, $uibModal) {
        var home = this;
        home.rooms = Room.all;
        home.room = Room;

        home.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            })
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
