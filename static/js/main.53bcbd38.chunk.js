(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{105:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(102),t(103),t(104),t(105),t(20)),c=t(21),m=t(22),i=t(23),u=t(170),d=t(171),E=t(172),f=t(173),h=t(174),p=t(175),g=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},b="http://localhost:3001/",N=t(28);function v(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(g,null):n?r.a.createElement("h4",null,n):r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(h.a,null,a.designation):null,r.a.createElement(p.a,null,a.description))))}var y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},O=t(176),w=t(177),M=t(178),L=t(9);function k(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(L.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:b+a.image,alt:a.name}),r.a.createElement(O.a,null,r.a.createElement(f.a,null,a.name))))}var S=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(k,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(L.b,{to:"/home"},"Home")),r.a.createElement(M.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"))),r.a.createElement("div",{className:"row"},a))},j=t(19),C=t(179),D=t(180),F=t(181),x=t(182),A=t(7),I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}},R=function(e){return function(a){return a&&a.length>=e}},_=function(e){return!isNaN(Number(e))},q=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},P=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(L.b,{to:"/home"},"Home")),r.a.createElement(M.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"call"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(A.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:I,minLength:R(3),maxLength:T(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:I,minLength:R(3),maxLength:T(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:I,minLength:R(3),maxLength:T(15),isNumber:_}}),r.a.createElement(A.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:I,validEmail:q}}),r.a.createElement(A.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(F.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(D.a,null,r.a.createElement(A.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(F.a,{md:{size:3,offset:1}},r.a.createElement(A.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"feedback",md:2},"Your feedback"),r.a.createElement(F.a,{md:10},r.a.createElement(A.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control",validators:{required:I}}),r.a.createElement(A.Errors,{className:"text-danger",model:".message",show:"touched",messages:{required:"Required"}}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(F.a,{md:{size:10,offset:2}},r.a.createElement(x.a,{type:"submit",color:"primary"},"Send feedback")))))))}}]),t}(n.Component),H=t(183),G=t(184);function U(e){var a=e.ldr;return r.a.createElement(N.Fade,{in:!0},r.a.createElement(H.a,null,r.a.createElement(H.a,{left:!0,className:"mt-3"},r.a.createElement(H.a,{object:!0,src:b+a.image,alt:a.name})),r.a.createElement(H.a,{body:!0,className:"ml-5 mt-3"},r.a.createElement(H.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description))))}var W=function(e){var a=e.leaders.leaders.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 m-1"},r.a.createElement(U,{key:e.id,ldr:e}))}));function t(){return e.leaders.isLoading?r.a.createElement(g,null):e.leaders.errMess?r.a.createElement("h4",null,e.leaders.errMess):r.a.createElement(H.a,{list:!0},r.a.createElement(N.Stagger,{in:!0},a))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(L.b,{to:"/home"},"Home")),r.a.createElement(M.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(G.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(E.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(E.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(H.a,{list:!0},r.a.createElement(t,null)))))},Y=t(197),B=t(185),K=t(186),z=function(e){return e&&e.length},J=function(e){return function(a){return!a||a.length<=e}},Z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.name,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{color:"outline-secondary",value:"submitComment",onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment "),r.a.createElement(Y.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(B.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal}," Submit Comment "),r.a.createElement(K.a,null,r.a.createElement(A.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"rating",md:10},"Rating"),r.a.createElement(F.a,{md:12},r.a.createElement(A.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"name",md:10},"Your Name"),r.a.createElement(F.a,{md:12},r.a.createElement(A.Control.text,{model:".name",id:"name",name:"name",placeholder:"Your Name",className:"form-control",validators:{required:z,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:J(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less"}}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"comment",md:10},"Comment"),r.a.createElement(F.a,{md:12},r.a.createElement(A.Control.textarea,{rows:"6",model:".comment",id:"comment",name:"comment",className:"form-control"}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(F.a,null,r.a.createElement(x.a,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component);function $(e){var a=e.comments,t=e.postComment,n=e.dishId;if(null==a)return r.a.createElement("div",null);var l=a.map((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(N.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"--",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))}));return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(N.Stagger,{in:!0},l)),r.a.createElement(Z,{dishId:n,postComment:t}))}function Q(e){var a=e.dish;return null==a?r.a.createElement("div",null):r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(p.a,null,a.description)))))}var V=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(w.a,null,r.a.createElement(M.a,null,r.a.createElement(L.b,{to:"/menu"},"Menu")),r.a.createElement(M.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name))),r.a.createElement("div",{className:"row"},r.a.createElement(Q,{dish:e.dish}),r.a.createElement($,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},X=t(187),ee=t(188),ae=t(189),te=t(190),ne=t(191),re=t(192),le=t(193),se=t(194),oe=t(195),ce=t(196),me=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(j.a)(n)),n.toggleModal=n.toggleModal.bind(Object(j.a)(n)),n.handleLogin=n.handleLogin.bind(Object(j.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(ee.a,{onClick:this.toggleNav}),r.a.createElement(ae.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"/assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(te.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(ne.a,{navbar:!0},r.a.createElement(re.a,null,r.a.createElement(L.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(re.a,null,r.a.createElement(L.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(re.a,null,r.a.createElement(L.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(re.a,null,r.a.createElement(L.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(ne.a,{className:"ml-auto",navbar:!0},r.a.createElement(re.a,null,r.a.createElement(x.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"},"Login"))))))),r.a.createElement(le.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(Y.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(B.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},"Login"),r.a.createElement(K.a,null,r.a.createElement(se.a,{onSubmit:this.handleLogin},r.a.createElement(oe.a,null,r.a.createElement(D.a,{htmlFor:"username"},"Username"),r.a.createElement(ce.a,{type:"text",id:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(oe.a,null,r.a.createElement(D.a,{htmlFor:"password"},"Password"),r.a.createElement(ce.a,{type:"password",id:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(oe.a,{check:!0},r.a.createElement(D.a,{check:!0},r.a.createElement(ce.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me")),r.a.createElement(x.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var ie=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(L.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(L.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(L.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(L.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},ue=t(10),de=t(26),Ee=function(){return{type:"DISHES_LOADING"}},fe=function(e){return{type:"DISHES_FAILED",payload:e}},he=function(e){return{type:"ADD_DISHES",payload:e}},pe=function(e){return{type:"COMMENTS_FAILED",payload:e}},ge=function(e){return{type:"ADD_COMMENTS",payload:e}},be=function(){return{type:"PROMOS_LOADING"}},Ne=function(e){return{type:"PROMOS_FAILED",payload:e}},ve=function(e){return{type:"ADD_PROMOS",payload:e}},ye=function(){return function(e){return{type:"LEADERS_LOADING"}}},Oe=function(e){return{type:"LEADERS_FAILED",payload:e}},we=function(e){return{type:"ADD_LEADERS",payload:e}},Me=t(58),Le=t(91),ke=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(Me.a,null,r.a.createElement(Le.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ue.d,null,r.a.createElement(ue.b,{path:"/home",component:function(){return r.a.createElement(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(ue.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(S,{dishes:e.props.dishes})}}),r.a.createElement(ue.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(V,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ue.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(P,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ue.b,{path:"/aboutus",component:function(){return r.a.createElement(W,{leaders:e.props.leaders})}}),r.a.createElement(ue.a,{to:"/home"})))),r.a.createElement(ie,null))}}]),t}(n.Component),Se=Object(ue.g)(Object(de.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(Ee(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(he(a))})).catch((function(a){return e(fe(a.message))}))}))},resetFeedbackForm:function(){e(A.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},fetchPromos:function(){e((function(e){return e(be()),fetch(b+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(Ne(a.message))}))}))},fetchLeaders:function(){e((function(e){return e(ye(!0)),fetch(b+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(we(a))})).catch((function(a){return e(Oe(a.message))}))}))},postFeedback:function(a){return e(function(e){return function(a){var t=Object.assign({date:(new Date).toISOString()},e);return fetch(b+"feedback",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){alert("Thankyou for your feedback!\n"+JSON.stringify(e))})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(a))}}}))(ke)),je=(t(168),t(12)),Ce=t(27),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(je.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(je.a)({},e,{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(je.a)({},e,{comments:e.comments.concat(t)});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(je.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(je.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload,leaders:[]});default:return e}},Ie=t(94),Te=t(95),Re=t.n(Te),_e={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},qe=Object(Ce.createStore)(Object(Ce.combineReducers)(Object(je.a)({dishes:De,comments:Fe,promotions:xe,leaders:Ae},Object(A.createForms)({feedback:_e}))),Object(Ce.applyMiddleware)(Ie.a,Re.a)),Pe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(de.Provider,{store:qe},r.a.createElement(L.a,null,r.a.createElement("div",null,r.a.createElement(Se,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,a,t){e.exports=t(169)}},[[97,1,2]]]);
//# sourceMappingURL=main.53bcbd38.chunk.js.map