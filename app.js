const item = document.querySelector('#item')
const todo = document.querySelector('.todo')

item.addEventListener(
    'keyup',
    function(event){
        if(event.key=='Enter'){
            todofun(this.value)
            this.value =''

        }

    }
)

const todofun = (item) => {
    const listitem = document.createElement('li');
    listitem.innerHTML = `
    ${item}
    <div class="i"> <i class="fa-solid fa-xmark" style="color: #ffffff;"> </i> </div> 
        </li>
    `;
    listitem.addEventListener('click',function(){
        this.classList.toggle('done')
    })
    todo.appendChild(listitem)
    
    listitem.querySelector('.i').addEventListener('click',function(){
        listitem.remove()
    })
}

