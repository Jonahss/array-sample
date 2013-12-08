//random utility (from MDN docs) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var getRandomElement = function(){
	return this[getRandomInt(0, this.length-1)];
}

module.exports = function(numberOfSamples){
	if (this.length < 1){
		if (numberOfSamples > 1){
			return [];
		}
		return undefined
	}

	if (!numberOfSamples || numberOfSamples == 1){
		return getRandomElement.call(this);
	}

	var samples = new Array();
	for (var i = 0; i < numberOfSamples; i++){
		samples.push(getRandomElement.call(this));
	}
	return samples;
}