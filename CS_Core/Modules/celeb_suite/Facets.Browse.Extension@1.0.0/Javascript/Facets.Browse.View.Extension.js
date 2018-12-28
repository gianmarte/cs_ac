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
                var docHeight = jQuery(document).height();
                var self = this;
                var test = [];
                
                console.log("bottom Page docheight", docHeight);
                console.log("jQuery(window).height() + jQuery(window).scrollTop();", jQuery(window).height() + jQuery(window).scrollTop());

                jQuery(window).on("scroll", function (e) {
                    var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
                    var bottom = (docHeight - scrollPos) / docHeight == 0;
                    var frag = Backbone.history.fragment;

                    if (num <= total) {
                        if (bottom) {
                            var url = Utils.setUrlParameter(frag, 'show', num);
                            window.location.href = "shopping-local.ssp#"+url;
                            //window.history.pushState(null, jQuery(self).attr('title'), "shopping-local.ssp#"+url);
                            /*jQuery.ajax({
                                url:"",
                                data:"",
                                success: function(){
                                    window.location.href = "shopping-local.ssp#"+url
                                }
                            }).done(function() {
                                console.log(window.history.scrollRestoration);
                            });*/
                            jQuery(window).scrollTop(scrollPos);
                            test.push(docHeight);
                        }
                    }
                });
            }
        });

    });