/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/
//KODELLA
// @module Facets
define('Facets.Browse.View.Extension'
    , [
        'Facets.Browse.View'
        , 'underscore'
        , 'jQuery'
        , 'Utils'

    ]
    , function (
        FacetsBrowseView
        , _
        , jQuery
        , Utils
    ) {
        'use strict';

        _.extend(FacetsBrowseView.prototype, {
            render: function () {
                _.defer(_.bind(function () {
                    this.onReachBottomPage(this.model.get('items').length, this.model.get('total'));
                }, this));

                FacetsBrowseView.__super__.render.apply(this, arguments);
            },
            onReachBottomPage: function onReachPageBottom(count, total) {
                var num = count + 24 > 100 ? num = 100 : num = count + 24;
                var self = this;
                var frag = Backbone.history.fragment;

                console.log("self.getPagination()", self.getPagination());
                console.log("self.translator.getUrl()", self.translator.getUrl());
                console.log("self.translator", self.options.translator);
                console.log("Backbone.history.navigate", Backbone.history.navigate);
                console.log("Utils", Utils);
                console.log("frag", frag);
                console.log("Utils.setUrlParameter(frag, 'show', num)", Utils.setUrlParameter(frag, 'show', num));

                jQuery(window).on("scroll", function (e) {
                    var docHeight = jQuery(document).height();
                    var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
                    var bottom = (docHeight - scrollPos) / docHeight == 0;

                    if (num <= 100) {
                        if (bottom) {
                            //self._setEvent({ event: e, eventName: 'PageSize', value: show, valueOriginal: original });
                            //FacetsBrowseView.prototype._setEvent.apply(self, [{ event: e, eventName: 'PageSize', value: show, valueOriginal: original }]);
                            //console.log(FacetsBrowseView.prototype._setEvent.apply(self, [{ event: e, eventName: 'PageSize', value: show, valueOriginal: original }]));
                            //FacetsBrowseView.prototype.showContent();
                            Backbone.history.navigate(Utils.setUrlParameter(frag, 'show', num), { trigger: true });
                        }
                    }
                });
            }
        });

    });