document.getElementById('numero').addEventListener('keyup', function () {
  let numero = document.getElementById('numero').value;

  document.getElementById('card_number').innerHTML = numero;
});


document.querySelectorAll('[data-action="date"]').forEach(function(element){
  element.addEventListener('change', function () {
    let mes = document.getElementById('mes').value;
    let ano = document.getElementById('ano').value;

    document.getElementById('card_date').innerHTML = mes+"/"+ano;
  });
});

document.getElementById('codigo').addEventListener('focus', function (){
  document.getElementById('lado-esquerdo').style.transform = 'rotateY(180deg)';
});

document.getElementById('codigo').addEventListener('blur', function (){
  document.getElementById('lado-esquerdo').style.transform = 'rotateY(0deg)';
});
