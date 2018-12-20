/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module SiteSearch
define(
    'SiteSearchSingleResult.View'
    , [
        'SC.Configuration'
        ,'SiteSearch.View'
        ,'ItemsSearcher.View'
        , 'Backbone.CompositeView'

        , 'Backbone'
        , 'underscore'
        , 'Utils'
    ]
    , function (
        Configuration
    ,   SiteSearchView
    ,   ItemsSearcherView
    ,   BackboneCompositeView

    ,   Backbone
    ,   _
    , Utils
    ) {
        'use strict';

        SiteSearchView.extend({
            initialize: function()
            {
                SiteSearchView.prototype.initialize.apply(this, args);
                this.itemsSearcherComponent.on('singleResult', this.onSingleResult, this);
            }
        });

        console.log("SiteSearchView.prototype", SiteSearchView.prototype);

        SiteSearchView.prototype.onSingleResult = function (result) {
            var itemRes = result.selectedItem
                , itemCollection = result.collection
                , curQuery = result.currentQuery;

            this.$('[data-type="search-reset"]').hide();
            this.itemsSearcherComponent.cleanSearch(true);

            var itemURL = itemRes.get('_url');

            console.log(itemURL);
        };
    });
