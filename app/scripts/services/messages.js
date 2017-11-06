(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            var messages = ref.orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(messages);
        };

        Message.send = function(newMessage) {
            var ref = firebase.database().ref().child("messages");
            var msgArray = $firebaseArray(ref);
              if (newMessage != undefined || newMessage != null) {
                  msgArray.$add({content: newMessage, roomId: roomId,
                    sentAt: sortedTime, username: username});
        }
    };;

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
