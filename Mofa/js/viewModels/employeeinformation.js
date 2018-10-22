/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider','ojs/ojknockout', 'ojs/ojrowexpander', 'ojs/ojchart', 'ojs/ojflattenedtreetabledatasource', 'ojs/ojjsontreedatasource'],
 function(oj, ko, $) {

     function AboutViewModel() {
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
        // Implement if needed
          var tabs = [
              {
                  name: 'Career Path',
                  id:'careers',
                  icon:'icon-walking'
              },
              {
                  name: 'Vacations Details',
                  id:'vacations',
                  icon:'icon-bicycle'
              }
              ];
          self.dataSource = new oj.ArrayTableDataSource(tabs,{idAttribute:'id'});
          self.selectedItem = ko.observable("careers");

          self.timeline_data = ko.observableArray( [
              {
                  title: 'Jioned MOFA',
                  description : 'Special',
                  date:'01-01-1440'
            },
              {
                  title: 'Promoted',
                  description : 'Asst Manager',
                  color:'orange',
                  date:'01-01-1439'
              },
              {
                  title: 'Grade Change',
                  description : 'موظف رسمي المرتبة السادسة',
                  date:'12-01-1438'
              }
              ]);

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
          ];

          self.handleValueChanged = function(event){
              console.log('test')
              return true;
          }




      };

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
    return new AboutViewModel();
  }
);
