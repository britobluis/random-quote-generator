$(function () {
  // Get new quote button functionality
  $("#getQuote").on("click", function () {
    $.ajaxSetup({ cache: false });
    $(".message");
    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=",
      function (data) {
        let random = Math.floor(Math.random() * data.quotes.length);
        $(".message")
          .html("\"" + data.quotes[random].quote
            + "\" — " + data.quotes[random].author);
      }
    );
  });

  //Tweet button functionality
  $("#tweetIt").on("click", function () {
    var phrase = $(".message").text();
    var tweetUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(phrase);
    window.open(tweetUrl);
  });
});
