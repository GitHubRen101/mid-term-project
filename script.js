
$(document).ready(function () {
    var counter = 1,
        timer;

    function rotate() {
        if (counter > 3) { counter = 1; }
        $(".iBannerContent").hide();
        $("#banner" + counter).fadeIn("slow", function () {
            var linkSrc = $(this).find(".hdnBannerLink").attr("banner-link");
            $("#bannerLink").attr("href", linkSrc);
            counter++;
            timer = setTimeout(function () {
                rotate();
            }, 8000);
        });
    }

    rotate();    // run it!
});
