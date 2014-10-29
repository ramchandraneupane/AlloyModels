exports.definition = {
	config: {
		columns: {
		    "title": "text",
		    "description": "text",
		    "path": "text",
		    "location": "text",
		    "photographer": "text",
		},
		default: {
			"title": "",
			"description": "",
			"path": "",
			"location": "",
			"photographer": "",
		},	
		adapter: {
			type: "sql",
			collection_name: "Picture"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};