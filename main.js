var tsNameof = require("ts-nameof/dist/replaceInText");

module.exports = function(content) {
	const result = tsNameof.replaceInText(content); 
	if(result && result.replaced){
		return result.fileText;
	}else{
		return content;
	}		
};