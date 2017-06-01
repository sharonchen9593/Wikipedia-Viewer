// api url https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=calvino&format=json&gsrprop=snippet&prop=info&inprop=url
$(function () {

  var apiURL = "https://en.wikipedia.org/w/api.php?"


  $(".submit").on('click', searchWiki)


  function searchWiki() {
    event.preventDefault();
    if ($('.searchBox').val()) {

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
          $('.heading').animate({'margin-top': '20px'}, 'slow')
          searchBox(data)
        },
        error: function() {
          console.log("error getting data :(")
        }
      })

    }
  }

  function searchBox (data) {
    var searchPhrase = data[0];
    console.log(searchPhrase)
    $(".searchOutputBox").html("<p>Top 15 Results For: " + searchPhrase + "</p>")
    var titles = data[1];
    var summaryData = data[2];
    var url = data[3];

    for (var i = 0; i<15; i++) {
      var link = $("<a href = '" + url[i] + "' target='_blank'></a>")
      var item = $("<div class = 'indivResults'> <p class = 'title'>" + titles[i] + "</p></div>")
      var summary = $("<p class = 'summary'> " + summaryData[i] + "</p>")
      item.append(summary)
      link.append(item)
      $(".searchOutputBox").append(link)
    }
  }










})