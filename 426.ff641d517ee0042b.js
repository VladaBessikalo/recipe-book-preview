"use strict";(self.webpackChunkcourse_project=self.webpackChunkcourse_project||[]).push([[426],{7426:(y,l,p)=>{p.r(l),p.d(l,{ShoppingListModule:()=>M});var t=p(4946),u=p(600),a=p(2330),g=p(6814);class m{constructor(s,i){this.name=s,this.amount=i}}var c=p(95);const h=["form"];function f(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.onDelete())}),t._uU(1,"Delete"),t.qZA()}}let v=(()=>{var e;class s{constructor(n){this.slService=n,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(n=>{this.editedItemIndex=n,this.editMode=!0,this.editedItem=this.slService.getIngredient(n),this.shoppingListForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(n){const o=n.value,r=new m(o.name,o.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,r):this.slService.addIngredient(r),this.editMode=!1,n.reset()}onDelete(){this.onClear(),this.slService.deleteIngredient(this.editedItemIndex)}onClear(){this.shoppingListForm.reset(),this.editMode=!1}ngOnDestroy(){this.subscription.unsubscribe()}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(u._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-edit"]],viewQuery:function(n,o){if(1&n&&t.Gf(h,5),2&n){let r;t.iGM(r=t.CRH())&&(o.shoppingListForm=r.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["form","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0+9]*$",1,"form-control"],[1,"col-xs-12","space-right"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,o){if(1&n){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(r);const Z=t.MAs(3);return t.KtG(o.onSubmit(Z))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",10)(15,"button",11),t._uU(16),t.qZA(),t.YNc(17,f,2,0,"button",12),t.TgZ(18,"button",13),t.NdJ("click",function(){return o.onClear()}),t._uU(19,"Clear"),t.qZA()()()()()()}if(2&n){const r=t.MAs(3);t.xp6(15),t.Q6J("disabled",!r.valid),t.xp6(1),t.hij(" ",o.editMode?"Update":"Add"," "),t.xp6(1),t.Q6J("ngIf",o.editMode)}},dependencies:[c._Y,c.Fj,c.wV,c.JJ,c.JL,c.Q7,c.c5,c.On,c.F,g.O5],styles:[".space-right[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}"]}),s})();function S(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const r=t.CHM(i).index,d=t.oxw();return t.KtG(d.onEditItem(r))}),t._uU(1),t.qZA()}if(2&e){const i=s.$implicit;t.xp6(1),t.AsE(" ",i.name," (",i.amount,") ")}}let b=(()=>{var e;class s{constructor(n,o){this.shoppingListService=n,this.logginService=o,this.ingredients=[]}ngOnInit(){this.ingredients=this.shoppingListService.getIngridients(),this.subscription=this.shoppingListService.ingredientsChanged.subscribe(n=>{this.ingredients=n}),this.logginService.printLog("Hello from Shopping list Component")}onEditItem(n){this.shoppingListService.startedEditing.next(n)}ngOnDestroy(){this.subscription.unsubscribe()}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(u._),t.Y36(a.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,S,2,2,"a",3),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",o.ingredients))},dependencies:[g.sg,v]}),s})();var C=p(167),_=p(6208),I=p(7402);let M=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.u5,C.Bz.forChild([{path:"",component:b,canActivate:[I.a]}]),_.m]}),s})()}}]);