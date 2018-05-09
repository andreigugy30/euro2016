(function(){

	var EuroApp = angular.module('EuroApp', []);

	EuroApp.controller('MainController', ['$scope', function($scope){

	    $scope.events = matches;

	}]);

	EuroApp.controller('GroupController', ['$scope', function($scope){

	    $scope.groupA = ['France', 'Albania','Romania', 'Switzerland'];
	    $scope.groupB = ['England', 'Russia','Slovakia', 'Wales'];
	    $scope.groupC = ['Germany', 'Northern Ireland','Poland', 'Ukraine'];
	    $scope.groupD = ['Croatia', 'Czech Republic','Spain', 'Turkey'];
	    $scope.groupE = ['Belgium', 'Italy','Republic of Ireland', 'Sweden'];
	    $scope.groupF = ['Austria', 'Hungary','Iceland', 'Portugal'];


	}]);

	var matches = [
		{
			day: "Friday",
			date: '10 June 2016',
			img: ['img/fr.png', 'img/ro.png'],
			referee: "Martin Atkinson",
			stadium: 'Stade de France, Paris',
			homeTeam: 'France',
			awayTeam:'Romania',
			group:'Group A',
			start:'21:00'
		},
		{
			day: "Saturday",
			date: '11 June 2016 ',
			img: ['img/alb.png', 'img/sui.png'],
			referee: "Felix Brych",
			stadium: 'Stade Bollaert-Delelis, Lens  (FRA)',
			homeTeam: 'Albania',
			awayTeam:'Switzerland',
			group:'Group A',
			start:'15:00'
		},
		{
			day: "Saturday",
			date: '11 June 2016',
			img: ['img/eng.png', 'img/rus.png'],
			referee: "Mark Clattenburg",
			stadium: 'Stade Velodrome, Marseille',
			homeTeam: 'England',
			awayTeam:'Russia',
			group:'Group B',
			start:'21:00'
		},
		{
			day: "Sunday",
			date: '12 June 2016',
			img: ['img/tur.png', 'img/cro.png'],
			referee: "Ovidiu Hategan",
			stadium: 'Parc des Princes, Paris',
			homeTeam: 'Turkey',
			awayTeam:'Croatia',
			group:'Group D',
			start:'15:00'
		},
		{
			day: "Sunday",
			date: '12 June 2016',
			img: ['img/ger.png', 'img/ukr.png'],
			referee: "Bjorn Kuipers",
			stadium: 'Stade Pierre Mauroy, Lille',
			homeTeam: 'Germany',
			awayTeam:'Ukraine',
			group:'Group C',
			start:'21:00'
		},
		{
			day: "Monday",
			date: '13 June 2016',
			img: ['img/spa.png', 'img/cze.png'],
			referee: "Clement Turpin",
			stadium: 'Stadium de Toulouse, Toulouse',
			homeTeam: 'Spain',
			awayTeam:'Czech Republic',
			group:'Group D',
			start:'15:00'
		},
		{
			day: "Monday",
			date: '13 June 2016',
			img: ['img/bel.png', 'img/ita.png'],
			referee: "Jonas Eriksson",
			stadium: 'Stade de Lyon, Lyon',
			homeTeam: 'Belgium',
			awayTeam:'Italy',
			group:'Group E',
			start:'21:00'
		},
		{
			day: "Tuesday",
			date: '14 June 2016',
			img: ['img/por.png', 'img/ice.png'],
			referee: "Martin Atkinson",
			stadium: 'Stade Geoffroy Guichard, Saint-Etienne',
			homeTeam: 'Portugal',
			awayTeam:'Iceland',
			group:'Group F',
			start:'21:00'
		},
	];

})();

