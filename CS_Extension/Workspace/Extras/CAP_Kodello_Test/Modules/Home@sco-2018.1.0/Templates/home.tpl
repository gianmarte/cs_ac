<div class="home">
	<div data-cms-area="home_cms_area_1" data-cms-area-filters="path"></div>

	<!-- KODELLA -->
	
	<div class="home-banner-top">
		<!-- <p class="home-banner-top-message">
			{{translate 'Use promo code <strong>SCADEMO</strong> for <strong>30%</strong> off your purchase'}}
		</p> -->
	</div>
 	
	<div data-cms-area="home_cms_area_2" data-cms-area-filters="path"></div>

	<div class="home-slider-container">
		<div class="home-image-slider">

			<ul data-slider class="home-image-slider-list">

				<!-- KODELLA -->
				{{#each carouselImages}}
					<li>
						<div class="home-slide-main-container">
							<a href="{{this.link}}">
								<img src="{{this.image}}" />
							</a>
						</div>
					</li>
				{{else}}
					<li>
						<div class="home-slide-main-container">
							<a href="/brands/jordin-sparks">
								<img src="{{getThemeAssetsPath 'img-tfe/main-banners/jordin_sparksbanner.jpg'}}" />
							</a>
						</div>
					</li> 
					<li>
						<div class="home-slide-main-container">
							<a href="/brands/baker-mayfield">
								<img src="{{getThemeAssetsPath 'img-tfe/main-banners/baker.jpg'}}" />
							</a>
						</div>
					</li> 
					<li>
						<div class="home-slide-main-container">
							<a href="/brands/evelyn-lozada">
								<img src="{{getThemeAssetsPath 'img-tfe/main-banners/evelynbanner.jpg'}}" />
							</a>
						</div>
					</li> 
					<li>
						<div class="home-slide-main-container">
							<a href="/brands/javale-mcgee">
								<img src="{{getThemeAssetsPath 'img-tfe/main-banners/javalemcgee.jpg'}}" />
							</a>
						</div>
					</li> 
					<li>
						<div class="home-slide-main-container">
							<a href="/brands/shaniece-hairston">
								<img src="{{getThemeAssetsPath 'img-tfe/main-banners/shaniece.jpg'}}" />
							</a>
						</div>
					</li> 
					<li>
						<div class="home-slide-main-container">
							<a href="/brands/sharee-love">
								<img src="{{getThemeAssetsPath 'img-tfe/main-banners/sharee.jpg'}}" />
							</a>
						</div>
					</li> 
				{{/each}}
			</ul>

			<!-- KODELLA -->
			{{!-- 
			<ul data-slider class="home-image-slider-list">
				{{#each carouselImages}}
					<li>
						<div class="home-slide-main-container">
							<div class="home-slide-image-container">
								<img src="{{resizeImage this ../imageHomeSize}}" alt="" />
							</div>

							<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
								<p>Example descriptive text displayed on multiple lines.</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">Shop Now</a>
								</div>
							</div>
						</div>
					</li>
				{{else}}
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-1.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-2.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-3.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>
				{{/each}}
			</ul>
			--}}

		</div>
	</div>

	<div data-cms-area="home_cms_area_3" data-cms-area-filters="path"></div>

	<!-- KODELLA -->
	{{!-- 
	<div class="home-banner-main">
	{{#each bottomBannerImages}}
    	<div class="home-banner-main-cell-nth{{@index}}">
    		<div class="home-banner-main-cell-bg">
        		<img src="{{resizeImage this ../imageHomeSizeBottom}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
    		</div>
   		</div>
	{{else}}
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<img src="{{getThemeAssetsPath (resizeImage 'img/banner-bottom-home-1.jpg' ../imageHomeSizeBottom)}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth1">
      		<div class="home-banner-main-cell-bg">
        		<img src="{{getThemeAssetsPath (resizeImage 'img/banner-bottom-home-2.jpg' ../imageHomeSizeBottom)}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
        	</div>
      	</div>
     	<div class="home-banner-main-cell-nth2">
      		<div class="home-banner-main-cell-bg">
        		<img src="{{getThemeAssetsPath (resizeImage 'img/banner-bottom-home-3.jpg' ../imageHomeSizeBottom)}}" alt="" >
        		<div class="home-banner-main-cell-text">EXAMPLE TEXT</div>
        	</div>
      	</div>
    {{/each}}
	</div>
	--}}
	
	<div data-cms-area="home_cms_area_4" data-cms-area-filters="path"></div>

	<div class="home-merchandizing-zone">
		<div data-id="your-merchandising-zone" data-type="merchandising-zone"></div>
	</div>
</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
