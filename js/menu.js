var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
        )
        this.classList.add('ativo')

}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)


document.getElementById('btn-exp').addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.toggle('active');
  });