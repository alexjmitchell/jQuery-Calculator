$(document).ready(function() {
  $("#calculator").on("submit", function(e) {
    e.preventDefault()

    var num_one = Number($("#num_one").val())

    var num_two = Number($("#num_two").val())

    var oper = $(".operator").html()

    // console.log("number one:" + num_one)
    // console.log("number two:" + num_two)
    console.log(num_one + oper + num_two)
  })
})
