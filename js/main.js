  <script>
    
    const list = document.querySelectorAll('.list');

    function activeLink(){
      list.forEach((item) => 
      item.classList.remove('active'));
      this.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('click', activeLink));

    
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');

    toggle.onclick = function(){
    this.classList.toggle('active')
    }
    
    $(document).ready(function(){
      $('.toggle').click(function(){
        $('.navigation').slideToggle(500);
      })
    })

    
    let plus = document.querySelector('.plus')
    let portfolio_menu = document.querySelector('.portfolio_menu')

    plus.onclick = function(){
      portfolio_menu.classList.toggle('active')
    }
  </script>