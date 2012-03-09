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
		this.backboneGallery = new BackboneGallery.GalleryView({
			el: this.gallery
		});
	},
	
	'test GalleryView should expect <div> with .gallery as its el argument': function () {
		assertException(function () {
			var gallery = new BackboneGallery.GalleryView();
		});
	},
	
	'test GalleryView should create associated GalleryCollection': function () {
		assertObject(this.backboneGallery.collection);
	},
	
	'test GalleryCollection should create models for each image in the list': function () {
		assertEquals(9, this.backboneGallery.collection.models.length);
	},
	
	'test GalleryView should set the first image model as selected': function () {
		assertEquals(this.backboneGallery.collection.at(0), this.backboneGallery.collection.selected);
	},
	
	'test ImageModel should expect a URL as its src argument': function () {
		assertException(function () {
			var imageModel = new BackboneGallery.ImageModel();
		});
	},
	
	'test select() should set the selected image': function () {
		this.backboneGallery.collection.select(8);
		
		assertClassName('selected', $('#thumbnails').find('img').get(8));
	}
});