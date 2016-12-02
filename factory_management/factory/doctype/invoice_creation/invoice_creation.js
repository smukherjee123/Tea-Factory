// Copyright (c) 2016, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Invoice Creation', {
	refresh: function(frm) {

	}
});
/*
frappe.ui.form.on("Invoice Creation", "validate", function(frm){ 
  if(frm.doc.bag_from !="" && frm.doc.bag_to != "" && frm.doc.bag_to >= frm.doc.bag_from){
    var number     = parseInt(frm.doc.bag_to - frm.doc.bag_from) + 1;
    frm.doc.nos     = number;
   }
   else {
   	msgprint("Bag Seraial To must be greater than equals to Bag Serial from");
    validated = false;

   }

   if(frm.doc.nett_wt !="" && frm.doc.nos != "") {
    var number     = frm.doc.nett_wt * frm.doc.nos;
    frm.doc.kgs    = number;
   }

  if(parseInt(frm.doc.o1  + frm.doc.b1 + frm.doc.p1) < 100) {
      	msgprint("It Should Be 100 % ");
    validated = false;
   } 
  
});

cur_frm.fields_dict['grade'].get_query = function(doc) {
return{
filters:[
['teatype', '=', doc.teatype]
]
}}

cur_frm.fields_dict['invpr'].get_query = function(doc) {
return{
filters:[
['teatype', '=', doc.teatype]
]
}}

cur_frm.fields_dict['tare_wt'].get_query = function(doc) {
return{
filters:[
['bagsize', '=', doc.packing_det]
]
}}
*/