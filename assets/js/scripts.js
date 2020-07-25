// Use Immediately Invoked Function Express (IIFE)
// to keep JS scoped to this function
// and avoid overwriting of identifiers
(() => {
  const accordion = () => {
    /*
    Assign variable to 
    .accordion-wrapper > .accordion-item > button element
    to iterate through for loop below to add attributes
    to said button element and 
    sibling .accordion-wrapper > .accordion-item > .accordion-content
    element and
    add click event handler to said button element
    */
    const accordionBtn = document.querySelectorAll('.accordion-wrapper > .accordion-item > button');
    
    /*
    Assign a large random number (1000 to 1999) to a variable
    to use in the .accordion-wrapper > .accordion-item > button element
    for loop below to generate unique values
    for id, aria-controls, and aria-labelledby attributes
    for said button element and sibling .accordion-wrapper > .accordion-item > .accordion-content
    element
    */
    const largeRandNum = Math.floor( (Math.random() * 1000) + 1000 );

    // On click event handler that will be attached
    // to each .accordion-wrapper > .accordion-item > button element
    // in a for loop below
    const accordionBtnOnClick = (e) => {
      const accordionBtnClicked = e.target;
      // nextElementSibling property grabs the next HTML element node and
      // nextSibling property grabs the next node that code be a non-HTML element,
      // such as a line break
      const accordionContentSibling = accordionBtnClicked.nextElementSibling;
      
      /*
      IF accordionBtnClicked
      (.accordion-wrapper > .accordion-item > button element clicked on)
      has aria-expanded="false" set accessiblity (ARIA) properties for 
      attribute/value pair to make it's screen reader state readable
      as aria-expanded="true" (or "expanded")
      and aria-pressed="true" (or "pressed") and make
      accordionContentSibling screen reader readable (and not hidden)
      by adding aria-hidden="false" HTML attribute/value pair 
      and display: block CSS style
      
      ELSE make accordionBtnClicked aria-expanded="false",
      aria-pressed="false", and accordionContentSibling not 
      screen reader readable by adding aria-hidden="true"
      and removing the .active HTML class which
      adds a display: none CSS style
      */
      if(accordionBtnClicked.getAttribute('aria-expanded') === 'false') {   
        accordionBtnClicked.classList.add('active');          
        accordionBtnClicked.setAttribute('aria-expanded', 'true');
        accordionBtnClicked.setAttribute('aria-pressed', 'true');

        accordionContentSibling.classList.add('active'); 
        accordionContentSibling.setAttribute('aria-hidden', 'false');     
      } else {                 
        accordionBtnClicked.classList.remove('active');
        accordionBtnClicked.setAttribute('aria-expanded', 'false');
        accordionBtnClicked.setAttribute('aria-pressed', 'false');

        accordionContentSibling.classList.remove('active'); 
        accordionContentSibling.setAttribute('aria-hidden', 'true');       
      }
    };
  
    /*
    1.
    Iterate through the accordionBtn nodelist
    in a for loop (for IE10 and above support)
    
    2. 
    Inside the for loop:
    a.
    Add attributues id and aria-controls attribute/value pairs for the accordionBtn individual node 
    and get the accordionBtn sibling
    (.accordion-wrapper > .accordion-item > .accordion-content) and add the corresponding
    id and aria-labelledby attribute/value pairs
    
    b.
    Attach accordionBtnOnClick on click handler to each accordionBtn item
    to ensure the click event works
    */
    for(let i = 0; i < accordionBtn.length; i++) {
      const singleAccordionBtn = accordionBtn[i];
      const singleAccordionContent = singleAccordionBtn.nextElementSibling;
      
      const singleAccordionBtnId = 'accordion-btn-id-' + largeRandNum + '-' + [i];
      const singleAccordionContentId = 'accordion-content-id-' + largeRandNum + '-' + [i];
      
      singleAccordionBtn.setAttribute('id', singleAccordionBtnId);
      singleAccordionBtn.setAttribute('aria-controls', singleAccordionContentId);
      
      singleAccordionContent.setAttribute('id', singleAccordionContentId);
      singleAccordionContent.setAttribute('aria-labelledby', singleAccordionBtnId);
      
      singleAccordionBtn.addEventListener('click', accordionBtnOnClick);
    }

  };

  // Envoke the  accordion() method in a on load event handler
  // in case there as any images inside the .accordion-content elements
  // so they will fully load
  window.addEventListener('load', () => {
    accordion();
  });

})();