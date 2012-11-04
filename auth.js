var cookieCheck = function(req, resp, next){
	next();
};

exports.cookieCheck = cookieCheck;