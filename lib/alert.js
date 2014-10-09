/*!
 * alert.js v1.0.0 - (c) Graham Licence, freely distributable under the terms of the MIT license.
 * https://github.com/grahamlicence/alert-js
 */
(function() {

    var containerClassName = 'alert-message',   // class of message box
        activeClassName = 'active',             // class when message shown (for CSS animations)
        closeText = 'OK';                    // button text

    // Use modernizr's transition end detection
    function transitionEndEventName () {
        var i,
            undefined,
            el = document.createElement('div'),
            transitions = {
                'transition':'transitionend',
                'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
                'MozTransition':'transitionend',
                'WebkitTransition':'webkitTransitionEnd'
            };

        for (i in transitions) {
            if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
                return transitions[i];
            }
        }

        // otherwise return false
        return false;
    }
    
    // redefine native alert function
    window.alert = function(msg) {
        var container = document.createElement('div'),
            content = document.createElement('p'),
            btn = document.createElement('button'),
            transitionEnd = transitionEndEventName();

        // create popup
        container.appendChild(content);
        container.appendChild(btn);
        container.className = containerClassName;

        // remove popup, with IE fallback
        function removeMessage () {
            if (Element.prototype.remove) {
                container.remove();
            } else {
                document.getElementsByTagName('body')[0].removeChild(container);
            }
        }

        // populate message
        content.innerHTML = msg;

        // set up close button
        btn.innerHTML = closeText;
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            // is there a transition? otherwise just remove 
            if (transitionEnd) {
                // remove class to animate out
                container.className = container.className.replace(' ' + activeClassName, '');
                document.addEventListener(transitionEnd, removeMessage, false);
            } else {
                removeMessage();
            }
        });

        // bring the popup to the front if button has focus (prevents it being hidden when multiple messages shown)
        btn.addEventListener('focus', function () {
            container.style.zIndex = 11;
        });
        btn.addEventListener('blur', function () {
            container.style.zIndex = '';
        });

        document.getElementsByTagName('body')[0].appendChild(container);

        // add keyboard focus to the popup
        btn.focus();
        // animate in
        container.className += ' ' + activeClassName;
    };

})();