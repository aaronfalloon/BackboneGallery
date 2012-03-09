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
	GalleryView = Backbone.View.extend({
		initialize: function (args) {
			var imageModels,
				self = this,
				thumbnails;
				
			if (typeof args.el === 'undefined') {
				throw new Error('el can\'t be undefined');
			}
			this.collection = new GalleryCollection();
			// Create image models for each list item
			thumbnails = this.$el.children('.thumbnails').children('li');
			imageModels = [];
			thumbnails.each(function (index) {
				imageModels.push(new ImageModel({
					src: $(this).children('li').attr('src')
				}));
			});
			this.collection.add(imageModels);
		}
	});
	
	
	/**
	 * Holds information on each image in the gallery.
	 */
	ImageModel = Backbone.Model.extend({
		initialize: function (args) {
			if (typeof args.src === 'undefined') {
				throw new Error('src can\'t be undefined');
			}
		}
	});
	
	return {
		ImageModel: ImageModel,
		GalleryView: GalleryView
	}
}());