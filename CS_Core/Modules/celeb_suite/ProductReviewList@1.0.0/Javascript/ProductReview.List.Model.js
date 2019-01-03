/*
    KODELLA MODULE
*/
define('ProductReview.List.Model'
, [
    'Backbone'
  , 'underscore'
  ]
, function
  (
    Backbone
  , _
  )
{
  'use strict';

  return Backbone.Model.extend ({
    urlRoot: _.getAbsoluteUrl('services/ProductReviewList.Service.ss')
  })
});