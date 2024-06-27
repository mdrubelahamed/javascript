- setTimeout, setInterval, clearTimout, clarInterval

```javascript
// extra code my way
startBtn.addEventListener('click', function(){
  changeBgColor = setInterval(() => {
    body.style.backgroundColor = randomColor();
  }, 1000);

})

stopBtn.addEventListener('click', function(){
  clearTimeout(changeBgColor);
  changeBgColor = null; // i'm flashing out changeBgColor value
})
```

[!intervalId check how in the code](https://www.perplexity.ai/search/if-intervalId-what-V95sUm_FRDGYQWF755n12w)