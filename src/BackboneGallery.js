// Copyright Aaron Falloon, 2012. All rights reserved.
/**
 * @fileoverview Contains all of the code for Backbone Gallery. Backbone
 * Gallery has dependencies on Backbone, jQuery and Underscore.
 * @author contact@aaronfalloon.com (Aaron Falloon)
 */
var BackboneGallery = (function () {
	'use strict';
	
	var ImageModel,
		GalleryCollection,
		GalleryView;
	
	/**
	 * Encapsulates all of the image models.
	 */
	GalleryCollection = Backbone.Collection.extend({
		
	});
	
	
	/**
	 * Manages the gallery.
	 */
	GalleryView = Backbone.Collection.extend({
		initialize: function (args) {
			var self = this,
				thumbnails;
				
			if (typeof args.el === 'undefined') {
				throw new Error('el can\'t be undefined');
			}
			this.collection = new GalleryCollection();
			// Create models for each list item
			thumbnails = $(this.el).children('thumbnails').children('li');
			thumbnails.each(function (index) {
				self.colleciton.add([new ImageModel()]);
			});
		}
	});
	
	
	/**
	 * Holds information on each image in the gallery.
	 */
	ImageModel = Backbone.Collection.extend();
	
	return {
		GalleryView: GalleryView
	}
}());