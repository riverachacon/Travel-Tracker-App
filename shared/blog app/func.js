
console.log("Hola")

$(".delete").on('click', function(x){

    var selectedPost = $(this).closest('.card')
    var postId = selectedPost.attr('id')
    $.ajax({
        url: "/delete",
        type: "post",
        data: {blogId: postId},
        success: function (result){
            alert("post deleted")
            selectedPost.remove();

        },
        error: function(err){
        }

    })

    
    
})