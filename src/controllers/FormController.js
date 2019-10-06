class FormController{

    constructor(view, service){
        this.view=view;
        this.service=service;   
        this.view.bindName(this.handleValidateName)
        this.view.bindLastName(this.handleValidateLastNames)
        this.view.bindEmail(this.handleValidateEmail);
        this.view.bindAddress(this.handleValidateAddress);
        this.view.bindCountries()
        this.view.bindZipCode(this.handleValidateZipCode);
        this.view.bindLandLine(this.handleValidateLandLine);
        this.view.bindMobilePhone(this.handleValidateMobilePhone);
        this.view.bindDateBirth(this.handleValidateDateBirth)
        this.view.bindCheckInput();
    }
    
    handleValidateName = () =>{
        let status=this.service.validatename(this.view.Dom.inputName.value);
        this.ChangeStatus(this.view.Dom.inputName, status);
    }
    handleValidateLastNames = ()=>{
        let status=this.service.validateLastName(this.view.Dom.txtLastName.value);
        this.ChangeStatus(this.view.Dom.txtLastName, status);
    }

    handleValidateEmail = ()=>{
        let status=this.service.validateEmail(this.view.Dom.txtEmail.value);
        this.ChangeStatus(this.view.Dom.txtEmail, status);
    }

    handleValidateAddress = ()=>{
        let status=this.service.validateAddress(this.view.Dom.txtAddress.value,this.view.Dom.CountrySelected);
        this.ChangeStatus(this.view.Dom.txtAddress, status);
    }

    handleValidateZipCode = ()=>{
        let status=this.service.validateZipCode(this.view.Dom.txtZipCode.value,this.view.Dom.CountrySelected);
        this.ChangeStatus(this.view.Dom.txtZipCode, status);
    }

    handleValidateLandLine = ()=>{
        let status=this.service.validateLandLine(this.view.Dom.txtLandLine.value,this.view.Dom.CountrySelected);
        this.ChangeStatus(this.view.Dom.txtLandLine, status);
    }

    handleValidateMobilePhone = ()=>{
        let status=this.service.validateMobilePhone(this.view.Dom.txtMobilePhone.value,this.view.Dom.CountrySelected);
        this.ChangeStatus(this.view.Dom.txtMobilePhone, status);
    }

    handleValidateDateBirth = ()=>{
        let status=this.service.validateDateBirth(this.view.Dom.txtDateBirth.value,this.view.Dom.CountrySelected);
        this.ChangeStatus(this.view.Dom.txtDateBirth, status);
    }
    ChangeStatus(input, status){
        const greentick= input.nextElementSibling
        if(status){
            greentick.hidden=false;
            greentick.nextElementSibling.hidden=true;
        }else{
            greentick.hidden=true;
            greentick.nextElementSibling.hidden=false;
        }
    }
    
}