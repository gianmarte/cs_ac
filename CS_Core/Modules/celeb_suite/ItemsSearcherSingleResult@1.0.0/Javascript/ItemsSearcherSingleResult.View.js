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

        _.extend(ItemsSearcherView.prototype, {
            newConfigureTypeahead: function(){
                if (SC.ENVIRONMENT.jsEnvironment !== 'server') {
                    self.$searchElement.typeahead(typeaheadOptions, this.getTypeAheadConfiguration())
						.on('typeahead:selected', _.bind(self.onSingleItem, self));
                }
            },
            onSingleItem: function(e, item_id)
            {
                //if (this.collection.length == 1) {
                    this.trigger('singleResult'
                    , {
                        selectedItem: this.collection.get(item_id)
                        , collection: this.collection.models
                        , currentQuery: this.options.query
                        , isResultCompleted: this.options.ajaxDone
                    });
            //}
            },
            newOnKeyDown: function(){
                //if (this.collection.length == 1) {
                    this.trigger('singleResult'
                    , {
                        selectedItem: this.collection.get(item_id)
                        , collection: this.collection.models
                        , currentQuery: this.options.query
                        , isResultCompleted: this.options.ajaxDone
                    });
            //}
            },

            
        });

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

        /** ItemsSearcherView.prototype.onSingleItem = function onSingleItem(e, item_id) {
            if (this.collection.length == 1) {
            this.trigger('singleResult'
                , {
                    selectedItem: this.collection.get(item_id)
                    , collection: this.collection.models
                    , currentQuery: this.options.query
                    , isResultCompleted: this.options.ajaxDone
                });
            //}
        }*/
    });
