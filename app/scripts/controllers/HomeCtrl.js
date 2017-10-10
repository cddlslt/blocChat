(function() {
    function HomeCtrl(Room, $uibModal) {
        var home = this;
        home.rooms = Room.all;

        home.modalOpen = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: "ModalCtrl as modal"
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
