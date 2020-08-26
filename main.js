const main = document.querySelector('.main-container');
      //creating div element
      let divElem = document.createElement('div');

      // adding attributes
      divElem.setAttribute('id', 'elem');

      let val = localStorage.getItem('myText');
      let text;
      if (val == null) {
        text = document.createTextNode(
          'Hello, this is a div element. Click on  it to edit !!!'
        );
      } else {
        text = document.createTextNode(val);
      }

      // appending the textnode to divElem
      divElem.appendChild(text);

      // appending the divElem to parent(main) container
      main.appendChild(divElem);

      // listining to click event
      divElem.addEventListener('click', function () {
        let noTextAreas = document.getElementsByTagName('textarea').length;
        console.log(noTextAreas);
        if (noTextAreas == 0) {
          let html = `<textarea rows="10",cols="20" id="textarea">${divElem.innerHTML}</textarea>`;
          divElem.innerHTML = html;
        }

        let textArea = document.getElementById('textarea');

        // listening to blur event
        textArea.addEventListener('blur', function () {
          elem.innerHTML = textArea.value;
          localStorage.setItem('myText', textArea.value);
         
        });
      });
