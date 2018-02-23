firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var database = firebase.database();
        var userRef = database.ref('users/' + user.uid);
        var convoRef;
        userRef.on('child_added', function (snap) {
            $.ajax("/api/users/" + snap.key, {
                type: "GET"
            }).then(function (res) {
                $('#convos').append("<li class='messageBtn list-group-item list-group-item-action' data-userId=" + user.uid + " data-convoId=" + snap.key + "><a>" + res.username + "</a></li>");
                $('.messageBtn').on('click', function () {
                    $('.messageBtn').each(function (index, button) {
                        $(button).removeClass('active');
                    });
                    $(this).addClass('active');
                    $('#messages').empty();
                    $('#sendMessage').attr('data-from', $(this).attr('data-userId'));
                    $('#sendMessage').attr('data-to', $(this).attr('data-convoId'));
                    $('#messageForm').show();
                    var convoId = $(this).attr('data-convoId');
                    if (convoRef) convoRef.off();
                    convoRef = database.ref('users/' + user.uid + '/' + convoId);
                    convoRef.on('child_added', function (snap) {
                        if (snap.val().message.match(/(https?:\/\/.*\.(?:png|jpg|gif))/i)) {
                            $('#messages').append('<li class="list-group-item firebaseMessage"><img class="img-fluid" src="' + snap.val().message + '"/><h6 class="text-right font-weight-light senderName" data-sender="' + snap.val().sender + '"</h6></li>');
                        }
                        else if (snap.val().message.match(/(https:\/\/quiet-refuge-15988\.herokuapp\.com\/post\/)/i)) {
                            var postId = snap.val().message.split('/').pop();
                            $('#messages').append('<li class="list-group-item localPic firebaseMessage" data-postId=' + postId + '><h6 class="text-right font-weight-light senderName" data-sender="' + snap.val().sender + '"</h6></li>');
                        }
                        else {
                            $('#messages').append('<li class="list-group-item firebaseMessage">' + snap.val().message + '<h6 class="text-right font-weight-light senderName" data-sender="' + snap.val().sender + '"</h6></li>');
                        }
                    });
                });
            });
        });
    } else {
        $('#messages').empty();
        $('#convos').empty();
        $('#messageForm').hide();
    }
});

$('#sendMessage').on('click', function (event) {
    event.preventDefault();
    if ($('#postMessage').val()) {
        var database = firebase.database();
        var fromRef = database.ref('users/' + $(this).attr('data-from') + '/' + $(this).attr('data-to'));
        var toRef = database.ref('users/' + $(this).attr('data-to') + '/' + $(this).attr('data-from'));
        fromRef.push({
            message: $('#postMessage').val(),
            sender: $(this).attr('data-from')
        });
        toRef.push({
            message: $('#postMessage').val(),
            sender: $(this).attr('data-from')
        });
        $('#postMessage').val('');
    }
});

$('body').on('DOMNodeInserted', 'li.firebaseMessage', function () {
    $(this).removeClass('firebaseMessage');
    var senderName = $(this).children('h6')[0];
    $.ajax("/api/users/" + $(senderName).attr('data-sender'), {
        type: "GET"
    }).then(function (res) {
        $(senderName).text(res.username);
        $('#messages').scrollTop($('#messages').prop('scrollHeight'));
    });
});

$('body').on('DOMNodeInserted', 'li.localPic', function () {
    $(this).removeClass('localPic');
    var localPic = $(this);
    var postId = $(this).attr('data-postId');
    $.ajax("/api/post/" + postId, {
        type: "GET"
    }).then(function (res) {
        localPic.prepend('<img class="img-fluid" src="' + res[0].url + '"/>');
        $('#messages').scrollTop($('#messages').prop('scrollHeight'));
    });
});