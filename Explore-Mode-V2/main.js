$(document).ready(function() {
  $("body").on("click", "#add", function() {
    var num_one = Number($("#num_one").val())
    var num_two = Number($("#num_two").val())

    const result = () => {
      $("#result").html(`${num_one} + ${num_two} = ${num_one + num_two}`)
    }

    result()
  })

  $("body").on("click", "#subtract", function() {
    var num_one = Number($("#num_one").val())
    var num_two = Number($("#num_two").val())

    const result = () => {
      $("#result").html(`${num_one} - ${num_two} = ${num_one - num_two}`)
    }

    result()
  })

  $("body").on("click", "#multiply", function() {
    var num_one = Number($("#num_one").val())
    var num_two = Number($("#num_two").val())

    const result = () => {
      $("#result").html(`${num_one} * ${num_two} = ${num_one * num_two}`)
    }

    result()
  })

  $("body").on("click", "#divide", function() {
    var num_one = Number($("#num_one").val())
    var num_two = Number($("#num_two").val())

    const result = () => {
      $("#result").html(
        `${num_one} / ${num_two} = ${(num_one / num_two).toFixed(2)}`
      )
    }

    result()
  })
})
