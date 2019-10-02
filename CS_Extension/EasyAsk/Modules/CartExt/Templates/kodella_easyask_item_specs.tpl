<span class="product-views-product-specs">
	<span class="product-specs-content">
		{{#if hasFeatures}}
			<h6 class="product-specs-title">{{translate "Overview"}}</h6>
			<ul class="product-specs-list">
				{{#each features}}
					<li>{{this}}</li>
				{{/each}}
			</ul>
		{{/if}}
	</span>
</span>