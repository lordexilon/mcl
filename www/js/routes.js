angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.mECareLifeApplicandoLA', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/mECareLifeApplicandoLA.html',
        controller: 'mECareLifeApplicandoLACtrl'
      }
    }
  })

  .state('aCERCADE', {
    url: '/page7',
    templateUrl: 'templates/aCERCADE.html',
    controller: 'aCERCADECtrl'
  })

  .state('tabsController.sINCRONIZAR', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sINCRONIZAR.html',
        controller: 'sINCRONIZARCtrl'
      }
    }
  })

  .state('tabsController.tRATAMIENTO', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/tRATAMIENTO.html',
        controller: 'tRATAMIENTOCtrl'
      }
    }
  })

  .state('tabsController.rECORDATORIO', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/rECORDATORIO.html',
        controller: 'rECORDATORIOCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cONSULTAR'
      2) Using $state.go programatically:
        $state.go('tabsController.cONSULTAR');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.cONSULTAR', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/cONSULTAR.html',
        controller: 'cONSULTARCtrl'
      },
      'tab3': {
        templateUrl: 'templates/cONSULTAR.html',
        controller: 'cONSULTARCtrl'
      }
    }
  })

  .state('tabsController.mEDICACION', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/mEDICACION.html',
        controller: 'mEDICACIONCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('lOGIN', {
    url: '/page11',
    templateUrl: 'templates/lOGIN.html',
    controller: 'lOGINCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});