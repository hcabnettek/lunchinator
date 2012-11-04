exports.index = function(req, res){
	var email = req.session.username;
  	res.render('index', { title: 'Lunchinator', locals:{ email: email}});
};