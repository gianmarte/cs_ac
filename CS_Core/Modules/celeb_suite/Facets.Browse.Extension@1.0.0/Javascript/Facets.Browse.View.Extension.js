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
            renderPlus: function(){

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
            render: function () {
                _.extend(FacetsBrowseView.prototype.render, this.renderPlus());
            },
            onReachBottomPage: function onReachPageBottom(count, total) {
                var num = count+24 > 100 ? num = 100 : num = count + 24;
                console.log('total', total);
                console.log('count', count);
                console.log('num', num);
                console.log('num <= count + 24', num <= count + 24);

                _.extend(FacetsBrowseView.prototype, Backbone.Events);

                FacetsBrowseView.prototype.on("scroll", function(msg) {
                    console.log("FacetsBrowseView.prototype", FacetsBrowseView.prototype );
                });

                FacetsBrowseView.prototype.trigger("scroll");

                console.log("extend this.translator", this.translator);
                console.log("extend FacetsBrowseView.prototype.translator", FacetsBrowseView.prototype.translator);

                console.log("this.setEvent()", FacetsBrowseView.prototype.setEvent.apply(this, ['PageSize', num]));
                var test = FacetsBrowseView.prototype.setEvent.apply(this, ['PageSize', num]);
                
                    jQuery(window).on("scroll", function () {
                        var docHeight = jQuery(document).height();
                        var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
                        var bottom = (docHeight - scrollPos) / docHeight == 0;

                        if (num <= 100) {    
                            if (bottom) {
                                /*var params = [];
                                var fragment = Backbone.history.fragment;
                                var vars = fragment.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                                    params.push(value);
                                });
                                var s = 'show='+count;
                                fragment = fragment.replace(s, '');
                                console.log("remove dup", fragment.replace(s, ''));
                                console.log("Backbone.history", Backbone.history);
                                console.log("params",params);
                                var toAppend = fragment.indexOf('?') == -1 ? '?' : '&';*/
                                //var toUrl = fragment.indexOf('show') == -1 ? "shopping-local.ssp#" + Backbone.history.fragment + toAppend + 'show=' + num;
                                //window.location.href = "shopping-local.ssp#" + fragment + toAppend + 'show=' + num;
                                //FacetsBrowseView.prototype.setEvent.apply(this, ['PageSize', num]);
                                test;
                                console.log("test", test);
                            }
                        }
                    });
            }
        });
        
    });