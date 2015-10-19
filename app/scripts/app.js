'use strict';

/**
 * @ngdoc overview
 * @name pmsappApp
 * @description
 * # pmsappApp
 *
 * Main module of the application.
 */
angular
  .module('pmsappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
	'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',
     function ($stateProvider, $urlRouterProvider) {
	
.when('/link-master', {
  templateUrl: 'views/link-master.html',
  controller: 'LinkMasterCtrl',
  controllerAs: 'linkMaster'
})
.when('/flag-master', {
  templateUrl: 'views/flag-master.html',
  controller: 'FlagMasterCtrl',
  controllerAs: 'flagMaster'
})
.when('/patient-master', {
  templateUrl: 'views/patient-master.html',
  controller: 'PatientMasterCtrl',
  controllerAs: 'patientMaster'
})
.when('/hospital-master', {
  templateUrl: 'views/hospital-master.html',
  controller: 'HospitalMasterCtrl',
  controllerAs: 'hospitalMaster'
})
.when('/staff-master', {
  templateUrl: 'views/staff-master.html',
  controller: 'StaffMasterCtrl',
  controllerAs: 'staffMaster'
})
.when('/descriptive-test', {
  templateUrl: 'views/descriptive-test.html',
  controller: 'DescriptiveTestCtrl',
  controllerAs: 'descriptiveTest'
})
.when('/user-account', {
  templateUrl: 'views/user-account.html',
  controller: 'UserAccountCtrl',
  controllerAs: 'userAccount'
})
.when('/test-calculator', {
  templateUrl: 'views/test-calculator.html',
  controller: 'TestCalculatorCtrl',
  controllerAs: 'testCalculator'
})
.when('/snippet-master', {
  templateUrl: 'views/snippet-master.html',
  controller: 'SnippetMasterCtrl',
  controllerAs: 'snippetMaster'
})
.when('/profile-master', {
  templateUrl: 'views/profile-master.html',
  controller: 'ProfileMasterCtrl',
  controllerAs: 'profileMaster'
})
.when('/patient-registration', {
  templateUrl: 'views/patient-registration.html',
  controller: 'PatientRegistrationCtrl',
  controllerAs: 'patientRegistration'
})
.when('/test-master-details', {
  templateUrl: 'views/test-master-details.html',
  controller: 'TestMasterDetailsCtrl',
  controllerAs: 'testMasterDetails'
})
.when('/bill-master-detail-view', {
  templateUrl: 'views/bill-master-detail-view.html',
  controller: 'BillMasterDetailViewCtrl',
  controllerAs: 'billMasterDetailView'
})
.when('/pms-administration', {
  templateUrl: 'views/pms-administration.html',
  controller: 'PmsAdministrationCtrl',
  controllerAs: 'pmsAdministration'
})
.when('/pms-concise', {
  templateUrl: 'views/pms-concise.html',
  controller: 'PmsConciseCtrl',
  controllerAs: 'pmsConcise'
})
.when('/visit-request-authentication', {
  templateUrl: 'views/visit-request-authentication.html',
  controller: 'VisitRequestAuthenticationCtrl',
  controllerAs: 'visitRequestAuthentication'
})
.when('/pms-receipt', {
  templateUrl: 'views/pms-receipt.html',
  controller: 'PmsReceiptCtrl',
  controllerAs: 'pmsReceipt'
})
.when('/pms-privilliges', {
  templateUrl: 'views/pms-privilliges.html',
  controller: 'PmsPrivilligesCtrl',
  controllerAs: 'pmsPrivilliges'
})
.when('/id-management', {
  templateUrl: 'views/id-management.html',
  controller: 'IdManagementCtrl',
  controllerAs: 'idManagement'
})
.when('/todays-patient', {
  templateUrl: 'views/todays-patient.html',
  controller: 'TodaysPatientCtrl',
  controllerAs: 'todaysPatient'
})
.when('/sample-collection', {
  templateUrl: 'views/sample-collection.html',
  controller: 'SampleCollectionCtrl',
  controllerAs: 'sampleCollection'
})
.when('/cc-charges', {
  templateUrl: 'views/cc-charges.html',
  controller: 'CcChargesCtrl',
  controllerAs: 'ccCharges'
})
.when('/branch-management', {
  templateUrl: 'views/branch-management.html',
  controller: 'BranchManagementCtrl',
  controllerAs: 'branchManagement'
})
.when('/sample-received', {
  templateUrl: 'views/sample-received.html',
  controller: 'SampleReceivedCtrl',
  controllerAs: 'sampleReceived'
})
.when('/concise-print', {
  templateUrl: 'views/concise-print.html',
  controller: 'ConcisePrintCtrl',
  controllerAs: 'concisePrint'
})
.when('/pms-reports', {
  templateUrl: 'views/pms-reports.html',
  controller: 'PmsReportsCtrl',
  controllerAs: 'pmsReports'
})
.when('/change-pin', {
  templateUrl: 'views/change-pin.html',
  controller: 'ChangePinCtrl',
  controllerAs: 'changePin'
})
.when('/entire-test', {
  templateUrl: 'views/entire-test.html',
  controller: 'EntireTestCtrl',
  controllerAs: 'entireTest'
})
	$urlRouterProvider.otherwise("/");
    $stateProvider
	  .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .state('/descriptive test', {
        url: '/descriptive test',
        templateUrl: 'views/descriptive test.html',
        controller: 'MainCtrl'
      })
    .state('/addgroup', {
        url: '/addgroup',
        templateUrl: 'views/addgroup.html',
        controller: 'MainCtrl'
      })
    .state('/addemployeecategory', {
        url: '/addemployeecategory',
        templateUrl: 'views/addemployeecategory.html',
        controller: 'MainCtrl'
      })
    .state('/addfaculty', {
        url: '/addfaculty',
        templateUrl: 'views/addfaculty.html',
        controller: 'MainCtrl'
      })
    .state('/testmaster', {
        url: '/testmaster',
        templateUrl: 'views/testmaster.html',
        controller: 'MainCtrl'
      })
    .state('/addcontactcategory', {
        url: '/addcontactcategory',
        templateUrl: 'views/addcontactcategory.html',
        controller: 'MainCtrl'
      })
    .state('/addexamtype', {
        url: '/addexamtype',
        templateUrl: 'views/addexamtype.html',
        controller: 'MainCtrl'
      })
    .state('/addsnippet', {
        url: '/addsnippet',
        templateUrl: 'views/addsnippet.html',
        controller: 'MainCtrl'
      })
    .state('/addflag', {
        url: '/addflag',
        templateUrl: 'views/addflag.html',
        controller: 'MainCtrl'
      })
    .state('/addsample', {
        url: '/addsample',
        templateUrl: 'views/addsample.html',
        controller: 'MainCtrl'      
      })
    .state('/addinstrument', {
        url: '/addinstrument',
        templateUrl: 'views/addinstrument.html',
        controller: 'MainCtrl'
      })
    .state('/addmethod', {
        url: '/addmethod',
        templateUrl: 'views/addmethod.html',
        controller: 'MainCtrl'
      })
  }]);
  