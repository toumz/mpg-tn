// classic packages for express server
var express = require('express');
var router = express.Router();
var request = require('request');

// packages for scraping
let axios = require('axios');
let cheerio = require('cheerio');

// databse storage 
var mongoose = require('mongoose');
var Player = require('../models/Player.js');

//import {PlayerModule} from '../modules/player/player.module'
//import {PlayerService} from '../services/player.service';


// stroage variables 
let base_url = 'https://www.coaching-foot.com/teams/';
teams = ['st','ess','cab','css','usbg','ca','est','cshl','esm','sg','jsk','usmo','asg','ust']

//const PlayerModule = require('../modules/player/player.module');

//Scraping script
for (j in teams){
    team = teams[j]
    axios.get(base_url + team)
    .then((response) => {
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            const teamp = getTeam(String($('link').attr('href')));
            let teamtolist = [];
            $('table.table.table-staff-team tbody tr').each(function(i, elem) {
                var children = $(this).children();
                teamtolist[i] = {
                    name: children.eq(0).text().trim(),
                    team : teamp,
                    position: getPosition(String(children.eq(1).find('i').attr('class'))),
                    but: parseInt(children.eq(2).text().trim()) || 0,
                    passe_d: parseInt(children.eq(3).text().trim()) || 0,
                    minutes: parseInt(children.eq(4).text().trim()) || 0,
                    age: children.eq(5).text().trim(),
                }      
            });
            //console.log(teamtolist);
            //save player 

            for(var player in teamtolist){
                if (teamtolist[player].name !== "Nom complet"){
                    new Player(teamtolist[player])
                    .save()
                    .catch((err)=>{
                      console.log(err.message);
                    }); 
                }

            }
    }
}, (error) => console.log(err) );

}

function getPosition(str) {
    return str.split('-')[1];
}

function getTeam(str) {
    return str.split('/').pop();
}


module.exports = router;