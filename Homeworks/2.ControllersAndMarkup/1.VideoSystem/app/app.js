'use strict';

angular.module('videoSystem', [
  'ngRoute',
  'videoSystem.home',
  'videoSystem.addNewVideo'  
])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])
    .factory('dataService', function dataService () {
    var data = [
        {
            title: 'Course introduction',
            pictureUrl: 'https://softuni.bg/Files/UserFiles/ImageGallery/softuni-2.0.jpg',
            length: '3:32',
            category: 'IT',
            subscribers: 3,
            date: new Date(2014, 12, 15),
            haveSubtitles: false,
            comments: [
                {
                    username: 'Pesho Peshev',
                    content: 'Congratulations Nakov',
                    date: new Date(2014, 12, 15, 12, 30, 0),
                    likes: 3,
                    websiteUrl: 'http://pesho.com/'
                }
            ]
        },
        {
            title: 'Angular introduction',
            pictureUrl: 'http://vgeorgiev.org/wp-content/uploads/2015/02/SoftUni-Logo-e1423692503367.png',
            length: '1:32',
            category: 'Video',
            subscribers: 1,
            date: new Date(2016, 3, 26),
            haveSubtitles: false,
            comments: [
                {
                    username: 'Gosho Goshev',
                    content: 'Congratulations Gosho',
                    date: new Date(2016, 3, 28, 12, 30, 0),
                    likes: 1,
                    websiteUrl: 'http://Gosho.com/'
                }
            ]
        }];
    
    function getAllVideos() {
        return data;
    }
    
    function addNewVideo(video) {
        var newVideo = {
            title: video.title,
            pictureUrl: video.pictureUrl,
            length: video.length || 0,
            category: video.category,
            subscribers: 0,
            date: video.date ? video.date : new Date(),
            haveSubtitles: video.haveSubtitles ? video.haveSubtitles: 'false',
            comments: []
        };
        
        data.push(newVideo);
    }
    
    return {
        getAllVideos: getAllVideos,
        addNewVideo: addNewVideo
    }
});
