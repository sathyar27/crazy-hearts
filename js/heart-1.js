$(".hearts").on("click", function() {
	var $heartDiv = $(this), spans;
   spans = Array(21).join("<span class='icon-heart'></span>");
	$heartDiv.html(spans).addClass("active");
	setTimeout(function() {
		$heartDiv.remove();
	}, 5000);
});
