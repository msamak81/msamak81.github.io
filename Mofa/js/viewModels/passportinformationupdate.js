/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider','ojs/ojknockout', 'ojs/ojrowexpander', 'promise', 'ojs/ojchart', 'ojs/ojflattenedtreetabledatasource', 'ojs/ojjsontreedatasource', 'ojs/ojarraytabledatasource'],

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
          function TrainData() {
              self.currentStepValue = ko.observable('add');
              self.stepArray =
                  ko.observableArray(
                      [{label:'Update', id:'add'},
                       {label:'Preview', id:'preview'},
                      ])

          };
          var trainModel = new TrainData();

          self.filter = ko.observable();

          self.deptArray = [{
               RelativeID: 101 , RelativeName: 'ADFPM 1001 neverending', age: 35, relation: 'Spouse'},
              { RelativeID: 102, RelativeName: 'BB', age: 17, relation: 'child'},
              {  RelativeID: 103,RelativeName: 'Administration', age: 15, relation: 'child'},
              {  RelativeID: 104,RelativeName: 'Marketing', age: 10, relation: 'child'},
              {RelativeID: 105, RelativeName: 'Purchasing', age: 4, relation: 'child'},
             ];

          self.datasource = new oj.ArrayTableDataSource(self.deptArray, {idAttribute: 'RelativeID'});
          self.columnArray = [{"renderer": oj.KnockoutTemplateUtils.getRenderer("checkbox_tmpl", true),
              "headerRenderer": oj.KnockoutTemplateUtils.getRenderer("checkbox_hdr_tmpl", true),
              "id": "column1"},
              {"headerText": "Relative Name",
                  "field": "RelativeName",
                  "id": "column2"},
              {"headerText": "Age",
                  "field": "age",
                  "id": "column3"},
              {"headerText": "Relation",
                  "field": "relation",
                  "id": "column4"}
             ];
          self.selectionListener = function(event)
          {
              var data = event.detail;
              if (data != null)
              {
                  var selectionObj = data.value;
                  if (selectionObj && selectionObj.length > 0)
                  {
                      for (j = 0; j < selectionObj.length; j++)
                      {
                          var range = selectionObj[j];
                          var startIndex = range.startIndex;
                          var endIndex = range.endIndex;

                          if (startIndex != null &&
                              startIndex.column != null &&
                              endIndex.column == startIndex.column &&
                              startIndex.column == 0)
                          {
                              if ($('#table_checkboxset_hdr')[0].value != null &&
                                  $('#table_checkboxset_hdr')[0].value.length > 0 &&
                                  $('#table_checkboxset_hdr')[0].value[0] == 'checked')
                              {
                                  $('#table_checkboxset_hdr')[0].value = [];
                                  return;
                              }
                              else
                              {
                                  $('#table_checkboxset_hdr')[0].value = ['checked'];
                                  return;
                              }
                          }
                      }
                  }
                  var totalSize = self.datasource.totalSize();
                  var i, j;
                  for (i = 0; i < totalSize; i++)
                  {
                      self.datasource.at(i).then(function(row)
                      {
                          var foundInSelection = false;
                          if (selectionObj)
                          {
                              for (j = 0; j < selectionObj.length; j++)
                              {
                                  var range = selectionObj[j];
                                  var startIndex = range.startIndex;
                                  var endIndex = range.endIndex;

                                  if (startIndex != null && startIndex.row != null)
                                  {
                                      if (row.index >= startIndex.row && row.index <= endIndex.row)
                                      {
                                          row.data.Selected(['checked']);
                                          foundInSelection = true;
                                      }
                                  }
                              }
                              if (!foundInSelection)
                              {
                                  row.data.Selected([]);
                              }
                          }
                      });
                  }
              }
          };
          self.selectAllListener = function(event)
          {
              if (self._clearCheckboxHdr)
              {
                  return;
              }
              var data = event.detail;
              if (data != null)
              {
                  var table = document.getElementById('table');
                  if (data['value'].length > 0)
                  {
                      var totalSize = self.datasource.totalSize();
                      table.selection = [{startIndex: {"row":0}, endIndex:{"row": totalSize - 1}}];
                  }
                  else
                  {
                      table.selection = [];
                  }
              }
          };

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
                  id = self.dataArray[i].RelativeID;
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
              self.dataprovider(new ArrayDataProvider(dataArray, {keyAttributes: 'RelativeID'}));

              function getHighlightCharIndexes(highlightChars, text)
              {
                  var highlightCharStartIndex = text.toString().toLowerCase().indexOf(highlightChars.toString().toLowerCase());
                  return {startIndex: highlightCharStartIndex, length: highlightChars.length};
              };
          };
          self.clearClick = function(event){
              self.filter('');
              self.dataprovider(new ArrayDataProvider(self.dataArray, {keyAttributes: 'RelativeID'}));
              self.highlightChars = [];
              document.getElementById('filter').value = "";
              return true;
          }
          self.highlightingCellRenderer = function(context)
          {
              var id = context.row.RelativeID;
              var startIndex = null;
              var length = null;
              var field = null;
              if (context.columnIndex === 0)
              {
                  field = 'RelativeID';
              }
              else if (context.columnIndex === 1)
              {
                  field = 'RelativeName';
              }
              else if (context.columnIndex === 2)
              {
                  field = 'age';
              }
              else if (context.columnIndex === 3)
              {
                  field = 'relation';
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

          self.acceptStr = ko.observable("image/*");
          self.acceptArr = ko.pureComputed(function() {
              var accept = self.acceptStr();
              return accept ? accept.split(",") : [];
          }, self);

          self.fileNames = ko.observableArray([]);

          self.selectListener = function(event) {
              var files = event.detail.files;
              for (var i = 0; i < files.length; i++) {
                  self.fileNames.push(files[i].name);
              }
          }

          // Keep a reference of the train
          self.selectedLabel = ko.observable('Add');
          this.nextStep = function (info)

          {
              var train = document.getElementById("wizardTrain");
              var next = train.getNextSelectableStep();
              if(next != null) {
                  self.currentStepValue(next);
                  self.selectedLabel(train.getStep(next).label);
              }

          };

          self.previousStep = function() {
              var train = document.getElementById("wizardTrain");
              var prev = train.getPreviousSelectableStep();
              if(prev != null) {
                  self.currentStepValue(prev);
                  self.selectedLabel(train.getStep(prev).label);
              }
          }
          
          
          
          // Preview functions

          self.previewArray = [
              { RelativeID: 101 , description: 'English Name As Passport', proposed: 'Mission', current: 'Spouse'},
              { RelativeID: 102, description: 'Passport Number', proposed: 'Irkab Decision', current: 'child'},
              { RelativeID: 103,description: 'Type', proposed: 'visiting New York council', current: 'child'},
              { RelativeID: 104,description: 'Issue Date', proposed: '2323223', current: 'child'},
              { RelativeID: 105, description: 'Expiry Date', proposed: 'New York', current: 'child'},
              { RelativeID: 105, description: 'Place of Issue', proposed: 'Vacation', current: 'child'},
              
          ];

          self.datasource_preview = new oj.ArrayTableDataSource(self.previewArray, {idAttribute: 'RelativeID'});
          self.columnArray_preview = [
              {"headerText": "",
                  "field": "",
                  "id": "column2"},
              {"headerText": "Proposed",
                  "field": "proposed",
                  "id": "column3"},
          ];


          self.previewdatasource = ko.observable();
          var options = [];
          $.getJSON( "data/table_sample.json",
              function(data)
              {
                  self.previewdatasource(new oj.FlattenedTreeTableDataSource(
                      new oj.FlattenedTreeDataSource(
                          new oj.JsonTreeDataSource(data), options)));
              });

          // self.dataprovider = new ArrayDataProvider(self.tableData, {keyAttributes: 'DepartmentId', implicitSort: [{attribute: 'DepartmentId', direction: 'ascending'}]});
          self.attachmenttableHeader = [
              {"headerText": "Title","field": "title","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Category","field": "category","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Type","field": "type","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Last Updated By","field": "name","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Last Update","field": "start","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "URL","field": "url","headerClassName": "","className": "","resizable": "disabled"},
          ];

          self.approvaltableHeader = [
              {"headerText": "Details","field": "","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Approver","field": "name","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Approval Type","field": "approve_type","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "order No","field": "decision_no","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Category","field": "category","headerClassName": "","className": "","resizable": "disabled"},
              {"headerText": "Status","field": "status","headerClassName": "","className": "","resizable": "disabled"},
          ];

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
