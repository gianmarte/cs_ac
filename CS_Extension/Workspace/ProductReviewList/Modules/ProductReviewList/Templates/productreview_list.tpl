{{#if showBackToAccount}}
	<a href="/" class="review-list-button-back">
		<i class="review-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a>
{{/if}}

<section class="review-list">
	<header class="product-review-list-header">
		<h2>{{pageHeader}}</h2>
	</header>

	{{#if hasProductReviewed}}
	<div class="order-history-list-recordviews-container">
		<table class="order-history-list-recordviews-actionable-table">
			<tbody class="order-history-list" data-view="ProductReviews.Collection"></tbody>
		</table>
	</div>

	{{else}}
		<div class="order-history-list-empty-section">
			<h5>{{translate 'You have not reviewed any products yet'}}</h5>
		</div>
	{{/if}}

	{{#if showPagination}}
		<div class="order-history-list-case-list-paginator">
			<div data-view="GlobalViews.Pagination"></div>
			{{#if showCurrentPage}}
				<div data-view="GlobalViews.ShowCurrentPage"></div>
			{{/if}}
		</div>
	{{/if}}
</section>



{{!----
Use the following context variables when customizing this template: 
	
	pageHeader (String)
	collectionLengthGreaterThan0 (Boolean)
	isLoading (Boolean)
	showPagination (Boolean)
	showBackToAccount (Boolean)
	isSCISIntegrationEnabled (Boolean)
	allIsActive (Boolean)
	openIsActive (Boolean)
	inStoreIsActive (Boolean)

----}}
