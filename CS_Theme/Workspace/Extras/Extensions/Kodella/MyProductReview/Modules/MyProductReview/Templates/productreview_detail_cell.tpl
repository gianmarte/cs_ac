<tr class="recordviews-row" data-item-id data-id="{{id}}" data-navigation-hashtag="{{detailsURL}}" data-action="navigate">
	<td class="recordviews-title" data-name="title">
		<span class="recordviews-title-value">
			<a class="recordviews-title-anchor" href="#" data-touchpoint="{{touchpoint}}" data-id="{{id}}" data-hashtag="{{detailsURL}}">
				{{title}}
			</a>
		</span>
	</td>

{{#each columns}}
	<td class="recordviews-{{type}}" data-name="{{name}}">
		<span class="recordviews-label">{{label}}</span>
		<span class="recordviews-value">{{value}}</span>
	</td>
{{/each}}
    <td class="recordviews-review-rating" data-name="review-rating">
        <span class="recordviews-label">{{translate Rating}}</span>
        <span class="recordviews-value" data-view="ReviewList.Rating"></span>
    </td>
</tr>