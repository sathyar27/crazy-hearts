$('.hearts').one('click', function() {
	var $heartDiv = $(this), $heartNew = $heartDiv.find(".heartNew");
	var $count = $heartDiv.find(".count"),
		val = parseInt($count.text());
		$count.text(val+1);
	   $heartNew.addClass('activeNew');
});
