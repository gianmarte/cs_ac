<div class="facets-item-cell-list" itemprop="itemListElement"  data-item-id="{{itemId}}" itemscope itemtype="https://schema.org/Product" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<div class="facets-item-cell-list-left">
		<div class="facets-item-cell-list-image-wrapper">
			{{#if itemIsNavigable}}
				<a class="facets-item-cell-list-anchor" href='{{url}}'>
					<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
				</a>
			{{else}}
				<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
			{{/if}}
		</div>
	</div>
	<div class="facets-item-cell-list-right">

		<div id="plp-add-to-cart">
		    <ul class="addToCart panel">
		    	<li class="price" style="padding: 5px 10px;">             
		    		<span class="productPrice">
    					{{price}}</span>       
		    		<span class="productGrouping">per pair</span>               
		    		{{#if hasListPrice}}
					<br>
		    		<span class="details">List : <span class="productMsrp">{{listPrice}}</span>, You Save: <span class="productDiscount" style="font-weight: bold;">{{savePrice}}</span>!</span> 
					{{/if}}           
		    	</li>
				{{#if hasStockMsg}}
				<li class="productAvailability  has0Options">
					<span class="status">{{stockStatus}}<span class="hidden-iphone"> :</span>
					</span>
					<span class="details">{{stockMsg}}</span>
				</li>
				{{/if}}
				<li>
					<div class="product-details-quantity-options" data-validation="control-group">
						<label for="in-modal-quantity" class="product-details-quantity-options-title">
							Quantity:
						</label>

						<div data-validation="control">
							<div class="product-details-quantity-container">					
							<input type="number" name="quantity" id="in-modal-quantity" data-action="changeQuantity" class="product-details-quantity-value" value="1" min="1">				
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="cart-add-to-cart-button">
						<button type="submit" data-type="add-to-cart" data-action="sticky" class="cart-add-to-cart-button-button">Add to Cart</button>
						<button class="details icon-16-heart-grey b5" data-controller="product" data-action="addToWishlist" type="button" style="background-color:unset; padding: 5px 0;">Add to Wishlist</button>
					</div>	
				</li>
			</ul>
		</div>

		<meta itemprop="url" content="{{url}}">
		<span class="facets-item-cell-list-title">
			{{#if itemIsNavigable}}
				<a class="facets-item-cell-list-name" href='{{url}}'>
					<img class="facets-item-cell-list-image-mobile" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
					<span itemprop="name">
						{{name}}
						{{#if hasBadge}}
							<div class="specialBadge">
								{{featureBadge}}
							</div>
						{{/if}}
					</span>
				</a>
			{{else}}
				<span itemprop="name">
					{{name}}
				</span>
			{{/if}}
		</span>
		<span class="product-specs-model-num">
			{{translate "Model # "}}{{sku}}
		</span>
		<div class="facets-item-cell-list-price">
			<div data-view="ItemViews.Price"></div>
		</div>

		{{#if showRating}}
            {{#if hasRating}}
                <div class="facets-item-cell-list-rating" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating"  data-view="GlobalViews.StarRating">
                </div>
            {{/if}}
        {{/if}}

		<div data-view="ItemDetails.Options"></div>

		<div data-view="Cart.QuickAddToCart"></div>

		<div class="facets-item-cell-list-stock">
			<div data-view="ItemViews.Stock" class="facets-item-cell-list-stock-message"></div>
		</div>

		<div data-view="StockDescription"></div>
	</div>
</div>




{{!----
Use the following context variables when customizing this template: 
	
	itemId (Number)
	name (String)
	url (String)
	sku (String)
	isEnvironmentBrowser (Boolean)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)
	itemIsNavigable (Boolean)
	showRating (Boolean)
	rating (Number)

----}}
