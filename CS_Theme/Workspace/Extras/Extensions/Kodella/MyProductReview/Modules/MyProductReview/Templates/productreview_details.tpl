{{#if showBackToAccount}}
<a href="/reviewlist" class="product-review-list-detail-back-btn">{{translate '&lt; Back to My Reviews'}}</a>
{{/if}}

<section>
	<header>
		<h2 class="product-review-list-detail-title">
			<span class="product-review-list-detail-header-title">{{pageHeader}} </span>
		</h2>
	</header>
	<!-- HEADER INFORMATION -->
	<div class="product-review-list-detail-header-information">
		<div class="product-review-list-detail-header-row">
			<div class="product-review-list-detail-header-col-left">
				<p class="product-review-list-detail-header-date-info">
					{{translate '<span class="product-review-list-detail-header-date-info-label">Publish Date: </span> <span class="order-history-details-header-date">$(0)</span>' collection.created}}
				</p>
			</div>
			<div class="product-review-list-detail-header-rating-container">
				<label for="item-review-rating">{{translate "Rating:"}}</span>
				<span class="product-review-list-detail-rating-data" data-view="ReviewDetail.Rating" id="item-review-rating"></span>
			</div>
		</div>
	</div>

	<div class="product-review-list-detail-row">
		<div class="product-review-list-detail-content-col">
			<div>
				<div class="order-history-packages-acordion-divider">
					<div class="order-history-packages-accordion-head">
						<div class="product-review-list-detail-header">
							<div class="product-review-list-detail-header-container-title">
								<span class="product-review-list-detail-title">{{reviewtitle}}</span>
							</div>
							<div class="product-review-list-detail-text-container">
								<div class="product-review-list-detail-text-col">
									<span class="product-review-list-detail-text-content">{{reviewtext}}</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="product-review-list-detail-item-detail-container">
							<div class="product-review-list-detail-item-image-container">
								<img src="{{resizeImage image 'half'}}">
							</div>
							<div class="product-review-list-detail-item-name-container">
								<p class="product-review-list-detail-item-details">{{displayname}}</p>
								<p class="product-review-list-detail-item-details">{{itemid}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!--
  Available helpers:
  {{ getExtensionAssetsPath ‘img/image.jpg’}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var ‘img/image.jpg’}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var ‘img/image.jpg’}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var ‘img/theme-image.jpg’}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->