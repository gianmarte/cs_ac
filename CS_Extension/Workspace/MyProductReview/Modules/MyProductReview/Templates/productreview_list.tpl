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
		<table class="order-history-list-recordviews-actionable-table">
			<thead class="order-history-list-recordviews-actionable-header">
				<tr>
					<th class="order-history-list-recordviews-actionable-title-header">
						<span>{{translate 'Review ID'}}</span>
					</th>
					<th class="order-history-list-recordviews-actionable-date-header">
						<span>{{translate 'Review Title'}}</span>
					</th>
					<th class="order-history-list-recordviews-actionable-currency-header">
						<span>{{translate 'Rating'}}</span>
					</th>
					<th class="order-history-list-recordviews-actionable-actions-header">
						<span>{{translate 'Review Date'}}</span>
					</th>
				</tr>
			</thead>
			<tbody class="order-history-list" data-view="ProductReviews.Collection"></tbody>
		</table>	
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

<!--
    Available helpers:
    {{ getExtensionAssetsPath ‘img/image.jpg’}} - reference assets in your extension
    
    {{ getExtensionAssetsPathWithDefault context_var ‘img/image.jpg’}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
    
    {{ getThemeAssetsPath context_var ‘img/image.jpg’}} - reference assets in the active theme
    
    {{ getThemeAssetsPathWithDefault context_var ‘img/theme-image.jpg’}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->