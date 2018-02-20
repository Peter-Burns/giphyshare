var config = {
    apiKey: "AIzaSyCKR1CNHFwF-6NL7T4t4C3f91Sk59XMgmg",
    authDomain: "giphy-share.firebaseapp.com",
    databaseURL: "https://giphy-share.firebaseio.com",
    projectId: "giphy-share",
    storageBucket: "giphy-share.appspot.com",
    messagingSenderId: "446676900963"
};
firebase.initializeApp(config);

$('#signUpBtn').on('click', function (event) {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword($('#signUpEmail').val(), $('#signUpPassword').val()).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    }).then(function (user) {
        user.updateProfile({
            displayName: $('#firstName').val() + ' ' + $('#lastName').val(),
        }).then(function () {
            console.log('Success');
        }).catch(function (error) {
            console.log(error);
        });
        $.ajax('/api/users', {
            type: 'POST',
            data: {
                id: user.uid,
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                userame: $('#firstName').val() + ' ' + $('#lastName').val()
            }
        }).then(function () {
            $('#signUpEmail').val('');
            $('#signUpPassword').val('');
            $('#firstName').val('');
            $('#lastName').val('');
        });
    });
});

$('#loginBtn').on('click', function (event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword($('#loginEmail').val(), $('#loginPassword').val()).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
    });
    $('#loginEmail').val('');
    $('#loginPassword').val('');
});

$('#logoutBtn').on('click', function (event) {
    event.preventDefault();
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user.uid);
        console.log(user.displayName);
        $('#userNav').show();
        $('#feedNav').show();
        $('#feedLinkNav').attr('href', '/feed/' + user.uid);
        $('#loginNav').hide();
        $('#signUpNav').hide();
        $('#navUserName').text(user.displayName);
        $('#navUserLink').attr('href', '/user/' + user.uid);
        $('.postBtn').show();
        $('.postBtn').attr('data-user', user.uid);
        $('#followBtn').attr('data-user', user.uid);
        $('.likeBtn').show();
        $('.likeBtn').attr('data-user', user.uid);
        $('.shareBtn').show();
        $('#followBtn').show();
        $('#submitComment').parent().show();
    } else {
        $('#userNav').hide();
        $('#feedNav').hide();
        $('#feedLinkNav').attr('href', '');
        $('#loginNav').show();
        $('#signUpNav').show();
        $('#navUserName').text('');
        $('#navUserLink').attr('href', '');
        $('.postBtn').attr('data-user', '');
        $('.postBtn').hide();
        $('#followBtn').attr('data-user', '');
        $('.likeBtn').attr('data-user', '');
        $('.likeBtn').hide();
        $('.shareBtn').hide();
        $('#followBtn').hide();
        $('#submitComment').parent().hide();
    }
});