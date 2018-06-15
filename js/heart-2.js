$(".caption").one("click", function() {
	var $heartDiv = $(this), spans;
	var $count = $heartDiv.find(".count"),
	val = parseInt($count.text());
	$count.text(val+1);
	spans = Array(6).join("<span class='icon-heart'></span>");
	$heartDiv.append(spans).addClass("active");
	setTimeout(function() {
		$heartDiv.find(">span").remove();
	}, 4000);

});
