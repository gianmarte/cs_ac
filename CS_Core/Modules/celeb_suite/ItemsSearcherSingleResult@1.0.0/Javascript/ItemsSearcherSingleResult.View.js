/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ItemsSearcher
define(
    'ItemsSearcherSingleResult.View'
    , [
        'ItemsSearcher.View'

        , 'Backbone'
        , 'underscore'
        , 'jQuery'
        , 'Utils'
    ]
    , function (
        ItemsSearcherView

        , Backbone
        , _
        , jQuery
    ) {
        'use strict';
        console.log("ItemsSearcherView.prototype", ItemsSearcherView.prototype);

        /** ItemsSearcherView.extend({
            newKeyDown: function () {
                if()
                this.trigger('singleResult'

                    , {
                        
                        selectedItem: null
                        
                        , collection: this.collection.models
                        
                        , currentQuery: this.options.query
                        
                        , isResultCompleted: this.options.ajaxDone
                    })
                }
            },
            test: function () { _.extend({}, ItemSearcherView.prototype.onKeyDown, this.newKeyDown); }

        });**/

        ItemsSearcherView.prototype.onSingleItem = function onSingleItem(e, item_id) {
            //if (this.collection.length == 1) {
            this.trigger('singleResult'
                //@class ItemsSearcher.View.itemSelected.Properties
                , {
                    //@property {Item.Model?} selectedItem
                    selectedItem: this.collection.get(item_id)
                    //@property {Array<Item.Model>} collection
                    , collection: this.collection.models
                    //@property {String} currentQuery
                    , currentQuery: this.options.query
                    //@property {Boolean} isResultCompleted
                    , isResultCompleted: this.options.ajaxDone
                });
            //}
        }
    });
