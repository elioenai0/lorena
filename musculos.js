//ELEMENTOS EM OUVIDORIA............................
var bb = document.getElementById('bbzin');
var blockMSG = document.getElementById("response_of_intection_with_baby")
var fecharBLOCKMSG = document.getElementById('fechador')

bb.addEventListener("click", function(e){
   var idDoClick = e.target.id
   var textosTITULOS = [
    'Ouvido',
    'Olho',
    'Cérebro',
    'Bochecha',
    'Nariz e Boca',
    'Olho',
    'Pulso',
    'Mão',
    'Punho'
   ]
   var textosTEXTOS = [
    'É uma estrutura vestíbulo-coclear, que está localizada no osso temporal na caixa craniana. Apresenta duas funções: responsável pela audição – possui o receptor de ondas sonoras – e está relacionada com o sentido do equilíbrio',
    'Os olhos são orgãos que possui um dos sentidos humanos mais importantes: a visão. A fonoaudióloga, apesar de o olho não ser seu principal objeto de estudo, existem aplicações para propiciar o fortalecimento do orbicular dos olhos aos pacientes com sequela de olho',
    'O córtex esquerdo posteroinferior frontal (às vezes chamado área de Broca) controla a função da linguagem expressiva. Neste local, existem uma grande quantidade de neurônios específicos que acendem no seu cérebro quando você ouve alguém cantar. Segundo o artigo, esses neurônios podem distinguir entre fala comum ou instrumentais sem vocais.',
    'A bochecha é uma parte do nosso rosto formada por tecido adiposo, músculos, nervos e articulações. É um órgão essencial na mastigação, fala e até mesmo no paladar. O fonoaduiólogo atua fortemente nesse orgão, principalmente no uso de instrumentos, como massageador Intrabucal de língua, palato e bochechas',
    'A língua exerce várias funções, tais como falar, mastigar, sugar e engolir. Ela faz parte da estrutura crânio-mandibular e está diretamente relacionada à ortodontia, principalmente nos primeiros anos de vida da criança. Como o crescimento envolve a adaptação harmoniosa de ossos, dentes, língua e arco dentário, a língua é muitas vezes capaz de influenciar o desenvolvimento de deformidades. Além disso, ela é coberta por papilas, responsáveis pelo reconhecimento do sabor das diferentes substâncias e alimentos. ',
    'Os olhos são orgãos que possui um dos sentidos humanos mais importantes: a visão. A fonoaudióloga, apesar de o olho não ser seu principal objeto de estudo, existem aplicações para propiciar o fortalecimento do orbicular dos olhos aos pacientes com sequela de olho',
    'O fonoaudiólogo poderá intervir, avaliando se há competência motora para realizar o determinado fonema, ou então orientando a equipe com técnicas específicas que poderão auxiliar o indivíduo na realização do ponto articulatório adequado para realizar o fonema, garantindo assim que ele apresente uma resposta assertiva.',
    'O tato é o sentido responsável pela percepção do toque, estando relacionado, portanto, com a forma como sentimos o mundo em nossa volta. Diferentemente dos outros sentidos, ele não ocorre em uma região específica, sendo possível a percepção tátil por todo nosso corpo.',
    'Fonoaudiólogo é o profissional que atua em pesquisa, prevenção, avaliação e terapia fonoaudiológica na área da comunicação oral e escrita, voz e audição, bem como em aperfeiçoamento dos padrões da fala e da voz'
   ]

   var tituloSAIDA = document.getElementById("titer_of_ROIWB")
   var textoSAIDA = document.getElementById("text_of_ROIWB")
   
   tituloSAIDA.textContent = textosTITULOS[idDoClick-1]
   textoSAIDA.textContent = textosTEXTOS[idDoClick-1]
   blockMSG.style.display = `block`
})

function fecharBLOCK(){
    blockMSG.style.display = `none`
}

