Helpers = {
	// From http://fitzgeraldnick.com/weblog/35/
	async: function (fn) {
		setTimeout(fn, 20);
	}
};

AsyncTestCase('BackboneGalleryTest', {
	setUp: function () {
		/*:DOC gallery = <div class="gallery">
			<img alt="BMW" src="images/bmw.jpg" />
			<ul class="thumbnails">
			    <li class="selected"><img alt="BMW" src="images/bmw0.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw1.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw2.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw3.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw4.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw5.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw6.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw7.jpg" /></li>
			    <li><img alt="BMW" src="images/bmw8.jpg" /></li>
				<li><img alt="BMW" src="images/bmw8.jpg" /></li>
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
	
	'test duplicate images shouldn\'t appear in the gallery': function () {
		var countsAreAllOne = true,
			imageSrcs = [],
			imageSrcsCount = {};
		
		$(this.gallery).children('.thumbnails').children('li').children('img').each(function (index) {
			imageSrcs.push(this.src);
		});
		for (var i = 0, ii = imageSrcs.length; i < ii; i++) {
			if (typeof imageSrcsCount[imageSrcs[i]] === 'undefined') {
				imageSrcsCount[imageSrcs[i]] = 1;
			} else {
				imageSrcsCount[imageSrcs[i]]++;
			}
		}
		for (imageSrcCount in imageSrcsCount) {
			if (imageSrcsCount[imageSrcCount] > 1) {
				countsAreAllOne = false;
			}
		}
		assertTrue(countsAreAllOne);
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
	},
	
	'test setAsSelected() should change the main image': function () {
		this.backboneGallery.collection.select(3);
		assertEquals($(this.gallery).children('.thumbnails').children('li').children('img').eq(3).attr('src'), $(this.gallery).children('img').eq(0).attr('src'));
	},
	
	'test a click event handler should be added to each thumbnail': function () {
		var spy = sinon.spy(BackboneGallery.GalleryView.__super__, 'delegateEvents');
		var backboneGallery = new BackboneGallery.GalleryView({
			el: this.gallery
		});
		assert(spy.calledOnce);
	},
	
	'test handleClick() should be called after a list item is clicked': function (queue) {
		this.backboneGallery.handleClick = callbacks.add(this.backboneGallery.handleClick);
		$(this.gallery).children('.thumbnails').children('li').eq(3).trigger('click');
		assert(spy.calledOnce);
	},
	
	'test handleClick() should call setAsSelected()': function () {
		var spy = sinon.spy(this.backboneGallery, 'setAsSelected');
		$(this.gallery).children('.thumbnails').children('li').eq(5).trigger('click');
		assert(spy.calledOnce);
	}
});