/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define([
        'ojs/ojcore',
        'knockout',
        'ojs/ojmodule-element-utils',
        'ojs/ojmodule-element',
        'ojs/ojrouter',
        'ojs/ojknockout',
        'ojs/ojarraytabledatasource',
        'ojs/ojmenu',
        'ojs/ojoffcanvas',
        'ojs/ojbutton',
        'ojs/ojchart',
        'ojs/ojtoolbar',
        'ojs/ojfilmstrip',
        'ojs/ojoption',
        'ojs/ojtable',
        'ojs/ojcollapsible',
        'ojs/ojcheckboxset',
        'ojs/ojselectcombobox',
        'ojs/ojinputtext',
        'ojs/ojradioset',
        'ojs/ojtrain',
        'ojs/ojmodule',
        'ojs/ojdatetimepicker',
        'ojs/ojtimezonedata',
        'ojs/ojswitch',
        'ojs/ojslider',
        'ojs/ojfilepicker',
        'ojs/ojtimeline',
        'ojs/ojdialog',
        'ojs/ojmessages'



    ],
    function(oj, ko, moduleUtils) {
        function ControllerViewModel() {
            var self = this;

            // Media queries for repsonsive layouts
            var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
            var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
            self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
            // observable for large screens
            var lgQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP);
            self.lgScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(lgQuery);

            // Router setup
            self.router = oj.Router.rootInstance;
            //self.router.go('login');

            self.router.configure({
                'login': {label: 'Login', isDefault: true},
                'dashboard': {label: 'Dashboard'},
                'myprofile': {label: 'My Profile'},
                'irkabrequest': {label: 'IRKAB Request'},
                'irkabadd': {label: 'Add IRKAB Request'},
                'definition': {label: 'Definition letter'},
                'payslip': {label: 'Payslip'},
                'cv': {label: 'Employee Resume'},
                'employeeinformation': {label: 'Employee Information'},
                'personalinformation': {label: 'Personal Information'},
                'submitpaymethod': {label: 'Submit Pay Method'},
                'submitpaymethodadd': {label: 'Add Pay Method'},
                'submitpaymethodupdate': {label: 'Update Pay Method'},
                'childeducation': {label: 'Child Education Request'},
                'childeducationadd': {label: 'Add Child Education Request'},
                'childeducationupdate': {label: 'Update Child Education Request'},
                'residentialunit': {label: 'Residential unit'},
                'residentialunitadd': {label: 'Add Residential unit'},
                'residentialunitupdate': {label: 'Update Residential unit'},
                'notificationinbox': {label: 'Notification Inbox'},
                'passportinformation': {label: 'Passport Information'},
                'passportinformationadd': {label: 'Add Passport Information'},
                'passportinformationupdate': {label: 'Update Passport Information'},
                'passportinformationrequest': {label: 'Passport Information Request'},
                'vacation': {label: 'Vacation'},
                'vacationadd': {label: 'Add Vacation'},
                'vacationupdate': {label: 'Update Vacation'},
                'saudihafizaadd': {label: 'Saudi Hafiza'},
                'irkabupdate': {label: 'Update IRKAB'},
                

            });

            oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
            self.moduleConfig = ko.observable({'view':[], 'viewModel':null});
            self.loadModule = function() {
                ko.computed(function() {
                    var name = self.router.moduleConfig.name();
                    var viewPath = 'views/' + name + '.html';
                    var modelPath = 'viewModels/' + name;
                    var masterPromise = Promise.all([
                        moduleUtils.createView({'viewPath':viewPath}),
                        moduleUtils.createViewModel({'viewModelPath':modelPath})
                    ]);
                    masterPromise.then(
                        function(values){
                            self.moduleConfig({'view':values[0],'viewModel':values[1]});
                        }
                    );
                });
            };

            self.ViewModel = function(){
                this.listItems = [
                    {
                        id:"dashboard",
                        label:"Dashboard",
                        iconStyleClass: "oj-navigationlist-item-icon icon-tachometer-alt"
                    },
                    {
                        id:"myprofile",
                        label:"My Profile",
                        iconStyleClass: "oj-navigationlist-item-icon icon-address-card",
                        children:[
                            {
                                id : "employeeinformation",
                                label: "Employee Information",
                                iconStyleClass: "oj-navigationlist-item-icon"
    
                                },
                                {
                                    id : "personalinformation",
                                    label: "Personal Information",
                                    iconStyleClass: "oj-navigationlist-item-icon"
        
                                    },
                            


                    ]
                    },
                    {
                        id:"notificationinbox",
                        label:"Notification Inbox",
                        iconStyleClass: "oj-navigationlist-item-icon icon-inbox"
                    },

                    {
                        id:"myteam",
                        label:"My Team",
                        iconStyleClass: "oj-navigationlist-item-icon icon-users",
                    },
                    {
                        id:"employeerequest",
                        label:"Employee Request",
                        iconStyleClass: "oj-navigationlist-item-icon icon-file-signature",
                        children :[
                            {
                            id : "irkabrequest",
                            label: "Irkab Request",
                            iconStyleClass: "oj-navigationlist-item-icon"

                            },
                            {
                                id : "submitpaymethod",
                                label: "Submit Pay Method",
                                iconStyleClass: "oj-navigationlist-item-icon"
    
                                },
                                {
                                    id : "childeducation",
                                    label: "Child Education Request",
                                    iconStyleClass: "oj-navigationlist-item-icon"
        
                                    },
                                {
                                    id : "residentialunit",
                                    label: "Residential unit Request",
                                    iconStyleClass: "oj-navigationlist-item-icon"
            
                                    },
                                    {
                                        id : "passportinformation",
                                        label: "Passport Information",
                                        iconStyleClass: "oj-navigationlist-item-icon"
                
                                    },
                                    {
                                        id : "vacation",
                                        label: "Vacation Request",
                                        iconStyleClass: "oj-navigationlist-item-icon"
                
                                    }
                        ]
                    },
                    {
                        id:"officialdocuments",
                        label:"Official Documents",
                        iconStyleClass: "oj-navigationlist-item-icon icon-copy1",
                        children:[
                            {
                                id:"definition",
                                label:"Definition Letter",
                                iconStyleClass: "oj-navigationlist-item-icon "
                            },
                            {
                                id:"payslip",
                                label:"Payslip Request",
                                iconStyleClass: "oj-navigationlist-item-icon "
                            },
                            {
                                id:"cv",
                                label:"CV",
                                iconStyleClass: "oj-navigationlist-item-icon "
                            }
                        ]
                    },

                ];
                this.itemOnly = function(context) {
                    return context['leaf'];
                };
                this.selectedItem = ko.observable('dashboard');
            }

            this.fastLink = [
                {
                    id:"myrequest",
                    label:"My Requests",
                    iconStyleClass: "oj-navigationlist-item-icon icon-window-restore1"
                },
                {
                    id:"teamrequest",
                    label:"Team Requests",
                    iconStyleClass: "oj-navigationlist-item-icon icon-users"
                }
                ]
            // Drawer
            // Close offcanvas on medium and larger screens

                 self.drawerParams = {
                    "selector": "#drawer",
                    "content": "#main",
                    "autoDismiss": "auto",
                     "displayMode" : "overlay"
                };


                self.screenRange =
                    oj.ResponsiveKnockoutUtils.createScreenRangeObservable();

                // depending on the screen size
                self.screenSizeLabel = ko.computed(function() {
                    var screenRange = self.screenRange();
                    if ( screenRange == oj.ResponsiveUtils.SCREEN_RANGE.MD)
                    {
                        console.log('tablets')
                    }
                    // the code here checks if the size is at least
                    // large using the compare function
                    else if ( oj.ResponsiveUtils.compare(screenRange,
                        oj.ResponsiveUtils.SCREEN_RANGE.LG) > -1)
                    {
                        self.drawerParams.displayMode = "push";
                        self.drawerParams.autoDismiss = "none";
                        oj.OffcanvasUtils.toggle(self.drawerParams);
                    }
                });

            // Called by navigation drawer toggle button and after selection of nav drawer item
            self.toggleDrawer = function() {

                return oj.OffcanvasUtils.toggle(self.drawerParams);
            }
            // Add a close listener so we can move focus back to the toggle button when the drawer closes
            $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

            // Header
            // Application Name used in Branding Area
            self.appName = ko.observable("App Name");
            // User Info used in Global Navigation area
            self.userLogin = ko.observable("john.hancock@oracle.com");


            // top nav responsive
           self.smQuery = oj.ResponsiveUtils.getFrameworkQuery(
                oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);

            self.screenRange = oj.ResponsiveKnockoutUtils.createScreenRangeObservable();
            self.isSmall = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
            self.topNav = [
                {id: 'notificaion',    label: 'Notifications',        disabled: false, iconClass:'icon-envelope'},
                {id: 'preferences',   label: 'preferences',       disabled: false, iconClass:'icon-cog'},
                {id: 'home',   label: 'Home',       disabled: false, iconClass:'icon-home'},
            ];



            this.userMenuList = [
                {
                    id:"myprofile",
                    label:"My Profile",
                    iconStyleClass: "oj-navigationlist-item-icon icon-address-card",
                    url:'?root=employeeinformation'
                },
                {
                    id:"signout",
                    label:"Sign Out",
                    iconStyleClass: "oj-navigationlist-item-icon icon-sign-out-alt",
                    url:'?root=login'
                }

                ]

            this.notifications = [
                {

                    label:"notification label number 1",
                    unread:false
                },
                {
                    label:"notification label number 2",
                    unread:true
                },
                {

                    label:"notification label number 3",
                    unread:true
                },
                {
                    label:"notification label number 4",
                    unread:true
                },
                {

                    label:"notification label number 5",
                    unread:true
                },
                {
                    label:"notification label number 6",
                    unread:false
                },
                {

                    label:"notification label number 7",
                    unread:false
                },
                {
                    label:"notification label number 8",
                    unread:true
                }

            ]

            $('.user_menu_link').click(function () {
                $('.user_menu').removeClass('opened');
                $(this).parents('li').find('.user_menu').toggleClass('opened');
                event.stopPropagation();

            })
            $('body').click(function(){
                $('.user_menu').removeClass('opened');
            })

            $('.user_menu').click(function(){
                event.stopPropagation();
            })




        }

        return new ControllerViewModel();
    }
);
