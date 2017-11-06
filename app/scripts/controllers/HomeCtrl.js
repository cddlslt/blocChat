(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        // var home = this;
        this.rooms = Room.all;
        this.room = Room;
        this.currentRoom = null;
        this.messages = Message.all;
        this.username = $cookies.get('blocChatCurrentUser');
        // this.sortedTime = $filter('date')(firebase.database.ServerValue.TIMESTAMP);


        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            })
        };

        this.selectRoom = function(room) {
            this.currentRoom = room;
            this.currentRoom.messages = Message.getByRoomId(this.currentRoom.$id);
        };

        this.sendMessage = function(newMessage) {
            // alert("cake");
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.username;
            this.newMessage.date = firebase.database.ServerValue.TIMESTAMP;
            Message.send(this.newMessage);
        };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
