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
        FacetsBrowseView.extend({
            renderPlus: function () {
                _.defer(_.bind(function () {
                    this.onReachBottomPage(this.model.get('items').length, this.model.get('total'));
                }, this));

                this._render();
            },
            render: function () {
                _.extend({}, FacetsBrowseView.prototype.render, this.renderPlus());
                //FacetsBrowseView.prototype.render.apply(this, renderPlus());
            },
            onReachBottomPage: function (count, total) {
                var num = count + 24;
                num = num <= 100 ? num : num = 100;
                console.log('total', total);
                console.log('count', count);
                console.log('num', num);
                console.log('num <= count + 24', num <= count + 24);

                if (num < total && num <= 101) {
                    jQuery(window).on("scroll", function () {
                        var docHeight = jQuery(document).height();
                        var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
                        var bottom = (docHeight - scrollPos) / docHeight == 0;
                        if (bottom) {
                            var fragment = Backbone.history.fragment;
                            var toAppend = fragment.indexOf('?') == -1 ? '?' : '&';
                            //var toUrl = fragment.indexOf('show') == -1 ? "shopping-local.ssp#" + Backbone.history.fragment + toAppend + 'show=' + num : 
                            console.log('success');
                            //window.location.href = "shopping-local.ssp#" + fragment + toAppend + 'show=' + num;
                            //FacetsBrowseView.prototype.setEvent.apply(this, ['PageSize', num]);
                            console.log("FacetsBrowseView.prototype.getPagination()", _.extend(FacetsBrowseView.prototype.getPagination()));

                        }
                    });
                }
            }
        });
    });