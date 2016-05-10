'use strict';
###*
 #* @ngdoc service
 # @name <%= scriptAppName %>.<%= scriptClassName %>
 # @description
 # # <%= scriptClassName %>
 # Service in the <%= scriptAppName %>.
###
angular.module('<%= scriptAppName %>')
.service('<%= scriptClassName %>Service', ->
# AngularJS will instantiate a singleton by calling "new" on this function

  #Important to keep this otherwise the service will return the this object which will cause errors.
  ''
)
