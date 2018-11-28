

console.log('what the fuck iiiii')

function findEmails(str) {

  if (!str) {
    return []
  }

  var findEmailRegex = /([a-zA-Z0-9-_.+]+)@/gim
  var match = findEmailRegex.exec(str)
  var emails = []

  while (match != null) {
    emails.push(match[0].replace('@', ''))
    match = findEmailRegex.exec(str)
  }

  return emails
}

window.onload = function() {

  console.log('test11')
var findEmailButton = document.getElementById('find')

//add event listener
findEmailButton.addEventListener('click', function(event) {
  console.log('test')
  var raw = document.getElementById('raw').value
  var emails = findEmails(raw)
  document.getElementById('emails').value = emails.join(',')
});

}


console.log('what the fuck')
  
