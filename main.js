function drawList(data){
	 var ul = document.createElement('ul');

	 for(let i=0; i<=data.length-1;i++){
		 var li = document.createElement('li');

		 var input = document.createElement('input');
		 input.setAttribute('type','checkbox');
		 input.setAttribute('id','list-item-'+(i+1));


		 var label= document.createElement('label');
		 label.setAttribute('for','list-item-'+(i+1));
		 if(i===0){
       label.setAttribute('class','first');
     }else {
       label.setAttribute('class','last');
     }
		 label.innerHTML= data[i].label;

		 var ulIn = document.createElement('ul');
		 for(let j=0; j<=data[i].links.length-1;j++){
			 var liIn = document.createElement('li');
			 var aIn = document.createElement('a');
			 aIn.setAttribute('href',data[i].links[j].url);
       aIn.setAttribute('target','_blank');
			 aIn.innerHTML= data[i].links[j].label
			 liIn.appendChild(aIn);

       var descIn = document.createElement('small');
       descIn.innerHTML= data[i].links[j].note;
       liIn.appendChild(descIn);

			 ulIn.appendChild(liIn);
		 }

		 li.appendChild(input);
		 li.appendChild(label);
		 li.appendChild(ulIn);
     ul.appendChild(li);
	 }
  document.getElementById('index').appendChild(ul);
}

document.addEventListener('DOMContentLoaded', function() {
  // fetch('content-index.json')
  //   .then(res => res.json())
  //   .then(response => drawList(response))
  //   .catch(error => alert(error) );
		drawList(data)
  }, false);


	var data=[
		{
	    "label":"FE networking",
	    "links":[
	      {
	        "label":"Fetch",
	        "url":"networking/basic-fetch/index.html",
	        "note": "vari es: fetch text, json, image",
	        "docLink":""
	      }
	    ]
	  },
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
