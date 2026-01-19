# Dokumentationsexempel

Detta är ett exempel på ett API-exempel. Licensen för allt är CC0 som angivet i
top-nivå README.md filen och licensfilerna i exemplet är exempel på licenser. OpenAPI
specifikationen har en CC0 licens som angivet i filen, övriga är EUPL-1.2 licensierade
(som exempel).

(OBS: Denna text är på svenska, men själva exemplet är på engelska)

## Example code for the Filbunkenpub API

The API is a REST-ish API over HTTP(S) and is implemented by the Swedish Board of Agriculture (Jordbruksverket).

It delivers files and previews (thumbnails) given an identifier. All files delivered by the API are available free of charge and under the Creative Commons Zero (CC0) licence.

In addition to the data delivered by the API, metadata in the form of a filename is attached as an HTTP-header (Content-Disposition).

### Files

* README.md : This file
* filbunkenpub-exempel.html : A page demonstrating usage of the API
* filbunkenpub-api.js : A simple API wrapper used by filbunkenpub-exempel.html
* filbunkenpub-openapi.yaml : An OpenAPI specification for the API.

### Live example

The example page can be viewed directly [here](https://jordbruksverket.codeberg.page/resurser-apiexempel/@main/filbunken/filbunken-exempel.html)

### Contact

For questions regarding the filbunkenpub API, contact peter.bengtsson@jordbruksverket.se

