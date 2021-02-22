// This allows the button to call the function
document.getElementById('click').addEventListener('click', checker)

// This function tells the user if there is school/work or not
function checker() {
  // This lines below store the inputs into the variables
  const date = document.getElementById('date').value
  const age = document.getElementById('age').value
  // The condition below checks if they are a student or not
  console.log(date)
  console.log(age)
  if (((date === 'saturday') || (date === 'sunday')) && (age <= 17)) {
    document.getElementById('result').innerHTML = 'It is not a weekday, No school!'
  } else if (((date != 'saturday') || (date != 'sunday')) && (age <= 17)) {
    document.getElementById('result').innerHTML = 'It is a weekday, time for school!'
  } else if (((date === 'saturday') || (date === 'sunday')) && (age >= 18)) {
    document.getElementById('result').innerHTML = 'It is not a weekday, Time to relax!'
  } else {
    document.getElementById('result').innerHTML = 'It is weekday, Time for Work!'
  }
}

  

