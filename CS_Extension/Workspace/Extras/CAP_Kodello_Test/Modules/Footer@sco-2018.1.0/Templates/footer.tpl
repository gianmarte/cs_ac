<div data-view="Global.BackToTop"></div>
<div class="footer-content">

	<div id="banner-footer" class="content-banner banner-footer" data-cms-area="global_banner_footer" data-cms-area-filters="global"></div>

	<div class="footer-content-nav">
		{{#if showFooterNavigationLinks}}
			<ul class="footer-content-nav-list">
				{{#each footerNavigationLinks}}
					<li>
						<a {{objectToAtrributes item}}>
							{{text}}
						</a>
					</li>
				{{/each}}
			</ul>
		{{/if}}

		<div class="footer-social-media-icons">
			<ul>
				<li>
					<a href="#" target="_blank">
						<i class="footer-instagram"></i>
					</a>
				</li>
				<li>
					<a href="#" target="_blank">
						<i class="footer-twitter"></i>
					</a>
				</li>
				<li>
					<a href="#" target="_blank">
						<i class="footer-facebook"></i>
					</a>
				</li>
			</ul>
		</div>

	

	</div>

	<div class="footer-content-right">
		<div data-view="FooterContent"></div>
	</div>

</div>

<div class="footer-bottom">
	<a href="/shipping-receiving-policy">Shipping Receiving Policy</a> / <a href="/privacy-policy">Privacy Policy</a> / <a href="/terms-and-conditions">Terms and Conditions</a>

	<br /><br /> 
	
	<div class="footer-content-copyright">
		{{translate 'Copyright &copy; 2018 CelebSuite. All rights reserved.'}}
	</div>
</div>



{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)

----}}
