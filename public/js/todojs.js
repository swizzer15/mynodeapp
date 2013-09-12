$( document ).ready(function() {
    $('#table').hide();
    $('.btn-primary').click(function(){
    	html = '<tr>';
    	html += '<td width=30><i class="icon-bitbucket"></i></td>'
    	html += '<td width=30>update</td>'
    	html += '<td>value</td>'
    	html += '</tr>'
    	
    	$('#table').append(html);
    	$('#table').show();
    });
});


