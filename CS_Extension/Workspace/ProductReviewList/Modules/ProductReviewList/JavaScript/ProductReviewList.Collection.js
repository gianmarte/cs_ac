/*
    KODELLA MODULE
*/

define('Kodella.ProductReviewList.ProductReviewList.Collection'
, [
    'Backbone'
  , 'Kodella.ProductReviewList.ProductReviewList.Model'
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