

$(document).ready(function(x){
    console.log("Hola")
    $(".delete").on('click', function(x){

        var selectedPost = $(this).closest('.card')
        var divId = selectedPost.attr('id')
        console.log(divId)


        $.ajax({ 
            url: "/delete",
            type: "post",
            data: {blogId: divId}, // blogId= divId
            success: function (result){
                alert("post deleted")
                window.location.href="/"

            },
            error: function(err){
            }

        })
    
    })
})
