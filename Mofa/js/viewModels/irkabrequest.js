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
                    {"headerText": "IRKAB Serial Number","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Mission/Leave/Training Details/Transfer","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Decision Number","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Destination","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "Status","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                    {"headerText": "","field": "name","headerClassName": "","className": "","resizable": "disabled"},
                     ];


                self.handleValueChanged = function(event){
                    console.log('test')
                    return true;
                }

                self.updateirkab = function(event){
                   oj.Router.rootInstance.go('irkabupdate');
                }
                self.addirkab = function(event){
                    oj.Router.rootInstance.go('irkabadd');
                 }
                self.clearClick = function(event){
                    self.filter('');
                    self.dataprovider(new ArrayDataProvider(self.deptArray, {keyAttributes: 'DepartmentId'}));
                    self.highlightChars = [];
                    document.getElementById('filter').value = "";
                    return true;
                }


                self.close = function (event) {
                    document.getElementById('delDialog1').close();
                }

                self.open = function (event) {
                    document.getElementById('delDialog1').open();
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
