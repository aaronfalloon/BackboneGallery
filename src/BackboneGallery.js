// Copyright Aaron Falloon, 2012. All rights reserved.
/**
 * @fileoverview Contains all of the code for Backbone Gallery. Backbone
 * Gallery has dependencies on Backbone, jQuery and Underscore.
 * @author contact@aaronfalloon.com (Aaron Falloon)
 */
var BackboneGallery = (function () {
	'use strict';
	/**
	 * Creates a BackboneGallery object.
	 * 
	 * @returns {object} A BackboneGallery object
	 */
	var create = function () {
		if (typeof el === 'undefined') {
			throw new Error('create(): el can\'t be undefined');
		}
		return {};
	};
	
	return {
		create: create
	};
}());