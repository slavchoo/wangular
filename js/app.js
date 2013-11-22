'use strict';

var wApp = angular.module('wApp', ['underscore']);

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
});


wApp.factory('Contact', function(){
        return function() {
            this.name = 'first';
            this.mobile = '1233';
        }
});


wApp.controller('NetworkCreateCtrl', function(_, Contact) {
    this.contacts = [new Contact()];

    this.addContact = function() {
        this.contacts.push(new Contact());
    };

    this.removeContact = function(network) {
        this.contacts = _.without(this.contacts, network);
    };

//    this.createContact = function() {
//        var contact = new Contact();
//        contact.name = name;
//
//        this.contacts.push(angular.copy(contact));
//    }

});