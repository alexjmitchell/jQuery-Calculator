$(document).ready(function() {
  let num1 = ""
  let num2 = ""
  let oper = ""
  $(".container").on("click", "button", function(e) {
    var val = $(this).html()
    function result() {
      if (val === "=") {
        let answer = null
        if (oper === "+") {
          answer = Number(num1) + Number(num2)
        } else if (oper === "-") {
          answer = Number(num1) - Number(num2)
        } else if (oper === "*") {
          answer = Number(num1) * Number(num2)
        } else if (oper === "/") {
          answer = Number(num1) / Number(num2)
        }

        $("#results").html(answer)

        num1 = answer
      } else if (val === "+" || val === "-" || val === "*" || val === "/") {
        oper = val
        num2 = ""
      } else if (val === "C") {
        num1 = ""
        num2 = ""
        oper = ""
        $("#results").html("")
      } else {
        if (oper === "") {
          if ($("#decimal").html() === ".") {
            num1 + val + num1
          }
          num1 += val
          $("#results").html(Number(num1))
        } else {
          if ($("#decimal").html() === ".") {
            num2 + val + num2
          }
          num2 += val
          $("#results").html(Number(num2))
        }
      }
    }
    result()
  })
})
