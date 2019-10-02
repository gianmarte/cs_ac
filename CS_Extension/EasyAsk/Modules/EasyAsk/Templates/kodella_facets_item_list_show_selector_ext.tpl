<select data-type="navigator" class="facet-browse-control-pagination-itemCount kd-form-elements">
	{{#each options}}
	<option value="{{configOptionUrl}}" class="{{className}}" ea_pagesize="{{pageSize}}" {{#if isSelected}} selected="" {{/if}} >{{name}}</option>
	{{/each}}
</select>




{{!----
Use the following context variables when customizing this template: 
	
	options (Array)

----}}
