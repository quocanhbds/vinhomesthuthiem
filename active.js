jQuery(document)['ready'](function() {
    'use strict';
    var _0xe815x1 = jQuery('.navbar'),
        _0xe815x2 = _0xe815x1['offset']();
    jQuery(window)['scroll'](function() {
        if (jQuery(this)['scrollTop']() > _0xe815x2['top'] + _0xe815x1['height']() && _0xe815x1['hasClass']('default') && jQuery(this)['scrollTop']() > 150) {
            _0xe815x1['fadeOut']('fast', function() {
                jQuery(this)['removeClass']('default')['addClass']('fixed')['fadeIn']('fast');
            });
        } else {
            if (jQuery(this)['scrollTop']() <= _0xe815x2['top'] + 150 && _0xe815x1['hasClass']('fixed')) {
                _0xe815x1['fadeOut'](0, function() {
                    jQuery(this)['removeClass']('fixed')['addClass']('default')['fadeIn'](0);
                });
            };
        };
    });
});
jQuery(document)['ready'](function() {
    'use strict';
    var _0xe815x3 = jQuery('.offset'),
        _0xe815x4 = jQuery('.navbar'),
        _0xe815x5 = jQuery('.navbar')['height']();
    if (_0xe815x5 < 103) {
        _0xe815x5 = 103;
    };
    _0xe815x3['css']('padding-top', _0xe815x5 + 'px');
    jQuery(window)['resize'](function() {
        _0xe815x3['css']('padding-top', _0xe815x5 + 'px');
    });
});
jQuery(document)['ready'](function() {
    'use strict';
    jQuery('.owlcarousel')['owlCarousel']({
        navigation: true,
        navigationText: ['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>'],
        pagination: false,
        rewindNav: false,
        items: 3,
        mouseDrag: true,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });
    var _0xe815x6 = '';
    jQuery('#postct img')['each'](function() {
        var _0xe815x7 = jQuery(this)['attr']('src');
        _0xe815x6 += '<div class="owl-item"><div class="item"><img src="' + _0xe815x7 + '"/></div></div>';
    })['remove']();
    var _0xe815x8 = jQuery('.owl-portfolio-slider');
    _0xe815x8['append'](_0xe815x6);
    _0xe815x8['owlCarousel']({
        navigation: false,
        autoHeight: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });
    jQuery('.slider-next')['click'](function() {
        _0xe815x8['trigger']('owl.next');
    });
    jQuery('.slider-prev')['click'](function() {
        _0xe815x8['trigger']('owl.prev');
    });
    jQuery('#ei-slider')['eislideshow']({
        animation: 'center',
        autoplay: true,
        slideshow_interval: 3000,
        titlesFactor: 0
    });
});
jQuery(document)['ready'](function() {
    'use strict';
    jQuery('.js-activated')['dropdownHover']({
        instantlyCloseOthers: false,
        delay: 0
    })['dropdown']();
    jQuery('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input')['click'](function(_0xe815x9) {
        _0xe815x9['stopPropagation']();
    });
});
jQuery(document)['ready'](function() {
    jQuery('#footerh')['append']('<p>2016 Vinhomes Thủ Thiêm. All rights reserved. ></p>');
});
jQuery(document)['ready'](function() {
    'use strict';
    jQuery('.icon-overlay a')['prepend']('<span class="icn-more"></span>');
});
jQuery(document)['ready'](function() {
    'use strict';
    if (jQuery('#testimonials li')['length'] > 0) {
        jQuery('#testimonials')['easytabs']({
            animationSpeed: 500,
            updateHash: false,
            cycle: 5000
        });
    };
});
