var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

exports.getCreativeWord = function(number,callback) {
    var url = 'http://creativitygames.net/random-word-generator/randomwords/' + number.toString();
    // var url = 'http://overwaifu.net/random/';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            // $('#randomwordslist').filter(function() {
            //     var randomwordslist = $(this);
            //     var dataList = [];
            //     for (var i = randomwordslist.children('li').length - 1; i >= 0; i--) {
            //         dataList.push(randomwordslist.children('li').get(i).children[0].data);
            //     }
            //     callback(dataList)
            // });
            $('article').filter(function() {
                var randomwordslist = $(this);
                var dataList = [];
                for (var i = randomwordslist.children('li').length - 1; i >= 0; i--) {
                    dataList.push(randomwordslist.children('li').get(i).children[0].data);
                }
                callback(dataList)
            });
        }
    });
}