(this["webpackJsonpgoogle-book-search"]=this["webpackJsonpgoogle-book-search"]||[]).push([[0],{34:function(e,t,a){e.exports=a(73)},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),l=a.n(o),c=a(10),s=a(1);function i(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero bg-gray"},r.a.createElement("div",{className:"hero-body",style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("h1",null,"Google Books Search"),r.a.createElement("p",null,"Search for and save books of interest"))))}function m(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"navbar"},r.a.createElement("section",{className:"navbar-section"},r.a.createElement(c.b,{to:"/",className:"navbar-brand mr-2"},"Google Book Search"),r.a.createElement(c.b,{to:"/",className:"btn btn-link"},"Search"),r.a.createElement(c.b,{to:"/saved",className:"btn btn-link"},"Saved"))))}var u=a(8),d=a(7),v=a.n(d),f=function(){return v.a.get("/api/books")},b=function(e){return v.a.delete("/api/books/"+e)},p=function(e){return v.a.post("/api/books",e)};function E(e){return r.a.createElement("div",{className:"card search results"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:e.image,className:"img-responsive",alt:"book cover"})),r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title h5"},e.title),r.a.createElement("div",{className:"card-subtitle text-gray"},e.author)),r.a.createElement("div",{className:"card-body"},e.description),r.a.createElement("div",{className:"card-footer"},r.a.createElement("a",{className:"btn btn-primary",href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"),r.a.createElement("button",{className:"btn btn-primary","data-value":e.id,onClick:e.onClick},"Delete")))}function h(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(),c=Object(u.a)(l,2),s=c[0],i=c[1],m=function(e){e.preventDefault(),console.log(e.currentTarget.dataset.value),b(e.currentTarget.dataset.value).then((function(e){i(e.data)}))};return Object(n.useEffect)((function(){f().then((function(e){o(e.data.map((function(e){return r.a.createElement(E,{key:e._id,id:e._id,title:e.title,author:e.authors,description:e.description,image:e.image,link:e.link,onClick:m})})))})).catch((function(e){return console.log(e)}))}),[s]),r.a.createElement("div",null,a)}function g(){return r.a.createElement("div",null,r.a.createElement(h,null))}var k=a(13),N=a.n(k),y=a(20),I=Object(n.createContext)(null);function x(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(I).setBooks,c=function(){var e=Object(y.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.a.get("https://www.googleapis.com/books/v1/volumes?q="+a+"intitle");case 3:(n=e.sent).data.totalItems>0?l(n):l("No Results");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(y.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=5;break}return e.next=3,v.a.get("https://www.googleapis.com/books/v1/volumes?q="+a+"+intitle&printType=books");case 3:(n=e.sent).data.totalItems>0?l(n):l("No Results");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",style:{marginTop:"8px"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title h5"},"Book Search"),r.a.createElement("div",{className:"card-subtitle text-gray"},"Book")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"input-group "},r.a.createElement("input",{className:"form-input",type:"text",placeholder:"search",onKeyPress:s,onChange:function(e){return o(e.target.value.trim())}}),r.a.createElement("button",{className:"btn btn-primary input-group-btn",onClick:c},"Search")))))}var w=a(21),j=a(16),O=a.n(j);a(70);function S(){var e=Object(n.useContext)(I).books,t="",a=function(t){t.preventDefault();var a=e.data.items.find((function(e){return e.id===t.currentTarget.dataset.value})),n="";console.log(a),a.volumeInfo.authors?n={title:a.volumeInfo.title,authors:Object(w.a)(a.volumeInfo.authors),description:a.volumeInfo.description,image:a.volumeInfo.imageLinks.thumbnail,link:a.volumeInfo.infoLink}:a.volumeInfo.authors||(n={title:a.volumeInfo.title,authors:Object(w.a)(a.volumeInfo.publisher),description:a.volumeInfo.description,image:a.volumeInfo.imageLinks.thumbnail,link:a.volumeInfo.infoLink}),p(n).then((function(e){return alert("Saved")}))};return t=e&&"No Results"!==e?e.data.items.map((function(e){return r.a.createElement("div",{key:O.a.generate(),className:"card search results"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:void 0===e.volumeInfo.imageLinks?"":e.volumeInfo.imageLinks.thumbnail,className:"img-responsive",alt:"book cover"})),r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title h5"},e.volumeInfo.title),r.a.createElement("div",{className:"card-subtitle text-gray"},e.volumeInfo.subtitle),r.a.createElement("div",{className:"card-subtitle text-gray"},e.volumeInfo.authors?e.volumeInfo.authors.map((function(e){return r.a.createElement("p",{key:O.a.generate(),style:{marginBottom:"0px"}},e)})):r.a.createElement("p",{key:O.a.generate(),style:{marginBottom:"0px"}},e.volumeInfo.publisher))),r.a.createElement("div",{className:"card-body"},e.volumeInfo.description),r.a.createElement("div",{className:"card-footer"},r.a.createElement("a",{className:"btn btn-primary",href:e.volumeInfo.infoLink,target:"_blank",rel:"noopener noreferrer"},"View"),r.a.createElement("button",{className:"btn btn-primary","data-value":e.id,onClick:a},"Save")))})):"No Results"===e?r.a.createElement("div",null,"No Results"):r.a.createElement("div",null),r.a.createElement("div",{className:"container results",style:{marginBottom:"8px"}},e?t:r.a.createElement("p",null))}function B(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useMemo)((function(){return{books:a,setBooks:o}}),[a,o]);return r.a.createElement("div",null,r.a.createElement(I.Provider,{value:l},r.a.createElement(x,null),r.a.createElement(S,null)))}var C=function(){return r.a.createElement(c.a,null,r.a.createElement(m,null),r.a.createElement(i,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:B}),r.a.createElement(s.a,{path:"/saved",component:g})))};a(71),a(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.18e6b18b.chunk.js.map