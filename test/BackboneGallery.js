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
		this.backboneGallery = BackboneGallery.create({
			el: this.gallery
		});
	},
	
	'test create() should expect a DOM reference': function () {
		assertException(function () {
			var backboneGallery = BackboneGallery.create();
		});
	},
	
	'test create() should create a Backbone collection to hold the gallery images': function () {
		assertObject(this.backboneGallery.images);
	},
	
	'test create() should return a BackboneGallery object': function () {
		var backboneGallery = BackboneGallery.create({
			el: this.gallery
		});
		
		assertObject(backboneGallery);
	}
});