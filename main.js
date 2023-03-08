//var pesquisa = document.getElementById("pesquisa")

//var  tabela = document.getElementsByName("tabela")

//pesquisa.addEventListener("keyup", function(){




//})


  $(document).ready(function(){
    $('.dropdown-toggle').click(function(e){
      e.preventDefault();
      $(this).next('.dropdown-menu').toggle();
    });
  });