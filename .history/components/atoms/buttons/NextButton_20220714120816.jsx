import React from 'react'

export const NextButton = (props) => {
  
  function next(){
    console.log('next')
    const slider = document.querySelector('#slider');
    let sliderSection = document.querySelectorAll('.carrousel__list');
    let sliderSectionFirst = sliderSection[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
    slider.style.transition = "none"; 
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
}
,500);
}


  return (
    <button onClick={()=> next} className="button__next" type={props.type} aria-label="Next Button">
        {props.title}
        <div className="button__next--Arrow">
            <h1 className="next__arrow--h1">
                &#62;
            </h1>
        </div>
    </button>
  )
}
