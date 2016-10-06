angular.module("chatApp").service("mainServ", function($http){

  this.postChat = function(chat){
    return $http({
      method: "POST",
      url: "/chat",
      data: chat
    }).then(function(response){
      return response.data;
    });

  };


  this.getChat = function(){
    return $http({
      method: "GET",
      url: "/chat"
    }).then(function(response){

      return response.data;
    });
  };

});


write clearAll method
