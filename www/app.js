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

	<!-- clear the echo response field -->
    $('#echo-clear').click(function() {
        $('#echo').html('');
	});

	<!-- ajax: GET,  receive plain HTML -->
    $('#echo-get').click(function() {
        var url = 'http://mobile.szabgab.com/echo?txt=' + $('#txt').val();
        $.ajax({
            url: url,
            success: display_echo_get
        });
        return false;
	});
	function display_echo_get(data) {
        console.log(data);
        $('#echo').html(data);
	}

	<!-- ajax: GET,  receive JSON -->
    $('#echo-get-json').click(function() {
        var url = 'http://mobile.szabgab.com/echo.json';
        var data = {
            "txt" : $('#txt').val()
        };
        $.ajax({
            url: url,
            data: data,
            dataType: "json",
            success: display_echo_get_json
        });
        return false;
	});
	function display_echo_get_json(data) {
        console.log(data);
		var html = 'Method: ' + data["method"] + '<br>';
		html += 'Txt: ' + data["txt"] + '<br>';
		html += 'Server time: ' + data["time"] + '<br>';
        $('#echo').html(html);
	}

	<!-- ajax: POST, receive JSON -->
    $('#echo-post-json').click(function() {
        var url = 'http://mobile.szabgab.com/echo.json';
        var data = {
            "txt" : $('#txt').val()
        };
        $.ajax({
			type: "POST",
            url: url,
            data: data,
            dataType: "json",
            success: display_echo_get_json
        });
        return false;
	});

	<!-- ajax: GET request, JSON reply -->
    $('#send').click(function() {
        var url = 'http://perlmaven.com/search';
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
            html += '<li><a href="http://perlmaven.com/' + prop + '">';
            html += data[prop] + '</a></li>';
        }
        html += '</ul>';
        if (count == 0) {
            html = 'No result';
        }
        console.log(html);
        $('#result').html(html);
    }
});


