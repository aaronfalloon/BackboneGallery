TestCase('BackboneGalleryTest', {
	setUp: function () {
		/*:DOC gallery = <div class="gallery">
			<img alt="BMW" src="images/bmw.jpg" />
			<ul class="thumbnails">
			    <li class="selected"><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw.jpg" /></li>
			</ul>
		</div> */
	},
	
	'test create() should return undefined': function () {
		var backboneGallery = BackboneGallery.create({
			el: this.gallery
		});
		
		assertUndefined(backboneGallery);
	}
});