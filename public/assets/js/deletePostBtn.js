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
    var fromRef = database.ref('users/' + $(this).attr('data-from') + '/' + $(this).attr('data-to'));
    var toRef = database.ref('users/' + $(this).attr('data-to') + '/' + $(this).attr('data-from'));
    fromRef.push('Hi!', function () {
        toRef.push('Hi!', function () {
            location.replace('/messages');
        });
    });
});