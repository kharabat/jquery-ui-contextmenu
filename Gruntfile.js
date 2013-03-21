/*jshint node: true */

"use strict";

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		qunit: {
			all: ["test/index.html"]
		},
		jshint: {
			files: [
				"Gruntfile.js",
				"jquery.contextmenu.js"
			],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			options: {
				banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n"
			},
			build: {
				src: "jquery.contextmenu.js",
				dest: "build/jquery.contextmenu-<%= pkg.version %>.min.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-qunit");

	grunt.registerTask("default", ["jshint", "qunit"]);
	grunt.registerTask("ci", ["default"]);
};
