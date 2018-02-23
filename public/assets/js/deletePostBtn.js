$(".deletePostBtn").on("click", function (event) {
    event.preventDefault();
    if (firebase.auth().currentUser.uid === $(this).attr("data-user")) {
        $.ajax({
            method: "DELETE",
            url: "/api/post/" + $(this).attr("data-postid")
        }).then(function () {
            location.reload();
        });
    }
    else {
        console.log("This isn't your account...");
    }
});

$(".unfollowUserBtn").on("click", function (event) {
    event.preventDefault();
    if (firebase.auth().currentUser.uid === $(this).attr("data-user")) {
        $.ajax({
            method: "DELETE",
            url: "/api/followers/" + $(this).attr("data-id")
        }).then(function () {
            location.reload();
        });
    }
    else {
        console.log("This isn't your account...");
    }
});

$('.startConvo').on('click', function (event) {
    event.preventDefault();
    var database = firebase.database();
    var sender = $(this).attr('data-from');
    var recipient = $(this).attr('data-to');
    var fromRef = database.ref('users/' + sender + '/' + recipient);
    var toRef = database.ref('users/' + recipient + '/' + sender);
    fromRef.push({message: 'Hi!', sender: sender}, function () {
        toRef.push({message: 'Hi!', sender: sender}, function () {
            location.replace('/messages');
        });
    });
});