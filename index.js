;(function () {
  var queryString = window.location.search
  var href = window.location.href
  var parameters = new URLSearchParams(queryString)
  var name = parameters.get('name')
  var email = parameters.get('email')

  console.log ("Name:", name, "Email", email)

  var Name = document.querySelector('[data-name]')
  Name.textContent = name
  var Email = document.querySelector('[data-email]')
  Email.textContent = email

  currentUrl.textContent = 'current URL: ' + href

  if (name && email) {
    Name.textContent = 'Name: ' + name
    Email.textContent = 'Email: ' + email
  }
})()