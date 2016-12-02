// Copyright (c) 2016, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on("Packing Details", "validate", function(frm){ 

    var total_kg = 0;
    var inv_count   = 0;
	frm.series=""
	name=frm.doc.estatename+":"+frm.doc.dop
	frm.set_value("series",name)
	frm.set_value("no_of_invoice",frm.doc.invoices.length)

	//Child table modification script
	for(var i in frm.doc.invoices){
	  if(frm.doc.invoices[i].bag_from !="" && frm.doc.invoices[i].bag_to != "" && frm.doc.invoices[i].bag_to >= frm.doc.invoices[i].bag_from){
   		var number     = parseInt(frm.doc.invoices[i].bag_to - frm.doc.invoices[i].bag_from) + 1;
	    frm.doc.invoices[i].nos   = number;
	   }
	   else {
	   	msgprint("Bag Seraial To must be greater than equals to Bag Serial from");
	    validated = false;

	   }

	   if(frm.doc.invoices[i].nett_wt !="" && frm.doc.invoices[i].nos != "") {
	    var number     = frm.doc.invoices[i].nett_wt * frm.doc.invoices[i].nos;
	    frm.doc.invoices[i].kgs    = number;
	   }

	  if(parseInt(frm.doc.invoices[i].o1  + frm.doc.invoices[i].b1 + frm.doc.invoices[i].p1) < 100) {
	      	msgprint("It Should Be 100 % ");
	        validated = false;
	   }
       //calculate total kgs
	   total_kg +=  frm.doc.invoices[i].kgs;
  
	}

	frm.set_value("totkgs",total_kg);  
});

cur_frm.fields_dict['invoices'].grid.get_field('grade').get_query = function(doc, cdt, cdn) {
	var d = locals[cdt][cdn]
	return {
		filters: [
			['Grade Master', 'teatype', '=', d.teatype]
		]
	}

}
cur_frm.fields_dict['invoices'].grid.get_field('invpr').get_query = function(doc, cdt, cdn) {
	var d = locals[cdt][cdn]
	return {
		filters: [
			['Invoice Description', 'teatype', '=', d.teatype]
		]
	}

}

cur_frm.fields_dict['invoices'].grid.get_field('tare_wt').get_query = function(doc, cdt, cdn) {
	var d = locals[cdt][cdn]
	return {
		filters: [
			['Bag Size', 'bagsize', '=', d.packing_det]
		]
	}

}
