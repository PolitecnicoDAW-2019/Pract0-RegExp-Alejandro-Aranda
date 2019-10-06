class FormView{
    Dom={
        btnSend:document.getElementById('btnSend'),
        form:document.getElementById('form'),
        inputName:document.getElementById('txtName'),
        txtLastName:document.getElementById('txtLastName'),
        txtEmail:document.getElementById('txtEmail'),
        Countries:document.getElementsByName('radCountry'),
        CountrySelected:"",
        txtAddress:document.getElementById('txtAddress'),
        SecondPartForm:document.getElementById('SecondPart'),
        txtZipCode:document.getElementById('txtZipCode'),
        txtLandLine:document.getElementById('txtLandLine'),
        txtMobilePhone:document.getElementById('txtMobilePhone'),
        txtDateBirth:document.getElementById('txtDateBirth'),
    };
   
    bindName = handler =>{ 
         this.Dom.inputName.addEventListener('keyup',handler);
    };

    bindLastName = handler =>{
        this.Dom.txtLastName.addEventListener('keyup', handler);
    };

    bindEmail = handler => {
        this.Dom.txtEmail.addEventListener('keyup',handler);
    }
    bindAddress = handler =>{
        this.Dom.txtAddress.addEventListener('keyup',handler);
    }
    bindZipCode = handler =>{
        this.Dom.txtZipCode.addEventListener('keyup',handler);
    }

    bindLandLine = handler =>{
        this.Dom.txtLandLine.addEventListener('keyup',handler);
    } 

    bindMobilePhone = handler=> {
        this.Dom.txtMobilePhone.addEventListener('keyup',handler);
    }

    bindDateBirth= handler => {
        this.Dom.txtDateBirth.addEventListener('keyup',handler)
    }

    bindCountries () {
        this.Dom.Countries.forEach(elem =>{
            elem.addEventListener('click',()=>{
                this.Dom.CountrySelected=elem.value;
                this.Dom.SecondPartForm.hidden=false;
                this.clearSecondPartInputsAndImg();
            });
        })
    }

    clearSecondPartInputsAndImg(){
        this.Dom.btnSend.disabled=true;
        Array.from( this.Dom.SecondPartForm.getElementsByTagName('input')).forEach(element =>{
            if(element.type==='text'){
                element.value="";
            }
        })
        Array.from( this.Dom.SecondPartForm.getElementsByTagName('img')).forEach(element =>{
            element.hidden=true;
        })
    }

    bindCheckInput = ()=>{
        Array.from( this.Dom.form.getElementsByTagName('input')).forEach(element =>{
            element.addEventListener('keyup',()=>{
                const TotalOfChecks = Array.from(this.Dom.form.getElementsByTagName('img')).reduce((accumulator,current)=>{
                    return (current.src.includes('green-tick') && !current.hidden)?accumulator+1: accumulator;
                },0)
                TotalOfChecks===8?this.Dom.btnSend.disabled=false:this.Dom.btnSend.disabled=true;
            })
        })
    }

}
