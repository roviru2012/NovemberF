import * as  constants from './constants';
import config from './config';
import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `${config.baseUrl}/index.html`;


test('Changeing page in English Language', async t => {
  
    await t
         .click(Selector(constants.dropdown))
         .click(Selector(constants.english).withText(constants.test))
    //Asserting whethere login is written in english
         .expect(Selector(constants.title).textContent).eql('Log in');
 console.log('Test passed--> page switched to english language');
});

test('Error Msg Display during Sign in', async t => {

console.log('test for new test 2');

    await t
         .click(Selector(constants.btn).withText(constants.btnTitle))

     //Asserting on the basis on displayed label
         .expect(Selector(constants.errorclass).find(constants.errormsg).parent().textContent).eql(' Kundenummer mangler ');
  	 
         
});


test('Click on hyperlink ', async t => {
    
console.log('click on hyperlin');
      await t
           .click(Selector(constants.linksignUp))

   //Asserting on the basis of displayed name
           .expect(Selector(constants.appTitle).textContent).eql('Opret Gratis Konto');


});

	

test('login into demo account', async t => {
    

    //Here asserting is done on the basis of element visibility.This is done  to show that there are different ways to assert
    await t
          .typeText(Selector(constants.loginClass).find(constants.customernoInput).parent(), '208100063')
          .typeText(Selector(constants.loginClass).find(constants.emailInput).parent(), 'oc@novemberfirst.com')
          .typeText(Selector(constants.loginClass).find(constants.passwordInput).parent(), 'Test1234')
          .click(Selector(constants.btn).withText(constants.btnTitle))
          .wait(5000)
          .expect(Selector(constants.loginClass , {visibilityCheck: false}).exists).ok();


console.log('is tested');
});
