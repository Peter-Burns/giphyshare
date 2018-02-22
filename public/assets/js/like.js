$('.likeBtn').on('click', function (event) {
    event.preventDefault();
    var self=this;
    $.ajax('/api/likes', {
        type: 'POST',
        data: {
            postId:$(this).attr('data-postid'),
            userId:$(this).attr('data-user')
        }
    }).then(function(){
        $.ajax('/api/likes/' + $(self).attr('data-postid'), {
            type: 'GET'
        }).then(function(res){
            if(res.length){
                $(self).prepend('<b>' + res.length + '</b>');
            }
        });
    });
});

$('.likeBtn').each(function(index, button){
    $.ajax('/api/likes/' + $(button).attr('data-postid'), {
        type: 'GET'
    }).then(function(res){
        if(res.length){
            $(button).prepend('<b>' + res.length + '</b>');
        }
    });
});