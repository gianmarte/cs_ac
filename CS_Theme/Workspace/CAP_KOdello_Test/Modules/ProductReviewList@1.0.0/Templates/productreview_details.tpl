<a href="/reviewlist" class="order-history-details-back-btn">{{translate '&lt; Back to My Reviews'}}</a>
<section>
	<header>
		<h2 class="order-history-details-order-title">
			<span class="order-history-details-order-title">{{pageHeader}} </span>
            <b><span class="order-history-details-order-number">{{model.tranid}}</span></b>
		</h2>
	</header>

	<div data-type="alert-placeholder"></div>

	{{#if showReturnAuthorizations}}
		<div class="order-history-details-message-warning" data-action="go-to-returns">
			{{translate 'You have returns associated with this order. <a href="#">View Details</a>'}}
		</div>
	{{/if}}

	{{#if showPaymentEventFail}}
		<div class="order-history-details-message-warning">
			{{translate 'The checkout process of this purchase was not completed. To place order, please <a data-navigation="ignore-click" href="$(0)" >finalize your payment.</a>' model.paymentevent.redirecturl}}
		</div>
	{{/if}}

	<!-- HEADER INFORMATION -->
	<div class="order-history-details-header-information">
		<div class="order-history-details-header-row">
			<div class="order-history-details-header-col-left">
				<p class="order-history-details-header-date-info">
					{{translate '<span class="order-history-details-header-date-info-date-label">Date: </span> <span class="order-history-details-header-date">$(0)</span>' model.trandate}}
				</p>
				{{#if showPurchaseOrderNumber}}
					<p class="order-history-details-header-purchase-order-number-info">
						{{translate '<span class="order-history-details-header-purchase-order-info-purchase-order-number-label">Purchase Order Number: </span> <span class="order-history-details-header-purchase-order-number">$(0)</span>' model.purchasenumber}}
					</p>
				{{/if}}
				{{#if showQuoteDetail}}
				<p class="order-history-details-header-quote-info">
					{{translate '<span class="order-history-details-header-quote-info-quote-label">Created from: </span> <a href="$(0)" class="order-history-details-header-date">$(1)</a>'quoteURL quoteName}}
				</p>
				{{/if}}
			</div>
			<div class="order-history-details-header-col-right">
				<p class="order-history-details-header-status-info">
					{{translate '<strong>Status: </strong> <span class="order-history-details-header-status">$(0)</span>' model.status.name}}
				</p>
			</div>
			<div class="order-history-details-header-amount">
				<p class="order-history-details-header-amount-info">
					{{translate '<span class="order-history-details-header-amount-info-amount-label">Amount: </span> <span class="order-history-details-header-amount-number">$(0)</span>' model.summary.total_formatted}}
				</p>
			</div>

		</div>
	</div>

	<div class="order-history-details-row">
		<div class="order-history-details-content-col">
			<div data-view="ItemReviewed.Detail"></div>
		</div>
	</div>
</section>
