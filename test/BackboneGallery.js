TestCase('BackboneGallery', {
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
	
	'test should return BackboneGallery object': function () {
		var backboneGallery = BackboneGallery.create();
		
		assertObject(backboneGallery);
	}
});