/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Facets
define('Facets.Browse.View.Extension'
    , [
        'Facets.Browse.View'
        , 'Tracker'
        , 'underscore'
        , 'jQuery'
    ]
    , function (
        FacetsBrowseView
        , Tracker
        , _
        , jQuery
    ) {
        'use strict';
        _.extend(FacetsBrowseView.prototype, {
            render: function () {
                _.defer(_.bind(function () {
                    this.onReachPageEnd();
                }, this));

                var list_type = 'Facets';

                if (this.model.get('category')) {
                    list_type = 'Category';
                }
                else if (this.translator.getOptionValue('keywords')) {
                    list_type = 'Search';
                }

                Tracker.getInstance().trackProductList(this.model.get('items'), list_type);
                console.log("this.model.get('items')", this.model.get('items'));

                this._render();
            },
            onReachPageEnd: function () {
                jQuery(window).on("scroll", function () {
                    var scrollHeight = jQuery(document).height();
                    var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
                    if ((scrollHeight - scrollPos) / scrollHeight == 0) {
                        console.log('success');
                    }
                });
            }
        })
    });