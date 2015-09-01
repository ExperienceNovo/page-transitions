(function() {
	var container = document.querySelector( 'div.container' ),
		triggerBttn1 = document.getElementById( 'trigger-overlay1' ),		
        triggerBttn2 = document.getElementById( 'trigger-overlay2' ),		
        triggerBttn3 = document.getElementById( 'trigger-overlay3' ),		
        triggerBttn4 = document.getElementById( 'trigger-overlay4' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' ),		
        closeA = overlay.querySelector( 'a.overlay-close' ),       
        closeImg1 = overlay.querySelector( '.icon-click1' ),
        closeImg2 = overlay.querySelector( '.icon-click2' ),
        closeImg3 = overlay.querySelector( '.icon-click3' ),
        closeImg4 = overlay.querySelector( '.icon-click4' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.remove( container, 'overlay-open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	triggerBttn1.addEventListener( 'click', toggleOverlay );	
    triggerBttn2.addEventListener( 'click', toggleOverlay );	
    triggerBttn3.addEventListener( 'click', toggleOverlay );	
    triggerBttn4.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );	
    closeA.addEventListener( 'click', toggleOverlay );    
    closeImg1.addEventListener( 'click', toggleOverlay );
    closeImg2.addEventListener( 'click', toggleOverlay );
    closeImg3.addEventListener( 'click', toggleOverlay );
    closeImg4.addEventListener( 'click', toggleOverlay );
    
})();