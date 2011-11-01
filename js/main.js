$(function() {
  $("#addon_list").each(function() {
    $("#addon_list").empty()
    $("#addon_list").append(
      $("<tr>").append(
        $("<td>").text("Loading...")
      )
    )

    $.getJSON("http://github.com/api/v2/json/repos/show/swufedrupal?callback=?", function(data) {
      $("#addon_list").empty()

      data.repositories.sort(function(a,b) {
        var keya = a.name.toLowerCase()
        var keyb = b.name.toLowerCase()
        if (keya < keyb) return -1
        if (keya > keyb) return 1
        return 0
      })

      $.each(data.repositories, function(i,item) {
        if (item.description.match("Drupal")) {
          var row = $("<tr>").attr("id", "addon-"+item.name)
     $("<td>").addClass("addon_name").addClass("no_wrap").text(item.name).appendTo(row)
          $("<td>").addClass("addon_desc").text(item.description).appendTo(row)
          var last_cell = $("<td>").addClass("addon_links").addClass("no_wrap").addClass("right-text").addClass("padded_links").appendTo(row)

          last_cell.append($("<a>").text("Repo").attr("href", item.url))
          $("#addon_list").append(row)

        }
      })
 
   })
  })

  $(".showmorelink").remove()
  $(".top_post .showmore").before(
    $("<span>").addClass("showmorelink").text("more >>").click(function() {
      $(".top_post .thumb").remove()
      $(".showmorelink").remove()
      $(".top_post .showmore").show()
    })
  )
})
