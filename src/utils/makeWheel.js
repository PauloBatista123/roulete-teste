//segment = quantidade de itens na roleta
//color = objeto de cores da roleta
import React from 'react';

const width = (segment) => {
  if(segment === 30) return '98px'
  else if(segment === 20) return '110px'
  else return '278px'
}

const heigth = (segment) => {
  if(segment === 30) return '143px'
  else if(segment === 20) return '135px'
  else return '398px'
}

export const makeWheel = (segment, color) => {
  let degArray = [];
  let array = [];
  let count = 0;

  for(let k = 1; k <= segment; k++) {
    array[k] = 0
  }

  for(let i = 1; i <= segment; i++) {
    if(array[i] === 0){
      array[i] = React.createElement('div', { key: i, style: {width: `${width(segment)}`,height: `${heigth(segment)}`,backgroundColor: `${color.red}`,transform: `rotate(${(360 / segment) * (i - 1)}deg)`}, className: "s1" }, i)
    }
  }

  console.log(array)

  return {
    wheelData: array
  }
}