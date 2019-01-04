// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'Kodella.ProductReviewList.ProductReviewList'
,   [
		'Kodella.ProductReviewList.ProductReviewList.List.View'
	,	'Kodella.ProductReviewList.ProductReviewList.Collection'
	,	'Kodella.ProductReviewList.ProductReviewList.Router'
	]
,   function (
		ProductReviewListListView
	,	ProductReviewListCollection
	,	ProductReviewListRouter
	)
{
	'use strict';

	return  {
				// @property {MenuItem} MenuItems
		MenuItems: function () 
		{
			return {
				id: 'reviewlist'
            ,	name: _('Reviews').translate()
            ,   url: 'reviewlist'
			,	index: 5
			};
		}

	,	mountToApp: function mountToApp (container)
		{

			return new ProductReviewListRouter(container);

			/*create a model and instantate the router
			var collection = new ProductReviewListCollection();
			new ProductReviewListRouter(container);

			 using the 'PDP' component we add a new child view inside the 'Product.Information' existing view 
			 (there will be an DOM element with the HTML attribute data-view="Product.Information")

			 @type {ProductDetailsComponent}
			var pdp = container.getComponent('PDP');
			
			if(pdp)
			{
				pdp.addChildViews(
					'ProductDetails.Full.View'
				,	{
						'Product.Information': {
							'Kodella.ProductReviewList.ProductReviewList.List.View':
							{
								childViewIndex: 5
							,	childViewConstructor: function()
								{
									collection.fetch();

									return new ProductReviewListListView({
										collection: collection
									,	can_edit: false
									});
								}
							}
						}
					}
				);
			}*/

		}
	};
});
