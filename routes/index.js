
/*
 * GET home page.
 */

exports.index = function(req, res){
	var user = {};
	/*
	if(req.cookies.user && req.cookie.user.name){
		user.name = req.cookie.user.name;
		user.isAuthenticated = true;
	} */

  res.render('index', { title: 'Lunchinator', user: user });
};