var table = $('table');

var cell = '<td><input type="checkbox"></td>';

$('input[type=button]').on('click', function() {
	var name = $('input[type=text]').val();
	
	var col = $('<th>'+name+'<span class="glyphicon glyphicon-remove"/></th>');
	$('span', col).click(function(evt) {
		removePerson($(evt.target).parent().index());
	});
	$('tr', table).first().append(col);
	
	$('tr:not(:first-child)', table).append(cell);
	var nPeople = $('tr', table).length;
	var row = $('<tr><th>'+name+'</th></tr>').appendTo(table);;
	
	for(var i=0;i<nPeople;i++) {
		row.append((i===nPeople-1)?'<td/>':cell);
	}
	
});

function removePerson(index) {
	$('tr', table).each(function(i, row) {
		$('td,th', row).eq(index).detach();
	});
	$('tr', table).eq(index).detach();
}