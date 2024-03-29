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
                // table demo data
                var tableData = [
                    {DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300}
                ];
                // self.dataprovider = new ArrayDataProvider(self.tableData, {keyAttributes: 'DepartmentId', implicitSort: [{attribute: 'DepartmentId', direction: 'ascending'}]});
                self.tableHeader = [

                    
                    {"headerText": "Employee NO","field": "LocationId"},
                    {"headerText": "Ticket No","field": "ManagerId"},
                    {"headerText": "Request Date","field": "ManagerId"},
                    {"headerText": "Responder","field": "DepartmentName"},
                    {"headerText": "Description","field": "DepartmentName"},
                    {"headerText": "Status","field": "DepartmentName"},

                    {"headerText": "View", "renderer": oj.KnockoutTemplateUtils.getRenderer("view_tbl_record", true)},
                    {"headerText": "Workflow", "renderer": oj.KnockoutTemplateUtils.getRenderer("delete_tbl_record", true)},
                ];

                function generatedataArray(num) {
                    var dataArray = [];
                    var i, j, count = 0;
                    for (i = 0; i < num; i++) {
                        for (j = 0; j < tableData.length; j++) {
                            dataArray[count] = $.extend({}, tableData[j]);
                            dataArray[count].DepartmentId = dataArray[count].DepartmentId + count.toString();
                            dataArray[count].DepartmentName = dataArray[count].DepartmentName + count.toString();
                            count++;
                        }
                    }
                    return dataArray;
                };
                self.dataArray = generatedataArray(1000);
                self.dataprovider = new ko.observable(new ArrayDataProvider(self.dataArray, {keyAttributes: 'DepartmentId'}));
                self.highlightChars = [];
                self.handleValueChanged = function()
                {
                    self.highlightChars = [];
                    var filter = document.getElementById('filter').rawValue;
                    if (filter.length == 0)
                    {
                        self.clearClick();
                        return;
                    }
                    var dataArray = [];
                    var i, id;
                    for (i = self.dataArray.length - 1; i >= 0; i--)
                    {
                        id = self.dataArray[i].DepartmentId;
                        Object.keys(self.dataArray[i]).forEach(function(field)
                        {
                            if (self.dataArray[i][field].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0)
                            {
                                self.highlightChars[id] = self.highlightChars[id] || {};
                                self.highlightChars[id][field] = getHighlightCharIndexes(filter, self.dataArray[i][field]);
                                if (dataArray.indexOf(self.dataArray[i]) < 0)
                                {
                                    dataArray.push(self.dataArray[i]);
                                }
                            }
                        });
                    }
                    dataArray.reverse();
                    self.dataprovider(new ArrayDataProvider(dataArray, {keyAttributes: 'DepartmentId'}));

                    function getHighlightCharIndexes(highlightChars, text)
                    {
                        var highlightCharStartIndex = text.toString().toLowerCase().indexOf(highlightChars.toString().toLowerCase());
                        return {startIndex: highlightCharStartIndex, length: highlightChars.length};
                    };
                };
                self.clearClick = function(event){
                    self.filter('');
                    self.dataprovider(new ArrayDataProvider(self.dataArray, {keyAttributes: 'DepartmentId'}));
                    self.highlightChars = [];
                    document.getElementById('filter').value = "";
                    return true;
                }
                self.highlightingCellRenderer = function(context)
                {
                    var id = context.row.DepartmentId;
                    var startIndex = null;
                    var length = null;
                    var field = null;
                    if (context.columnIndex === 0)
                    {
                        field = 'DepartmentId';
                    }
                    else if (context.columnIndex === 1)
                    {
                        field = 'DepartmentName';
                    }
                    else if (context.columnIndex === 2)
                    {
                        field = 'LocationId';
                    }
                    else if (context.columnIndex === 3)
                    {
                        field = 'ManagerId';
                    }
                    var data = context.row[field].toString();
                    if (self.highlightChars[id] != null &&
                        self.highlightChars[id][field] != null)
                    {
                        startIndex = self.highlightChars[id][field].startIndex;
                        length = self.highlightChars[id][field].length;
                    }
                    if (startIndex != null &&
                        length != null)
                    {
                        var highlightedSegment = data.substr(startIndex, length);
                        data = data.substr(0, startIndex) + '<b>' + highlightedSegment + '</b>' + data.substr(startIndex + length, data.length - 1);
                    }
                    $(context.cellContext.parentElement).append(data);
                };

                   self.buttonClick = function(event){
                    // oj.Router.rootInstance.go('dashboard');
                    //window.location.href = '/?root=dashboard';
                       console.log('test')

                }

                self.viewdetails = function(){
                    self.viewDl();
                }
                self.viewDl = function (id)
                {

                    id='joinModal'
                    var popup = document.getElementById(id);
                    popup.open();
                }.bind(self);

                self.cancelListener = function (id)
                {
                    id=' }.bind(self); }.bind(self);'
                    var popup = document.getElementById(id);
                    popup.close();
                }.bind(self);

                self.openPopups = function (id)
                {

                    id='viewDl'
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
        // Object shared with the wizard


        // Use a singleton so that the state is not lost when navigating away



    }
);
