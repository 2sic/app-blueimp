$(function() {
    /* If Subnav is empty set contentpane to large */
	if ($('.ly-nav-sub').length === 0) {
		$(".ly-col-leftpane").css("display","none");
		$(".ly-col-contentpane").removeClass("col-md-9 col-md-push-3");
	}
});