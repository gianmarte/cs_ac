// Edit View, it will allow to list, edit and add todo tasks
// depending on the mode

define('Kodella.ProductReviewList.ProductReviewList.Detail.View'
,	[
		'kodella_productreviewlist_productreviewlist_edit.tpl'

	,	'Backbone.FormView'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		kodella_productreviewlist_productreviewlist_edit_tpl

	,	BackboneFormView
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: kodella_productreviewlist_productreviewlist_edit_tpl

	,	initialize: function (options)
		{
			var self = this;
			this.options = options;
			this.model = options.model;
			this.list = options.collection;

			BackboneFormView.add(this);

			this.model.on('change', function()
			{
				self.render();
			});
		}

	, 	childViews: {
			
		}

	,	markCompleted: function markCompleted(e)
		{
			var completed = jQuery(e.target).is(':checked');
			this.model.set('completed', completed);
			this.model.save();
		}

	,	getContext: function getContext()
		{
			return {
				id: this.model.id
			,	title: this.model.get('title')
			,	completed: this.model.get('completed')
			,	can_edit: this.can_edit

			,	add_mode: this.mode === 'add'
			,	edit_mode: this.mode === 'edit'
			,	list_mode: this.mode === 'list'
			};
		}
	});
});