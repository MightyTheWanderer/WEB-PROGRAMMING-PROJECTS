fetch('http://api.open-notify.org/astros.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
