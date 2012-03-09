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
	
	tearDown: function () {
		
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
		assertEquals(this.backboneGallery.collection.at(8), this.backboneGallery.collection.selected);
		this.backboneGallery.collection.select(4);
		assertEquals(this.backboneGallery.collection.at(4), this.backboneGallery.collection.selected);
	},
	
	'test select() should trigger a select:image event when a new image is selected': function () {
		var spy = sinon.spy(this.backboneGallery.collection, 'trigger');
		this.backboneGallery.collection.select(4);
		assert(spy.calledWith('select:image'));
	},
	
	'test GalleryView should set the class of the list item of the selected image to "selected" on a select:image event': function () {
		this.backboneGallery.collection.select(7);
		assertClassName('selected', this.backboneGallery.$el.children('.thumbnails').children('li').get(7));
	}
});