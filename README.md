Alert.js
-----------

**Unobtrusive alert messaging**


_alert.js_ changes the default behaviour of JavaScript alerts so the site is still usable when shown and so they can be styled to fit the theme of the site. 

Alert is library agnostic, and tested in IE7+, Chrome, Firefox, Opera, and Safari as well as iOS and Android. 

Live demo for [theme-1](http://grahamlicence.github.io/alert-js/examples/theme-1.html) and [theme-2](http://grahamlicence.github.io/alert-js/examples/theme-2.html). 

### Customising

There are two example themes are in the css folder. The generated html is:

```html
    <div class="alert-message active"><p>message</p><button>Close</button></div>
```

The active class is used to trigger the CSS animation. Both classes can be changed from the `containerClassName` and `activeClassName` variables. The button text is set in `closeText`. 