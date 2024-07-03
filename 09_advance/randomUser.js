fetch(`https://randomuser.me/api/`)
.then(response => response.json())
.then(data => {
  const user = data.results[0];
  const name = `${user.name.title} ${user.name.first} ${user.name.last}`
  const email = `${user.email}`
  const location = `${user.location.city} ${user.location.state} ${user.location.country}`
  
  // print
  console.log(`Name: ${name}`);
  console.log(`Email ${email}`);
  console.log(`Location: ${location}`);
})
.catch((error) => {
  console.log(`ERROR: ${error}`);
})