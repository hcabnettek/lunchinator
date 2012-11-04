var cookieCheck = function(req, resp, next){
	var user = {};
	if(req.cookies.rememberme && req.cookies.user.email){
		user.email = req.cookies.user.email;
		user.isAuthenticated = true;
		req.session.username = user.email;
	} 
	next();
};

exports.cookieCheck = cookieCheck;