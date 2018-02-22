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
            $.ajax('/api/users', {
                type: 'POST',
                data: {
                    id: user.uid,
                    firstName: $('#firstName').val(),
                    lastName: $('#lastName').val(),
                    username: $('#firstName').val() + ' ' + $('#lastName').val()
                }
            }).then(function () {
                $('#signUpEmail').val('');
                $('#signUpPassword').val('');
                $('#firstName').val('');
                $('#lastName').val('');
                location.reload();
            }).catch(function (error) {
                console.log(error);
            });
        });
    });
});

$('#signUpFormBtn').on('click', function (event) {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword($('#signUpFormEmail').val(), $('#signUpFormPassword').val()).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    }).then(function (user) {
        user.updateProfile({
            displayName: $('#firstNameForm').val() + ' ' + $('#lastNameForm').val(),
        }).then(function () {
            $.ajax('/api/users', {
                type: 'POST',
                data: {
                    id: user.uid,
                    firstName: $('#firstNameForm').val(),
                    lastName: $('#lastNameForm').val(),
                    username: $('#firstNameForm').val() + ' ' + $('#lastNameForm').val()
                }
            }).then(function () {
                $('#signUpFormEmail').val('');
                $('#signUpFormPassword').val('');
                $('#firstNameForm').val('');
                $('#lastNameForm').val('');
                if(location.pathname === '/signup'){
                    location.replace('/posts');
                }
                else{
                    location.reload();
                }
            }).catch(function (error) {
                console.log(error);
            });
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

$('#loginFormBtn').on('click', function (event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword($('#loginFormEmail').val(), $('#loginFormPassword').val()).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
    });
    $('#loginFormEmail').val('');
    $('#loginFormPassword').val('');
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
        $('#navUserName').text(user.displayName);
        $('#userNav').show();
        $('#feedNav').show();
        $('#feedLinkNav').attr('href', '/feed/' + user.uid);
        $('#loginNav').hide();
        $('#signUpNav').hide();
        $('#navUserLink').attr('href', '/profile/' + user.uid);
        $('.postBtn').show();
        $('.postBtn').attr('data-user', user.uid);
        $('#followBtn').attr('data-user', user.uid);
        $('.likeBtn').show();
        $('.likeBtn').attr('data-user', user.uid);
        $('.shareBtn').show();
        $('#followBtn').show();
        $('#submitComment').parent().parent().show();
        $('#submitComment').attr('data-user', user.uid);
        $('#accountBtn').hide();
        $('.signUpBtn').hide();
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
        $('#submitComment').parent().parent().hide();
        $('#submitComment').attr('data-user', '');
        $('#accountBtn').show();
        $('.signUpBtn').show();
    }
});