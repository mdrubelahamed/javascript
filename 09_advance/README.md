XMLHttpRequest

state -> 0, 1, 2, 3, 4


```javascript
// PRESERVE
      xhr.onreadystatechange = function() {
        console.log(xhr.readyState); // findindg which state are currently in
        if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        // console.log(typeof data); // string not obj that's why we use JSON.parse
        console.log(data.followers);
      }
    }
    xhr.send() // open called using send
    
  })
```