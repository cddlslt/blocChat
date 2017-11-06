(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        var home = this;
        home.rooms = Room.all;
        home.room = Room;
        home.currentRoom = null;
        home.messages = Message.all;
        home.username = $cookies.get('blocChatCurrentUser');
        this.sortedTime = $filter('date')(firebase.database.ServerValue.TIMESTAMP);


        home.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            })
        };

        home.selectRoom = function(room) {
            home.currentRoom = room;
            home.currentRoom.messages = Message.getByRoomId(room.$id);
        };

        home.createNewMessage = function(newmsg, roomId, username, sortedTime) {
            this.sentMsg = Message.send(newmsg, roomId, username, sortedTime);
        };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
