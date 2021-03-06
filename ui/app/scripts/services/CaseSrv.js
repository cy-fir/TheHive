(function() {
    'use strict';
    angular.module('theHiveServices')
        .factory('CaseSrv', function($resource) {
            return $resource('/api/case/:caseId', {}, {
                update: {
                    method: 'PATCH'
                },
                links: {
                    method: 'GET',
                    url: '/api/case/:caseId/links',
                    isArray: true
                }
            });
        });
})();
