var tsNameof = require("ts-nameof");
module.exports = function(content) {
	const result = tsNameof.replaceInText(content); 
	if(result && result.replaced){
		return result.fileText;
	}else{
		return content;
	}		
};