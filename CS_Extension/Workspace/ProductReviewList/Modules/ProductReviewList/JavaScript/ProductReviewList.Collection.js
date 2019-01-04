/*
    KODELLA MODULE
*/

define('Kodella.ProductReviewList.ProductReviewList.Collection'
, [
    'Backbone.CachedCollection'
  , 'Kodella.ProductReviewList.ProductReviewList.Model'
  , 'underscore'
  ]
, function
  (
    BackboneCachedCollection
  , Model
  , _
  )
{
  return BackboneCachedCollection.extend({
      model: Model
  ,   url: _.getAbsoluteUrl('services/ProductReviewList.Service.ss')
  ,   parse: function parse(response)
  {
      return response.records;
  }
})
});