function update_button(id, value) {
    $(id).val(value);
    $(id).prev().find('span').text(value);
}

$(document).ready(function() {
    var counter = 0;
    update_button('#go', counter);

    $('#go').click(function() {
        counter++;
        update_button('#go', counter);
        return false;
    });

    $('#send').click(function() {
        var url = 'http://perl5maven.com/search';
        var data = {
            "keyword" : $('#q').val()
        };
        $.ajax({
            url: url,
            data: data,
            dataType: "json",
            success: display_result
        });
        return false;
    });
    function display_result(data) {
        var count = 0;
        var html = '<ul>';
        for (var prop in data ) {
            count++;
            single = '/' + prop;
            html += '<li><a href="http://perl5maven.com/' + prop + '">';
            html += data[prop] + '</a></li>';
        }
        html += '</ul>';
        if (count == 0) {
            html = 'No result';
        }
        $('#result').html(html);
    }
});
