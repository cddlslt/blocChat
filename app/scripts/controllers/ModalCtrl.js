(function() {
    function ModalCtrl(Room, $uibModal) {
        var modal = this;

        // modal.open = function() {
        //       $uibModal.open();
        // }

        modal.close = function() {
              $uibModal.dismiss();
        }

        modal.submit = function(room) {
              Room.add(room);
              $uibModal.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl])
})();
