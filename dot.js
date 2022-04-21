var selectedRow = null

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData()
        if(selectedRow==null){
            insertNewRecord(formData);
        }else{
            updateRecord(formData);
        }
        resetForm();
    }
    
    //retrive data
    function readFormData(){
        var formData = {};
       formData["productCode"]=document.getElementById("productCode").value;
       formData["product"]=document.getElementById("product").value;
       formData["qty"]=document.getElementById("qty").value;
       formData["perPrice"]=document.getElementById("perPrice ").value;
    
       return formData();
    }
