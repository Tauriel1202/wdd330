//HTML
//creates actual select
export function createSelect(charArray) {
  console.log('🏹')
  let count = 0;
  document.querySelector('.selects').textContent = '';

  charArray = Array.from(new Set(charArray));

  while (count < 5) {
    let p = document.createElement('p');
    let select = document.createElement("select");

    for (let i = 0; i < charArray.length; i++) {
      let option = document.createElement("option");
      option.textContent = charArray[i];
      select.append(option);
    }
    
    p.textContent = 'Choose a character: '
    document.querySelector('.selects').append(p, select);
    count += 1;
  }
}
