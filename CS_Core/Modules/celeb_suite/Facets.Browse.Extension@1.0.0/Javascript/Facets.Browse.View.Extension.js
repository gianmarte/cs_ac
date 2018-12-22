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
        , 'Facets.Helper'
        , 'Facets.Model'
        , 'Categories'
        , 'Categories.Model'
        , 'AjaxRequestsKiller'
        , 'Profile.Model'
        , 'Tracker'
        , 'underscore'
        , 'jQuery'
        , 'Utils'

    ]
    , function (
        FacetsBrowseView
        , FacetsHelper
        , FacetsModel
        , Categories
        , CategoriesModel
        , AjaxRequestsKiller
        , ProfileModel
        , Tracker
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

                var list_type = 'Facets';

                if (this.model.get('category')) {
                    list_type = 'Category';
                }
                else if (this.translator.getOptionValue('keywords')) {
                    list_type = 'Search';
                }

                Tracker.getInstance().trackProductList(this.model.get('items'), list_type);

                this._render();
            },
            onReachBottomPage: function (count, total) {
                var num = count+24;
                num = num <= 100 ? count+=24 : num = 100;
                console.log("Backbone.history.fragment", Backbone.history);
                if(num <= total || num <= 100){
                    jQuery(window).on("scroll", function () {
                        var docHeight = jQuery(document).height();
                        var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
                        var bottom = (docHeight - scrollPos) / docHeight == 0;
                        if (bottom) {
                            window.location.href = "shopping-local.ssp#search?show="+num;
                        }
                    });
                }
            }
        })
    });