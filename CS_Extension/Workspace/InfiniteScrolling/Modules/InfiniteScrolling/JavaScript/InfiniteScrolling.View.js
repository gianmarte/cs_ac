// List View, it will create as child view a collection of Edit Views.

define('InfiniteScrolling.View'
,	[
		'Facets.Browse.View'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	, 	'UrlHelper'
	, 	'Utils'
	]
,	function (
		FacetsBrowseView

	,	Backbone
	,	jQuery
	,	_
	, 	Utils
	)
{
	'use strict';

	var docHeightArr = [];
    
    _.extend(FacetsBrowseView.prototype, {
		render: function () {
			_.defer(_.bind(function () {
				this.onReachBottomPage(this.model.get('items').length, this.model.get('total'));
			}, this));

			FacetsBrowseView.__super__.render.apply(this, arguments);
		},
		onReachBottomPage: function onReachPageBottom(count, total) {
			var num = count + 24 > 100 ? num = 100 : num = count + 24;
			var docHeight = jQuery(document).height();
			var self = this;
			var currPage = self.translator.getOptionValue('page');
			var totalPage = self.totalPages;

			/* if(docHeightArr.length > 1){
				window.scrollTo({
					top: docHeightArr[heightIndex],
					left: 0,
					behavior: 'smooth'    
				});
			}*/
			

			jQuery(window).on("scroll", function (e) {
				var scrollPos = jQuery(window).height() + jQuery(window).scrollTop();
				var bottom = (docHeight - scrollPos) / docHeight == 0;
				
				//var frag = Backbone.history.fragment;

				if (num < total && currPage != totalPage) {
					if (bottom) {
						//docHeightArr.push(docHeight);
						var url = self.translator.cloneForOption('show', num).getUrl();

						return self.setEvent('PageSize', num).then(function ()
						{
							Backbone.history.navigate(url, { trigger: true });

						});
						//var url = Utils.setUrlParameter(frag, 'show', num);
						//window.location.href = "shopping-local.ssp#"+url;
						//window.history.pushState(null, jQuery(self).attr('title'), "shopping-local.ssp#"+url);
						/*jQuery.ajax({
							url:"",
							data:"",
							success: function(){
								window.location.href = "shopping-local.ssp#"+url
							}
						}).done(function() {
							console.log(window.history.scrollRestoration);
						});*/
						/*jQuery(window).scrollTop(scrollPos);
						test.push(docHeight);*/
					}
				}
			});
		}
	});
});