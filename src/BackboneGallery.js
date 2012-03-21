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
		
		
		/**
		 * Sets an image as the selected image.
		 * 
		 * @param {integer} index The index of the image to select
		 */
		select: function (index) {
			this.selected = this.at(index);
			
			this.trigger('select:image', index);
		}
	});
	
	
	/**
	 * Manages the gallery.
	 */
	GalleryView = Backbone.View.extend({
		events: {
			'click li': 'handleClick'
		},
		
		
		initialize: function (args) {
			var imageModels,
				list,
				self = this,
				thumbnails;
				
			if (typeof args.el === 'undefined') {
				throw new Error('el can\'t be undefined');
			}
			
			// Validate the markup
			list = this.$el.children('.thumbnails');
			if (list.length === 0) {
				throw new Error('el must contain an unordered list with a class "thumbnails"');
			}
			if (this.$el.children('img').length === 0) {
				throw new Error('el must contain an image to display the selected image');
			}
			
			this.removeDuplicates();
			this.collection = new GalleryCollection();
			// Create image models for each list item
			thumbnails = list.children('li');
			imageModels = [];
			thumbnails.each(function (index) {
				imageModels.push(new ImageModel({
					src: $(this).children('img').attr('src')
				}));
			});
			this.collection.add(imageModels);
			this.collection.selected = this.collection.at(0);
			// Bind to collection events
			this.collection.bind('select:image', this.setAsSelected, this);
		},
		
		
		/**
		 * Handles any clicks on list items.
		 *
		 * @param {Event} event A click event
		 */
		handleClick: function (event) {
			var images = this.$el.children('.thumbnails').find('img');
			this.setAsSelected(images.index(event.target));
		},
		
		
		/**
		 * Removes any duplicate images. An image is a duplicate if it has an
		 * src which is the same as another image already in the gallery.
		 */
		removeDuplicates: function () {
			var imageSrcs = {},
				thumbnails = this.$el.children('.thumbnails').children('li').children('img');
				
			thumbnails.each(function (index) {
				if (typeof imageSrcs[this.src] === 'undefined') {
					imageSrcs[this.src] = true;
				} else {
					$(this).parent('li').remove();
				}
			});
		},
		
		
		/**
		 * Sets an image as selected.
		 *
		 * @param {integer} index The index of the image list item
		 */
		setAsSelected: function (index) {
			var liToUpdate = this.$el.children('.thumbnails').children('li').eq(index);
			this.$el.children('.thumbnails').children('li').removeClass('selected');
			liToUpdate.addClass('selected');
			// Set the main image
			this.$el.children('img').eq(0).replaceWith(liToUpdate.children('img').clone());
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