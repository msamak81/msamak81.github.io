/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider','ojs/ojknockout', 'ojs/ojrowexpander', 'ojs/ojchart', 'ojs/ojflattenedtreetabledatasource', 'ojs/ojjsontreedatasource'],
    function(oj, ko, $, ArrayDataProvider) {

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
                self.filter2 = ko.observable();
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
                    {"headerText": "Details","id": "column1", "headerClassName": "custom_td_1","className": "custom_td_1",},
                    {"headerText": "Relative Name","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Year","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Semester","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Amount","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "School Type","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Status","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                     ];

                     self.tableHeader2 = [
                        {"headerText": "","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "Details","id": "column1", "headerClassName": "custom_td_1","className": "custom_td_1",},
                        {"headerText": "Name in Arabic","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "Name in English","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "Gender","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "Date of Birth","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "Relation","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "Action","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "Status","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                        {"headerText": "","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                         ];


                self.handleValueChanged = function(event){
                    console.log('test')
                    return true;
                }

                self.saudihafizaadd = function(event){
                   oj.Router.rootInstance.go('saudihafizaadd');
                },
                self.clearClick = function(event){
                    self.filter('');
                    document.getElementById('filter').value = "";
                    return true;
                }
                self.clearClick2 = function(event){
                    self.filter2('');
                    document.getElementById('filter2').value = "";
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
        // Object shared with the wizard


        // Use a singleton so that the state is not lost when navigating away






    }
);
