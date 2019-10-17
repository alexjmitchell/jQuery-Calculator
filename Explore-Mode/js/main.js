// $(document).ready(function() {
//   $("#calculator").on("submit", function(e) {
//     e.preventDefault()

//     var num_one = Number($("#num_one").val())
//     console.log(num_one)
//     var num_two = Number($("#num_two").val())
//     console.log(num_two)

//     let add = $("#add").html()
//     let sub = $("#subtraction").html()
//     let div = $("#division").html()
//     let mult = $("#multiplication").html()
//     let oper = add || sub || div || mult

//     const subtraction = () => {
//       $("#results").html(`${num_one} - ${num_two} = ${num_one - num_two}`)
//     }

//     const addition = () => {
//       $("#results").html(`${num_one} + ${num_two} = ${num_one + num_two}`)
//     }

//     const multiplication = () => {
//       $("#results").html(`${num_one} * ${num_two} = ${num_one * num_two}`)
//     }

//     const division = () => {
//       $("#results").html(`${num_one} / ${num_two} = ${num_one / num_two}`)
//     }

//     const calculate = () => {
//       if (oper === sub) {
//         subtraction()
//       } else if (oper === add) {
//         addition()
//       } else if (oper === mult) {
//         multiplication()
//       } else if (oper === div) {
//         division()
//       } else {
//         throw new Error("Something is not working!!!!")
//       }
//     }

//     calculate()
//     console.log(oper)
//   })
// })

$(document).ready(function() {
  $("#calculator").on("submit", function(e) {
    e.preventDefault()

    var num_one = Number($("#num_one").val())
    console.log(num_one)
    var num_two = Number($("#num_two").val())
    console.log(num_two)
  })

  $("button").on("submit", function(e) {
    e.preventDefault()

    var num_one = Number($("#num_one").val())
    console.log(num_one)
    var num_two = Number($("#num_two").val())
    console.log(num_two)

    console.log($(".operator"))
  })
})
