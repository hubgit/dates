$(function() {
	var form = $('#diff-days');
	var inputs = form.find('input');
	var output = form.find('output');

	inputs.on('change', function() {
		var dates = inputs.map(function() {
			return new Date(this.value);
		});

		var diff = Math.abs(dates[0] - dates[1]);
		var days = Math.round(diff / (3600 * 24 * 1000));

		output.val(days);
	});
});
