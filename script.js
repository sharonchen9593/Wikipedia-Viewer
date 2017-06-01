// api url https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=calvino&format=json&gsrprop=snippet&prop=info&inprop=url
$(function () {

  var apiURL = "https://en.wikipedia.org/w/api.php?"


  $(".submit").on('click', searchWiki)


  function searchWiki() {
    event.preventDefault();
    $.ajax({
      url: apiURL,
      type: "GET",
      data: {
        origin: '*',
        action: "opensearch",
        search: $('.searchBox').val(), // change this to user input
        limit: "15",
        format: "json",
      },
      success: function(data) {
        console.log("sucess!", data)
        $('.searchBox').val('')
        searchBox(data)
      },
      error: function() {
        console.log("error getting data :(")
      }
    })
  }



















})