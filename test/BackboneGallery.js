TestCase('BackboneGalleryTest', {
	setUp: function () {
		/*:DOC gallery = <ul id="gallery">
			<li><img src="" /></li>
			<li><img src="" /></li>
			<li><img src="" /></li>
			<li><img src="" /></li>
			<li><img src="" /></li>
			<li><img src="" /></li>
			<li><img src="" /></li>
			<li><img src="" /></li>
			<li><img src="" /></li>
		</ul>*/
	},
	
	'test create() should return a BackboneGallery object': function () {
		var backboneGallery = BackboneGallery.create();
		
		assertObject(backboneGallery);
	}
});