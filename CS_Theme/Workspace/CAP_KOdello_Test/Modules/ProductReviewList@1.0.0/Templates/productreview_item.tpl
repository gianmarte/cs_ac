<div class="order-history-packages-acordion-divider">
	<div class="order-history-packages-accordion-head">
		<div class="order-history-packages-accordion-head-toggle {{initiallyCollapsedArrow}}" data-toggle="collapse" data-target="#{{targetId}}" aria-expanded="true" aria-controls="unfulfilled-items">
			<div class="order-history-packages-header-container-title">
				<span class="order-history-packages-accordion-head-toggle-status">{{packageStatus}}</span>
				<span class="order-history-packages-accordion-head-toggle-auxiliar-text">
					{{#if isPackageInStore}}
						{{translate ' at'}}
					{{else}}
						{{translate ' to'}}
					{{/if}}
				</span>
				<a id="order-history-packages-address-dropdown" class="order-history-packages-address-data-link" data-toggle="dropdown" aria-expanded="false">
				{{#if isPackageInStore}}
					{{#if showOrderLocation}} {{orderLocation.name}} {{/if}}
				{{else}}
					{{orderAddress}}
				{{/if}}
					 <i class="order-history-packages-icon-angle-down"></i>
				</a>
				<div class="order-history-packages-dropdown-menu" aria-labelledby="order-history-packages-address-dropdown">
				{{#if isPackageInStore}}
					<div data-view="Address.StoreLocationInfo"></div>
					{{#if showGetDirectionButton}}
						<a class="order-history-packages-get-directions-button" href="{{getDirectionsUrl}}" target="_blank">
							{{translate 'Get Directions'}}
						</a>
					{{/if}}
				{{else}}
					<div data-view="Shipping.Address.View"></div>
				{{/if}}
				</div>
			</div>
			<i class="order-history-packages-accordion-toggle-icon"></i>
			{{#unless isPackageInStore}}
				<div class="order-history-packages-header-container">
					<div class="order-history-packages-header-container-left">
						{{#if showDeliveryStatus}}
							<div class="order-history-packages-header-col">
								<span class="order-history-packages-shipped-status-label">{{translate 'Status: '}}</span> 
								<span class="order-history-packages-shipped-status-value">{{packageStatus}}</span>
							</div>
						{{/if}}
						{{#if showDate}}
							<div class="order-history-packages-header-col">
								<span class="order-history-packages-shipped-date-label">{{translate 'Shipped on: '}}</span> 
								<span class="order-history-packages-shipped-date-value">{{date}}</span>
							</div>
						{{/if}}
					</div>
					<div class="order-history-packages-header-container-right">
						<div class="order-history-packages-header-col" data-view="TrackingNumbers"></div>
						{{#if showDeliveryMethod}}
							<div class="order-history-packages-header-col{{#if showTrackingNumbers}} order-history-packages-hide-from-head{{/if}}">
								<span class="order-history-packages-delivery-label">{{translate 'Delivery Method: '}}</span>
								<span class="order-history-packages-delivery-value">{{deliveryMethodName}}</span>
							</div>
						{{/if}}
					</div>
				</div>
			{{/unless}}
			<div class="order-history-packages-items-quantity">{{translate '$(0) Items' linesItemsAmount}}</div>
		</div>
	</div>
	<div class="order-history-packages-accordion-body collapse {{initiallyCollapsed}}" id="{{targetId}}" role="tabpanel" data-target="#{{targetId}}">
		<div class="order-history-packages-accordion-container" data-content="order-items-body">
			<table class="order-history-packages-items-table">
				<tbody data-view="Items.Collection">
				</tbody>
			</table>
		</div>
	</div>
</div>