describe("Sample text set", () => {
    let formService;

    beforeEach(() => {
        formService = new FormService();
    });

    it('Normal Email', function() {
        const a = formService.validateEmail('alexarnd99@gmail.com');
        expect(a).toBe(true);
    });

    it('Bad Email', function() {
        const a = formService.validateEmail('a@gmail.com');
        expect(a).toBe(false);
    });

    it('Normal Name', function() {
        const a = formService.validateName('alex');
        expect(a).toBe(true);
    });

    it('Bad Name', function() {
        const a = formService.validateName('a ');
        expect(a).toBe(false);
    });


    it('Normal Last Name', function() {
        const a = formService.validateLastName('Aranda Gómez');
        expect(a).toBe(true);
    });

    it('Bad Last Name', function() {
        const a = formService.validateLastName('a ');
        expect(a).toBe(false);
    });
    
    it('Normal Address', function() {
        const a = formService.validateAddress('C\ Córdoba');
        expect(a).toBe(true);
    });

    it('Bad Address', function() {
        const a = formService.validateAddress(' a');
        expect(a).toBe(false);
    });
   
    it('Normal Zip Code Spain', function() {
        const a = formService.validateZipCode('28679','es');
        expect(a).toBe(true);
    });

    it('Bad Zip Code Spain', function() {
        const a = formService.validateZipCode('areg4','es');
        expect(a).toBe(false);
    });
    it('Normal Zip Code USA', function() {
        const a = formService.validateZipCode('99786','usa');
        expect(a).toBe(true);
    });

    it('Bad Zip Code USA', function() {
        const a = formService.validateZipCode(' dret','usa');
        expect(a).toBe(false);
    });

    it('Normal Land line Spain', function() {
        const a = formService.validateLandLine('952367897','es');
        expect(a).toBe(true);
    });

    it('Bad Land line Spain', function() {
        const a = formService.validateLandLine('ejkbgyur','es');
        expect(a).toBe(false);
    });
    it('Normal Land line USA', function() {
        const a = formService.validateLandLine('5555555555','usa');
        expect(a).toBe(true);
    });

    it('Bad Land line USA', function() {
        const a = formService.validateLandLine(' dret','usa');
        expect(a).toBe(false);
    });

    it('Normal Mobile Phone Spain', function() {
        const a = formService.validateMobilePhone('678368974','es');
        expect(a).toBe(true);
    });

    it('Bad Mobile Phone Spain', function() {
        const a = formService.validateMobilePhone('eergeyur','es');
        expect(a).toBe(false);
    });
    it('Normal Mobile Phone USA', function() {
        const a = formService.validateMobilePhone('5555555555','usa');
        expect(a).toBe(true);
    });

    it('Bad Mobile Phone USA', function() {
        const a = formService.validateMobilePhone('  uhvu','usa');
        expect(a).toBe(false);
    });

    it('Normal Date birth Spain', function() {
        const a = formService.validateDateBirth('30/09/1999','es');
        expect(a).toBe(true);
    });

    it('Bad Date birth Spain', function() {
        const a = formService.validateDateBirth('40/12/1999','es');
        expect(a).toBe(false);
    });
    it('Normal Date birth USA', function() {
        const a = formService.validateDateBirth('12/01/1990','usa');
        expect(a).toBe(true);
    });

    it('Bad Date birth USA', function() {
        const a = formService.validateDateBirth('13/01/1999','usa');
        expect(a).toBe(false);
    });
});