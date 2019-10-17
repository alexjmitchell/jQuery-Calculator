$(document).ready(function() {
  let num1 = ""
  let num2 = ""
  let oper = ""
  $(".container").on("click", "button", function(e) {
    var val = $(this).html()

    if (val === "=") {
      if (oper === "+") {
        $("#results").html(Number(num1) + Number(num2))
      } else if (oper === "-") {
        $("#results").html(Number(num1) - Number(num2))
      } else if (oper === "*") {
        $("#results").html(Number(num1) * Number(num2))
      } else if (oper === "/") {
        $("#results").html(Number(num1) / Number(num2))
      }
    } else if (val === "+" || val === "-" || val === "*" || val === "/") {
      oper = val
    } else if (val === "C") {
      num1 = ""
      num2 = ""
      oper = ""
      $("#results").html("")
    } else {
      if (oper === "") {
        num1 += val
      } else {
        num2 += val
      }
    }
    console.log(num1, oper, num2)
  })
})
