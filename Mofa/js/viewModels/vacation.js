/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider','ojs/ojknockout', 'ojs/ojrowexpander', 'ojs/ojchart', 'ojs/ojflattenedtreetabledatasource', 'ojs/ojjsontreedatasource'],
    function(oj, ko, $,ArrayDataProvider) {

        function DashboardViewModel() {
            var self = this;
            // Below are a set of the ViewModel methods invoked by the oj-module component.
            // Please reference the oj-module jsDoc for additional information.

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * This method might be called multiple times - after the View is created
             * and inserted into the DOM and after the View is reconnected
             * after being disconnected.
             */
            self.connected = function() {

                // table demo data
                self.filter = ko.observable();

                self.datasource = ko.observable();
                var options = [];
                $.getJSON( "data/table_sample.json",
                    function(data)
                    {
                        self.datasource(new oj.FlattenedTreeTableDataSource(
                            new oj.FlattenedTreeDataSource(
                                new oj.JsonTreeDataSource(data), options)));
                    });

                // self.dataprovider = new ArrayDataProvider(self.tableData, {keyAttributes: 'DepartmentId', implicitSort: [{attribute: 'DepartmentId', direction: 'ascending'}]});
                self.tableHeader = [
                    {"headerText": "","id": "column1", "headerClassName": "custom_td_1","className": "custom_td_1",},
                    {"headerText": "Vacation Type","field": "","resizable": "disabled"},
                    {"headerText": "Vacation Catagory","field": "","resizable": "disabled"},
                    {"headerText": "Start Date","field": "","resizable": "disabled"},
                    {"headerText": "End Date","field": "","resizable": "disabled"},
                    {"headerText": "Duration","field": "","resizable": "disabled"},
                    {"headerText": "Status","field": "","resizable": "disabled"},
                    {"headerText": "","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                ];

                 self.handleValueChanged = function(event){
                    console.log('test')
                    return true;
                }

               self.addvacation = function(event){
                    oj.Router.rootInstance.go('vacationadd');
                }
                
               

                self.joinVacation = function(){
                    self.openPopups();
                }

                self.updatevacation = function(event){
                    oj.Router.rootInstance.go(event);
                }
                self.updatevacation = function(event){
                    oj.Router.rootInstance.go('vacationupdate');
                }

                var data = [
                    {
                        name: 'Annual Leave',
                        id:'annual'
                    },
                    {
                        name: 'Authorized Paid Leave',
                        id:'authorized'
                    },
                    {
                        name: 'Bereavement Leave',
                        id:'bereavement'
                    },
                    {
                        name: 'Child Birth Leave',
                        id:'child'
                    },
                    {
                        name: 'Communal Activity Leave',
                        id:'communal'
                    },
                    {
                        name: 'Delivery Leave',
                        id:'delivery'
                    },
                    {
                        name: 'Education Leave',
                        id:'education'
                    },
                    {
                        name: 'Emergency Leave',
                        id:'emergency'
                    },
                    {
                        name: 'Escort Leave',
                        id:'escort'
                    }
                ];

                self.dataSource = new ArrayDataProvider(data, {keyAttributes: 'id'});
                self.selectedItem = ko.observable("annual");


                self.openPopups = function (id)
                {

                    id='joinModal'
                    var popup = document.getElementById(id);
                    popup.open();
                }.bind(self);

                self.cancelListener = function (id)
                {
                    id='joinModal'
                    var popup = document.getElementById(id);
                    popup.close();
                }.bind(self);
                self.clearClick = function(event){
                    self.filter('');
                    self.dataprovider(new ArrayDataProvider(self.deptArray, {keyAttributes: 'DepartmentId'}));
                    self.highlightChars = [];
                    document.getElementById('filter').value = "";
                    return true;
                }

            }


            /**
             * Optional ViewModel method invoked after the View is disconnected from the DOM.
             */
            self.disconnected = function() {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after transition to the new View is complete.
             * That includes any possible animation between the old and the new View.
             */
            self.transitionCompleted = function() {
                // Implement if needed
            };
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new DashboardViewModel();
    }
);
