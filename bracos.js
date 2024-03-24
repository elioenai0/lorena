var areaLOGADO = document.getElementById("videdo")

var linkOfVIDEO = [
    'https://www.youtube.com/embed/rqgZIlYjFVg?si=w5CCSLQEC9w7RA3y',
    'https://www.youtube.com/embed/7OQB_yDyWbY?si=iZv3c-B944-qQa96',
    'https://www.youtube.com/embed/anVe3N_yACE?si=Lz_T_2oZgVkpGaPW'
]

var x = 0;

areaLOGADO.setAttribute('src',linkOfVIDEO[x])

function next(){
    if(x == linkOfVIDEO.length-1){
        x = 0
    }else{
        x = x+1
    }
    areaLOGADO.setAttribute('src',linkOfVIDEO[x])
}

function logar(){
    var logins = [
        'ello',
        'lolo',
        'elil'
    ]
    var pass = [
        '1234',
        '0109',
        'past'
    ]
    var namePas = [
        'Eli e Lo',
        'Joana', 
        'João'
    ]
    var user = document.getElementById('login').value
    var senha = document.getElementById('pas').value

    if(logins.indexOf(user) == pass.indexOf(senha)){
        document.getElementById('logado').style.display = `block`
        document.getElementById('logon').style.display = `none`
        document.getElementById('minhaLo4').style.display = `none`
        document.getElementById('namePaci').textContent = namePas[logins.indexOf(user)] + `, bem vinda(o)!`
        
    }else{
        window.alert('tente novamente')
    }

    
}