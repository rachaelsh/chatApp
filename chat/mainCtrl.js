angular.module("chatApp").controller("mainCtrl", function($scope, mainServ){


  $scope.postChat = function(chat){
    mainServ.postChat(chat)
    .then(function(response){
      $scope.newChat.body = "";
      $scope.getChat();
    });
  };

  $scope.getChat = function(){
    mainServ.getChat()
    .then(function(response){
      $scope.chatStore = response;
    });
  };

  $scope.getChat();

});


write clearALL method
