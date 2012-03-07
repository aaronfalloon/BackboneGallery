// Copyright Aaron Falloon, 2012. All rights reserved.
/**
 * @fileoverview Contains all of the code for Backbone Gallery. Backbone
 * Gallery has dependencies on Backbone, jQuery and Underscore.
 * @author contact@aaronfalloon.com (Aaron Falloon)
 */
var BackboneGallery = (function () {
	'use strict';
	
	var create,
		Gallery,
		images;
	
	
	/**
	 * Encapsulates all of the image models.
	 */
	Gallery = Backbone.Collection.extend({
		
	});
	
	
	/**
	 * Creates a BackboneGallery object.
	 * 
	 * @returns {object} A BackboneGallery object
	 */
	var create = function (options) {
		var gallery;
		
		if (typeof options.el === 'undefined') {
			throw new Error('create(): el can\'t be undefined');
		}
		gallery = new Gallery();
		
		return {
			images: gallery
		};
	};
	
	return {
		create: create
	};
}());