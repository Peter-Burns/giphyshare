$('.deletePostBtn').on('click', function (event) {
    event.preventDefault();
    if(firebase.auth().currentUser.uid === $(this).attr('data-user')){
        $.ajax({
            method: "DELETE",
            url: "/api/post/" + $(this).attr('data-postid')
        }).then(function(){
            location.reload();
        });
    }
    else{
        console.log("This isn't your account...");
    }
});
