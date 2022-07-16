import React from 'react'

export const NextButton = (props) => {
  
  function next(){
    const slider = document.querySelector('#slider');
    let sliderSection = document.querySelectorAll('.carrousel__list--item');
    let sliderSectionFirst = sliderSection[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
    slider.style.transition = "none"; 
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
}
,500);
}

const handleNextButton = () => {
  const slider = document.querySelector('#slider');
  let sliderSection = document.querySelectorAll('.carrousel__list--item');
  console.log(sliderSection)
  if(sliderSection[0]){
    next()
  } else {
    console.log("redirect")
  }
}


  return (
    <button onClick={()=> handleNextButton()} className="button__next" type={props.type} aria-label="Next Button">
        {props.title}
        <div className="button__next--Arrow">
            <h1 className="next__arrow--h1">
                &#62;
            </h1>
        </div>
    </button>
  )
}
