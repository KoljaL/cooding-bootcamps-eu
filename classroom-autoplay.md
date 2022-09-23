# try to add an autoply to classrom playlists

## WISTIA Links:
- [silentAutoPlay](https://wistia.com/support/developers/embed-options#silentautoplay)
- [PlayerAPI](https://wistia.com/support/developers/player-api)

## Requestly
Browser extension to add js in websites

- https://requestly.io/ 


## this works
exept the `options` so no autoplay with sound
```js
window._wq = window._wq || []
_wq.push({
  id: '_all',
  // options: {
  //   autoPlay: true,
  //   silentAutoPlay: false,
  //   muted: false
  // },
  onReady: function (video) {
    video.play()

    // click on next lecture link
    video.bind('end', function () {
      console.log('video end & next')
      document.querySelector('a.smart-next__link--small').click()
    })
  }
})
```

## try to klick the silentPlayButton

works in the browser console
```js
console.log(document.querySelector('[aria-label="Klicken Sie hier, um den Ton einzuschalten"]').parentElement)
```
dont work inside the included js file :-(
```js
setTimeout(() => {
  document.querySelector('[aria-label="Klicken Sie hier, um den Ton einzuschalten"]').parentElement.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  setTimeout(() => {
    document.querySelector('[id^="wistia_chrome_"]').dispatchEvent(new MouseEvent('click', { bubbles: true }))
    document.querySelector('videoread').dispatchEvent(new MouseEvent('click', { bubbles: true }))
  }, 500);
}, 500);
```


### garbage...

```js
window._wq = window._wq || []
_wq.push({
  id: '_all',
  onReady: function (video) {
    video.play()
    video.unmute()
    setTimeout(() => {
      var element1 = document.querySelector('[id^="wistia_chrome_"]')
      var element2 = document.querySelector('[id^="w-vulcan-v2-"]')
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false
      })

      document
        .querySelector('[id^="wistia_chrome_"]')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }))
      document
        .querySelector('[id^="w-vulcan-v2-"]')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }))
      document
        .querySelector('.w-bpb-wrapper.w-css-reset.w-css-reset-tree')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }))
      document
        .querySelector(
          '.w-vulcan-v2-button.w-css-reset.w-css-reset-tree.w-css-reset-button-important'
        )
        .dispatchEvent(new MouseEvent('click', { bubbles: true }))
      document.querySelector('[aria-label="Klicken Sie hier, um den Ton einzuschalten"]').parentElement.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      element1.dispatchEvent(clickEvent)
      element2.dispatchEvent(clickEvent)
      console.log(element1)
      console.log(element2)
    }, 1500)

    // click on next lecture
    video.bind('end', function () {
      console.log('video end & next')
      document.querySelector('a.smart-next__link--small').click()
    })
  }
})

window._wq = window._wq || []
_wq.push({
  id: '_all',
  options: {
    videoFoam: true,
    playerColor: 'ff0000',
    silentAutoPlay: false
  }
})

video.bind('play', function () {
  var element = document.querySelector('#wistia_chrome_51')
  const clickEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: false
  })
  element.dispatchEvent(clickEvent)
})

video.bind('play', function () {
  console.log('play')
  var element = (document.querySelector('video').attributes.muted =
    'muted=false')
  var element = (document.querySelector('video').autoplay = true)

  var element = document.querySelector(
    '#wistia_chrome_51 #wistia_grid_57_wrapper div.w-css-reset'
  )

  var event = new Event('click')
  element.dispatchEvent(event)
  console.log(element)
})

var elem = document.querySelector('.w-css-reset.w-css-reset-tree')

if (typeof elem.onclick == 'function') {
  elem.onclick.apply(elem)
  console.log(elem)
}

let wistiaEmbed = Wistia.embed('wistia_631t6t10lz')
console.log(wistiaEmbed)
wistiaEmbed.hasData(function () {
  wistiaEmbed.bind('play', function () {
    console.log('video played', wistiaEmbed.name())
  })
})

document.querySelector('.w-big-play-button').click()

window._wq = window._wq || [];
_wq.push(function(W) {
  W.api(function(video) {
      video.play();
      video.unmute();
  });
});

video.bind("play", function() {
  console.log("The video was just played!");
  if(isMuted){
    video.unmute();
    console.log("Is the video muted?", isMuted ? "yes" : "no");
    video.play();
    }
});

let wistiaEmbed = Wistia.embed('631t6t10lz')
console.log(wistiaEmbed)

wistiaEmbed.hasData(function () {
  wistiaEmbed.bind('play', function () {
    console.log('video played', wistiaEmbed.name())
  })
})

var wistiaEmbed = Wistia.embed('bft7cafb5e', {
  autoPlay: true,
  silentAutoPlay: false,
  muted: false
})
console.log(wistiaEmbed)
```