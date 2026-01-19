
// This is the base URL for the Filbunkenpub service
const BASEURL="https://etjanst.sjv.se/filbunkenpub";

class FilbunkenpubAPI {
	// Constructs the URL to a specific file
	fileURL(id) {
		return `${BASEURL}/files/${id}`;
	}

	// Constructs the URL to the preview for a specific file
	thumbURL(id) {
		return `${BASEURL}/files/${id}/thumbnail`;
	}

	// Returns a BLOB for the requested file as a promise.
	file(id) {
		return fetch(this.fileURL(id)).then(
			(res) => res.blob()
		);
	}

	// Returns the version info as a promise for a json object. (This does not work since the API does not implement it)
	version() {
		return fetch(`${BASEURL}/`).then(
			(res) => res.json()
		);
	}

}

export default FilbunkenpubAPI;

