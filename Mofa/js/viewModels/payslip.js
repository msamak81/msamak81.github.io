/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider','ojs/ojknockout','promise', 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojtable'],
function(oj, ko, $, ArrayDataProvider)
{
  function viewModel() {

              var self = this;
              var deptArray1 = [
                  {TotalEariningId: '23232322', TotalDeductionId: '2323232', NetPayId: '2323'},
                ];
              self.summarypayment  = new ArrayDataProvider(deptArray1);

              var deptArray2 = [
                {ReportingNameId: 'Report 1', AmountId: 2000},
                {ReportingNameId: 'Report 2', AmountId: 3433},
                {ReportingNameId: 'Report 3', AmountId: 5665},
                  ];
              self.earningdeductions  = new ArrayDataProvider(deptArray2);

              var deptArray3 = [
                   {MethodId: 'Report 1', BankNameId: '2000', BranchNameId: '2000', AccountNumberId: '2000', AmountId: '2000'},
                   {MethodId: 'Report 1', BankNameId: '2000', BranchNameId: '2000', AccountNumberId: '2000', AmountId: '2000'},
                   {MethodId: 'Report 1', BankNameId: '2000', BranchNameId: '2000', AccountNumberId: '2000', AmountId: '2000'},
                 ];
               self.paymentinformation  = new ArrayDataProvider(deptArray3);

               var deptArray4 = [
                {MessageId: 'the text willbe there'},
              ];
            self.messages  = new ArrayDataProvider(deptArray4);

            var deptArray5 = [
              {MissionNumberId: '323231', DateId: '12-12-18', CityId: 'Riyadh', AmountId: '2000'},
              {MissionNumberId: '5454545', DateId: '02-12-18', CityId: 'Jeddah', AmountId: '2000'},
              
            ];
          self.missioninformation  = new ArrayDataProvider(deptArray5);

          self.emp_total_func = function(footerContext)
          {
            console.log('i am here')
            var earningdeductions = footerContext.componentElement.data;
      
            if (!earningdeductions)
            {
                return;
            }
      
            var total = 0;
            earningdeductions.getTotalSize().then(function(totalRowCount) {
              var addEmpCount = function(rowNum)
              {
                earningdeductions.fetchByOffset({offset:rowNum}).then(function(value)
                {
                  var row = value['results'][0];
                  total = total + row['data']['AmountId'];
                  if (rowNum < totalRowCount - 1)
                  {
                    addEmpCount(rowNum + 1);
                  }
                  else
                  {
                    var parentElement = $('.totalDisaply');
                    parentElement.empty();
                    parentElement.append(total);
                    console.log(total)
                  }
                });
              };
              addEmpCount(0);
            });
          };

            


      }

  return new viewModel()
});

