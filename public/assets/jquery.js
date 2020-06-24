$(document).ready(function(){
    $('form').on('submit', function(){
        var title = $('form input[name=title]');
        var content = $('form input[name=content]');
        var posts = {title: title.val(), content: content.val()};

        $.ajax({
            type:'POST',
            url: '/add_post',
            data: posts,
            success: function(data){
                location.reload();
            }
        });

    });

    $('form').on('submit', function(){
        var title = $('form input[name=title]');
        var content = $('form input[name=content]');
        var posts = {title: title.val(), content: content.val()};

        $.ajax({
            type:'GET',
            url: '/post',
            data: posts,
            success: function(data){
                location.reload();
            }
        });

    });

    $('td:nth-child(4)').on('click', function(){
        var item = $(this).closest('tr').children('td:first').text().replace(/ /g, "-");

        $.ajax({
            type: 'DELETE',
            url: '/list_posts/'+item,
            success: function(data){
                location.reload();
            }
        });
    });
});