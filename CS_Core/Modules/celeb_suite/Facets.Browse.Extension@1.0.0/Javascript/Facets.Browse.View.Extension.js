/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/
//KODELLA
// @module FacetsBrowseView
define('Facets.Browse.View.Extension'
    , [
        'Facets.Browse.View'
        , 'underscore'
        , 'jQuery'
        , 'UrlHelper'
        , 'Utils'

    ]
    , function (
        FacetsBrowseView
        , _
        , jQuery
        , Utils
    ) {
        'use strict';

        var docHeightArr = [];

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
                var pages = self.getPagination();
                var heightIndex = docHeightArr.length > 1 ? heightIndex = docHeightArr.length-2 : heightIndex = docHeightArr.length-1;
                

                console.log('docHeightArr', docHeightArr.length);

                window.history.scrollRestoration = 'manual';
                console.log('window.history', window.history);

                /* if(docHeightArr.length > 1){
                    window.scrollTo({
                        top: docHeightArr[heightIndex],
                        left: 0,
                        behavior: 'smooth'    
                    });
                }*/
                

                jQuery(window).on("scroll", function (e) {
                    var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
                    var bottom = (docHeight - scrollPos) / docHeight == 0;
                    
                    //var frag = Backbone.history.fragment;

                    if (num < total && pages.currentPage != pages.pageCount) {
                        if (bottom) {
                            //docHeightArr.push(docHeight);
                            var url = self.translator.cloneForOption('show', num).getUrl();

                            return self.setEvent('PageSize', num).then(function ()
							{
                                Backbone.history.navigate(url, { trigger: true });
							});
                            //var url = Utils.setUrlParameter(frag, 'show', num);
                            //window.location.href = "shopping-local.ssp#"+url;
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
                            /*jQuery(window).scrollTop(scrollPos);
                            test.push(docHeight);*/
                        }
                    }
                });
            }
        });

    });