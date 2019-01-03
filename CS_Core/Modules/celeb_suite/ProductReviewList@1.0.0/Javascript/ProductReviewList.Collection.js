/*
    KODELLA MODULE
*/

define('ProductReviewList.Collection'
, [
    'Backbone'
  , 'ProductReview.List.Model'
  , 'underscore'
  ]
, function
  (
    Backbone
  , Model
  , _
  )
{
  return Backbone.Collection.extend({
    model: Model
  , url: _.getAbsoluteUrl('services/ProductReviewList.Service.ss')
  })
});