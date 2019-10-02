{{#if currentPageLowerThanTotalPagesAndCurrentPageGreaterThan0AndPagesCountGreaterThan1}}
	{{#if showPageIndicator}}
	<p class="pageCount details">Page {{translate '$(0) of $(1)' currentPage totalPages}}</p>
	{{/if}}
	<a href="{{nextPageURL}}" class="facet-browse-next lonestar-icon-24-next">
    </a>
{{/if}}
