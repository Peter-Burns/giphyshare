var alertTimeout;
$(".shareBtn").on("click", function (event) {
    event.preventDefault();
    $("#modalPicContainer").empty();
    var src= $(this).parent().parent().children(".postPic");
    $("#modalPicContainer").append(src.clone());
    $("#modalPicContainer").children(".postPic").attr("src",src.attr("data-original"));
    $("#modalPicContainer").children(".postPic").attr("data-src",src.attr("src"));
});

$(".postBtn").on("click", function (event) {
    event.preventDefault();
    var img = $(this).parent().parent().parent().children("#modalPicContainer").children(".postPic");
    $.ajax("/api/posts", {
        type: "POST",
        data: {
            url: img.attr("data-src"),
            urlStill: img.attr("data-fixed"),
            urlOriginal: img.attr("src"),
            urlOriginalStill: img.attr("data-fixed-small"),
            comment: $("#postComment").val(),
            title:$("#postTitle").val(),
            userId: $(this).attr("data-user")
        }
    });
    $("#postComment").val("");
    $("#postTitle").val("");
    $("#shareModal").modal("hide");
    $("nav").after('<div class="alert alert-primary" role="alert">Gif added!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
    if(alertTimeout)clearTimeout(alertTimeout);
    alertTimeout = setTimeout(function(){ 
        $(".alert").remove();
     }, 5000);
});