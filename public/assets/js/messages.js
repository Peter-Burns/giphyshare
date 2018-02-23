firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var database = firebase.database();
        var userRef = database.ref('users/' + user.uid);
        var convoRef;
        userRef.orderByChild('dateAdded').on('child_added', function (snap) {
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
                        $.ajax("/api/users/" + snap.val().sender, {
                            type: "GET"
                        }).then(function (res) {
                            if (snap.val().message.match(/(https?:\/\/.*\.(?:png|jpg|gif))/i)) {
                                $('#messages').append('<li class="list-group-item"><img class="img-fluid" src="' + snap.val().message + '"/>' + '<h6 class="text-right font-weight-light">' + res.username + '</h6></li>');
                                $('#messages').scrollTop($('#messages').prop('scrollHeight'));
                            }
                            else if (snap.val().message.match(/(https:\/\/quiet-refuge-15988\.herokuapp\.com\/post\/)/i)) {
                                var postId = snap.val().message.split('/').pop();
                                $.ajax("/api/post/" + postId, {
                                    type: "GET"
                                }).then(function (result) {
                                    $('#messages').append('<li class="list-group-item"><img class="img-fluid" src="' + result[0].url + '"/>' + '<h6 class="text-right font-weight-light">' + res.username + '</h6></li>');
                                    $('#messages').scrollTop($('#messages').prop('scrollHeight'));
                                });
                            }
                            else {
                                $('#messages').append('<li class="list-group-item">' + snap.val().message + '<h6 class="text-right font-weight-light">' + res.username + '</h6>' + '</li>');
                                $('#messages').scrollTop($('#messages').prop('scrollHeight'));
                            }
                        });
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