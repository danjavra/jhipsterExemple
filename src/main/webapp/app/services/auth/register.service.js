(function () {
    'use strict';

    angular
        .module('jhipsterExempleApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
