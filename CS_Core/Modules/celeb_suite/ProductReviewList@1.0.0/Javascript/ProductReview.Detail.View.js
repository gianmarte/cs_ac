/*
	Kodella Module
*/

define('Productreview.Detail.View'
, [
    'Backbone'
  , 'Backbone.CompositeView'
  , 'GlobalViews.StarRating.View'
  //, 'productreview_details.tpl'
  ]
, function
  (
    Backbone
  , BackboneCompositeView
  , GlobalViewsStarRatingView
  //, productreview_details_tpl
  )
{
  return Backbone.View.extend ({
    //template: productreview_details_tpl

  initialize: function initialize() {
      // turns this into a composite view, which we need to do if we're going to add in the star rating view
      BackboneCompositeView.add(this);
    }

  , childViews: {
      'StarRating': function() {
        return new GlobalViewsStarRatingView({
          model: this.model
        , showRatingCount: false
        });
      }
    }

  , getContext: function()
    {
      // return a product image, it doesn't matter which one (so just get the first)
      /*var images = this.model.get('itemimages_detail')
      , firstImageUrl = images.media[Object.keys(images.media)[0]].urls["0"].url;*/

    	return {
    		reviewid: this.model.get('reviewid')
      	,	rating: this.model.get('rating')
      	,	text: this.model.get('text')
      	,	itemid: this.model.get('itemid')
      	,	created: this.model.get('created')
		,	reviewTitle: this.model.get('reviewTitle')
		,	writer: this.model.get('writer')  
    	}
    }
  })
});