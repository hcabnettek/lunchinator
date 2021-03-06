'use strict';

exports.index = function(req, res){
	res.render('index', { title: 'Lunchinator' , user: {authenticated: true}});
};

exports.partials = function (req, res) {
  var area = req.params.area,
	view = req.params.view;
	
	res.render('partials/' + area + '/' + view, {title: 'Lunchinator'});
  
};