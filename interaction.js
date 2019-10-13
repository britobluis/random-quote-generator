$(function () {
  // Get new quote button functionality
  $("#getQuote").on("click", function () {
    $.ajaxSetup({ cache: false });
    $(".message");
    $.getJSON(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
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
