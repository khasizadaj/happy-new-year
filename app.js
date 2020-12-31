let name = document.querySelector('#name')
let header = document.querySelector('.header')
let inputWrapper = document.querySelector('.input-wrapper')
let body = document.querySelector('.body')
let rightArrow = document.querySelector('.right-arrow')

rightArrow.addEventListener('click', () => {
  let name = getName()

  if (name == "") { showError(); return 1 }
  else {
    body.innerHTML = `<p>Salam, ${name}. Bu mesaj əvvəldən yazılıb deyə hamıya sən deyə müraciət 
    edəcəm.</p></br><p>Bu il hər birimiz üçün çox çətin keçdiyini deməyə belə ehtiyac yoxdur. 
    Ümid edirəm ki, bununla belə bir çox arzuna çata bilibsən. Sənə qarşıdan gələn yeni ildə 
    xoş günlər arzulayıram desəm çox klişe olar :) Yeni iliniz kimi düşüncələriniz və etdikləriniz
    də yeni olsun və keçən ildə "kaş ki" dediyiniz işləri edə biləsiz.</p>
    </br>
    <p>Bir də özəl günü və ya özəl nəyisə gözləmədən yaşa. Çünki sən artıq özəlsən.</p>
    </br>
    <p>Cavid "JAXA" Xasizadə</p>`
  }

  header.classList.add('name-added')
  inputWrapper.classList.add('name-added')


  body.classList.add('is-visible')
  body.classList.add('name-added')
})

function getName() {
  let inputVal = inputWrapper.querySelector('#name').value
  return inputVal
}
function showError() {
  let small = document.createElement('small')
  small.innerHTML = '<u>Qeyd</u>: Zəhmət olmasa, adınızı yazın.'
  inputWrapper.appendChild(small)
}

