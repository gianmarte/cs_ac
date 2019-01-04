/*
    KODELLA MODULE
*/

define('ProductReviewList.Collection'
, [
    'Backbone.CachedCollection'
  , 'ProductReview.List.Model'
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