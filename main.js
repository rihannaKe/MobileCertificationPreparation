

<ul>
          <li>
            <input type="checkbox" id="list-item-1">
            <label for="list-item-1" class="first">Accessibility</label>
            <ul>
              <li><a href="accessibility/focus-demo/index.html" target="_blank">Focus</a><small>vari es: gestire focus per custom radiogroup, modal vedere:<a href="https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex#managing_focus_at_the_page_level" target="_blank">google guides</a> </small></li>
              <li><a href="accessibility/spa-manage-focus/index.html" target="_blank">SPA-focus</a><small>aggiungedo tabindex=-1 su header di ciascun pagina e usando focus() al click del link vedere main.js</small></li>
              <li><a href="accessibility/aria-demo/index.html" target="_blank">ARIA </a><small>vari es: uso aria su checkbox</small></li>

              <li><a href="accessibility/tab-order-exam/index.html" target="_blank">Exam15</a></li>
              <li><a href="accessibility/review-exam/index.html" target="_blank">Exam16</a></li>

            </ul>
          </li>
</ul>

function drawList(content){
	 var ul = document.createElement('ul');

	 for(let i=0; i<=data.length;i++){
		 var li = document.createElement('li');
		 var input = document.createElement('input');
		 input.setAttribute('type','checkbox');
		 input.setAttribute('id','list-item-'+(i+1));


		 var label= document.createElement('label');
		 label.setAttribute('for','list-item-'+(i+1));
		 if(i===0){ label.setAttribute('class','first'); }
		 if(i=== (data.length-1){ label.setAttribute('class','last'); }
		 label.innerHTML= data[i].label;
		 var ulIn = document.createElement('ul');
		 for(let j=0; j<=data[i].links.length;j++){
			 var liIn = document.createElement('li');
			 var aIn = document.createElement('a');
			 aIn.setAttribute('href',data[i].links[j].url);
			 aIn.innerHTML= data[i].links[j].label
			 liIn.appendChild(aIn);
			 
			 ulIn.appendChild(liIn);
		 }



		 li.appendChild(input);
		 li.appendChild(label);
		 li.appendChild(ulIn);

	
       
       
        ul.appendChild(li);
	 }



}


var data = [
  {
    "label":"Accessibility",
    "links":[
      {
        "label":"Focus",
        "url":"accessibility/focus-demo/index.html",
        "note": "vari es: gestire focus per custom radiogroup, modal vedere:",
        "docLink":"https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex#managing_focus_at_the_page_level"
      },
      {
        "label":"SPA-focus",
        "url":"accessibility/spa-manage-focus/index.html",
        "note":"aggiungedo tabindex=-1 su header di ciascun pagina e usando focus() al click del link vedere main.js<",
        "docLink":""
      },
      {
        "label":"ARIA",
        "url":"accessibility/aria-demo/index.html",
        "note":"vari es: uso aria su checkbox",
        "docLink":""
      },
      {
        "label":"Tab-order ex.15",
        "url":"accessibility/tab-order-exam/index.html",
        "note":"da finire",
        "docLink":""
      },
      {
        "label":"Review accessi ex.16",
        "url":"accessibility/review-exam/index.html",
        "note":"da finire",
        "docLink":""
      }
    ]
  },
  {
      "label":"Forms",
      "links":[
        {
          "label":"Basic Form",
          "url":"forms/basic/index.html",
          "note":"",
          "docLink":""
        },
        {
          "label":"Credi card",
          "url":"forms/credit-card/index.html",
          "note":"",
          "docLink":""
        },
        {
          "label":"Contact Info",
          "url":"forms/contact-info/index.html",
          "note":"googlesamples",
          "docLink":""
        }
      ]
  },
  {
      "label":"Media queries",
      "links":[
        {
          "label":"Media queries basic",
          "url":"mediaqueries/basic.html",
          "note":"",
          "docLink":""
        },
        {
          "label":"mediaqueries using links",
          "url":"mediaqueries/usingLink/usingLink.html",
          "note":"",
          "docLink":""
        }
      ]
  },{
    "label":"Layout",
    "links":[
      ]
  }

]
