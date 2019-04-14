/**

 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

    'use strict';

    // some helper functions
    /**
     * from https://davidwalsh.name/javascript-debounce-function
     */
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    // some vars
    var bodyEl = document.body,
        // window sizes
        winsize = { width : window.innerWidth, height : window.innerHeight },
        // support for animations
        support = { animations : Modernizr.cssanimations },
        // animationend event function
        animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
        onEndAnimation = function( el, callback ) {
            var onEndCallbackFn = function( ev ) {
                if( support.animations ) {
                    if( ev.target != this ) return;
                    this.removeEventListener( animEndEventName, onEndCallbackFn );
                }
                if( callback && typeof callback === 'function' ) { callback.call(); }
            };
            if( support.animations ) {
                el.addEventListener( animEndEventName, onEndCallbackFn );
            }
            else {
                onEndCallbackFn();
            }
        };

    /**
     * Revealer obj
     */
    function Revealer(options) {
        this.options = extend( {}, this.options );
        extend( this.options, options );
        this._init();
    }

    /**
     * Revealer default options
     */
    Revealer.prototype.options = {
        // total number of revealing layers (min is 1)
        nmbLayers : 1,
        // bg color for the revealing layers
        bgcolor : '#fff',
        // effect classname
        effect : 'anim--effect-1',
        // callback
        onStart : function(direction) { return false; },
        // callback
        onEnd : function(direction) { return false; }
    };

    /**
     * build layer structure
     * add effect class
     * init/bind events
     */
    Revealer.prototype._init = function() {
        // add revealer layers
        this._addLayers();
        // now we have access to the layers
        this.layers = [].slice.call(this.revealerWrapper.children);
        // init/bind events
        this._initEvents();
    };

    /**
     * init/bind events
     */
    Revealer.prototype._initEvents = function() {
        // window resize: recalculate window sizes
        this.debounceResize = debounce(function(ev) {
            winsize = {width: window.innerWidth, height: window.innerHeight};
        }, 10);
        window.addEventListener('resize', this.debounceResize);
    };

    /**
     * build layer structure and append it to the body
     * add effect class
     */
    Revealer.prototype._addLayers = function() {
        this.revealerWrapper = document.createElement('div');
        this.revealerWrapper.className = 'revealer';
        $(bodyEl).addClass(this.options.effect);
        var  strHTML = '';
        for(var i = 0; i < this.options.nmbLayers; ++i) {
            var bgcolor = typeof this.options.bgcolor === 'string' ? this.options.bgcolor : (this.options.bgcolor instanceof Array && this.options.bgcolor[i] ? this.options.bgcolor[i] : '#fff');
            strHTML += '<div style="background:' + bgcolor + '" class="revealer__layer"></div>';
        }
        this.revealerWrapper.innerHTML = strHTML;
        bodyEl.appendChild(this.revealerWrapper);
    };

    /**
     * reveal the layers
     * direction: right || left || top || bottom || cornertopleft || cornertopright || cornerbottomleft || cornerbottomright
     */
    Revealer.prototype.reveal = function(direction, callbacktime, callback) {
        // if animating return
        if( this.isAnimating ) {
            return false;
        }
        this.isAnimating = true;
        // current direction
        this.direction = direction;
        // onStart callback
        this.options.onStart(this.direction);

        // set the initial position for the layers´ parent
        var widthVal, heightVal, transform;
        if( direction === 'cornertopleft' || direction === 'cornertopright' || direction === 'cornerbottomleft' || direction === 'cornerbottomright' ) {
            var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
            widthVal = heightVal = pageDiagonal + 'px';

            if( direction === 'cornertopleft' ) {
                transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0,' + pageDiagonal + 'px,0)';
            }
            else if( direction === 'cornertopright' ) {
                transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0,' + pageDiagonal + 'px,0)';
            }
            else if( direction === 'cornerbottomleft' ) {
                transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)';
            }
            else if( direction === 'cornerbottomright' ) {
                transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) translate3d(0,' + pageDiagonal + 'px,0)';
            }
        }
        else if( direction === 'left' || direction === 'right' ) {
            widthVal = '100vh'
            heightVal = '100vw';
            transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,' + (direction === 'left' ? 90 : -90) + 'deg) translate3d(0,100%,0)';
        }
        else if( direction === 'top' || direction === 'bottom' ) {
            widthVal = '100vw';
            heightVal = '100vh';
            transform = direction === 'top' ? 'rotate3d(0,0,1,180deg)' : 'none';
        }

        this.revealerWrapper.style.width = widthVal;
        this.revealerWrapper.style.height = heightVal;
        this.revealerWrapper.style.WebkitTransform = this.revealerWrapper.style.transform = transform;
        this.revealerWrapper.style.opacity = 1;

        // add direction and animate classes to parent
        $(this.revealerWrapper).addClass('revealer--' + direction || 'revealer--right');
        $(this.revealerWrapper).addClass('revealer--animate');

        // track the end of the animation for all layers
        var self = this, layerscomplete = 0;
        this.layers.forEach(function(layer) {
            onEndAnimation(layer, function() {
                ++layerscomplete;
                if( layerscomplete === self.options.nmbLayers ) {
                    $(self.revealerWrapper).removeClass( 'revealer--' + direction || 'revealer--right');
                   $(self.revealerWrapper).removeClass('revealer--animate');

                    self.revealerWrapper.style.opacity = 0;
                    self.isAnimating = false;

                    // callback
                    self.options.onEnd(self.direction);
                }
            });
        });

        // reveal fn callback
        if( typeof callback === 'function') {
            if( this.callbacktimeout ) {
                clearTimeout(this.callbacktimeout);
            }
            this.callbacktimeout = setTimeout(callback, callbacktime);
        }
    };

    /**
     * destroy method
     */
    Revealer.prototype.destroy = function() {
        $(bodyEl).addClass(this.options.effect);
        window.removeEventListener('resize', this.debounceResize);
        bodyEl.removeChild(this.revealerWrapper);
    };

    window.Revealer = Revealer;

})(window);

var pages
// Call page transition effect
(function() {
    pages = [].slice.call(document.querySelectorAll('.pages > .page')),
        currentPage = 0,

        revealerOpts = {
            // the layers are the elements that move from the sides
            nmbLayers : 3,
            // bg color of each layer
            bgcolor : ['#290b22', '#c71f70', '#e79b14', '#fff'],
            // effect classname
            effect : 'anim--effect-3',
        };

    revealer = new Revealer(revealerOpts);

    $('#first-page').bind('touchmove', function(e) {


        e.preventDefault();

    }, false);

})();

// triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
function reveal(direction) {
    var callbackTime = 750,
        callbackFn = function() {
           $(pages[currentPage]).removeClass('page--current');
            currentPage = currentPage === 0 ? 1 : 0;
            $(pages[currentPage]).addClass('page--current');
        };

    revealer.reveal(direction, callbackTime, callbackFn);
}


//stars
$('.particles-js').each(function(){
    var id= $(this).attr('id');
    particlesJS(id, {
        "particles": {
            "number": {
                "value": 1000,
                "density": {
                    "enable": false,
                    "value_area": 789.1476416322727
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 50
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.68927153781200905,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 0,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 250,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.4,
                "direction": "none",
                "random": true,
                "straight": true,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 83.91608391608392,
                    "size": 3,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

})


