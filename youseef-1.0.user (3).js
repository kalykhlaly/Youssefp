// ==UserScript==
// @name         youseef
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Autofill with fixed gender & nationality selection
// @author       YOUSEEF-01012675019
// @match        https://visa.vfsglobal.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // بيانات العملاء
  const your_auto_fill_data = [
    {
      Fname: "SEIF",
      Lname: "MAHMOUD",
      Gender: "Male",
      Date_Of_Birth: "08/04/2024",
      Current_Nationality: "EGYPT",
      Passport_Number: "A37524980",
      Passport_Expiry_Date: "28/04/2031",
      Contact_Code: "20",
      Contact_number: "1012675019",
      Email: "uuftumn@telegmail.com"
    },
    {
      Fname: "WALEED",
      Lname: "MAHMOUD",
      Gender: "Male",
      Date_Of_Birth: "23/12/1997",
      Current_Nationality: "EGYPT",
      Passport_Number: "A25581081",
      Passport_Expiry_Date: "14/09/2026",
      Contact_Code: "20",
      Contact_number: "1094823795",
      Email: "agsjtxoz@telegmail.com"
    },
    {
      Fname: "SALMA",
      Lname: "MOHAMED",
      Gender: "Female",
      Date_Of_Birth: "29/12/1997",
      Current_Nationality: "EGYPT",
      Passport_Number: "A25017412",
      Passport_Expiry_Date: "18/05/2026",
      Contact_Code: "20",
      Contact_number: "1094823795",
      Email: "agsjtxoz@telegmail.com"
},
    {
      Fname: "MOHAMED",
      Lname: "IBRAHIM",
      Gender: "Male",
      Date_Of_Birth: "22/03/2014",
      Current_Nationality: "EGYPT",
      Passport_Number: "A34879652",
      Passport_Expiry_Date: "18/08/2030",
      Contact_Code: "20",
      Contact_number: "1094823795",
      Email:"hanaahamouda387@gmail.com"

},
    {
      Fname: "NABILA",
      Lname: "MOHAMED",
      Gender: "Female",
      Date_Of_Birth: "02/05/1973",
      Current_Nationality: "EGYPT",
      Passport_Number: "A35861270",
      Passport_Expiry_Date: "19/11/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
},
    {
      Fname: "HANAA",
      Lname: "MORCOS",
      Gender: "Female",
      Date_Of_Birth: "13/06/1976",
      Current_Nationality: "EGYPT",
      Passport_Number: "A41664192",
      Passport_Expiry_Date: "01/06/2032",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
  },
    {
      Fname: "EHAB",
      Lname: "BAKHOUM",
      Gender: "Male",
      Date_Of_Birth: "27/04/1971",
      Current_Nationality: "EGYPT",
      Passport_Number: "A30250245",
      Passport_Expiry_Date: "04/04/2029",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
},
    {
      Fname: "AHMED",
      Lname: "TAHA",
      Gender: "Male",
      Date_Of_Birth: "11/11/1997",
      Current_Nationality: "EGYPT",
      Passport_Number: "A33394350",
      Passport_Expiry_Date: "08/03/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
},
    {
      Fname: "dalia",
      Lname: "elgebaly",
      Gender: "Male",
      Date_Of_Birth: "07/07/1989",
      Current_Nationality: "EGYPT",
      Passport_Number: "a41950948",
      Passport_Expiry_Date: "30/06/2032",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email:"uuftumn@telegmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "TEST@gmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email:"uuftumn@telegmail.com"
},
    {
      Fname: "TEST",
      Lname: "TEST",
      Gender: "Male",
      Date_Of_Birth: "01/01/2000",
      Current_Nationality: "EGYPT",
      Passport_Number: "A111111111",
      Passport_Expiry_Date: "01/01/2030",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
},
    {
      Fname: "MOHAMED",
      Lname: "ABDULHAFIZ",
      Gender: "Male",
      Date_Of_Birth: "14/05/1963",
      Current_Nationality: "EGYPT",
      Passport_Number: "A41957495",
      Passport_Expiry_Date: "30/06/2032",
      Contact_Code: "20",
      Contact_number: "11111111111",
      Email: "uuftumn@telegmail.com"
  }
  ];

  // دالة اختيار الجندر
  function selectGender(genderValue) {
    document.querySelectorAll('[id*="mat-select-value"]')[0].click();
    let interval = setInterval(() => {
      const options = document.querySelectorAll('mat-option .mdc-list-item__primary-text');
      for (let opt of options) {
        if (opt.innerText.trim().toLowerCase() === genderValue.trim().toLowerCase()) {
          opt.click();
          clearInterval(interval);
          console.log('✅ Gender selected:', genderValue);
          break;
        }
      }
    }, 200);
  }

  // دالة اختيار الجنسية (ثابتة على EGYPT)
  function selectFixedNationality() {
    document.querySelectorAll('[id*="mat-select-value"]')[1].click();
    let interval = setInterval(() => {
      const options = document.querySelectorAll('mat-option .mdc-list-item__primary-text');
      for (let opt of options) {
        if (opt.innerText.trim().toUpperCase() === 'EGYPT') {
          opt.click();
          clearInterval(interval);
          console.log('✅ Nationality selected: EGYPT');
          break;
        }
      }
    }, 200);
  }

  // واجهة اختيار العميل
  const waitForTargetPage = setInterval(() => {
    if (document.querySelectorAll('[placeholder="Enter your first name"]').length > 0) {
      clearInterval(waitForTargetPage);

      const selector = document.createElement('select');
      selector.style = 'position: fixed; top: 10px; right: 10px; z-index: 99999; background: chartreuse; padding: 5px;';
      selector.innerHTML = `<option disabled selected>✅ برجاء اختيار العميل لإتمام العملية بنجاح ♥👌</option>`;

      your_auto_fill_data.forEach((person, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = person.Fname + ' ' + person.Lname;
        selector.appendChild(option);
      });

      document.body.appendChild(selector);

      selector.addEventListener('change', () => {
        const selectedData = your_auto_fill_data[selector.value];
        console.log('✅ Injecting data for:', selectedData);

        document.querySelector('[placeholder="Enter your first name"]').value = selectedData.Fname;
        document.querySelector('[placeholder="Please enter last name."]').value = selectedData.Lname;
        document.querySelector('[placeholder="Enter passport number"]').value = selectedData.Passport_Number;
        document.querySelector('[placeholder="44"]').value = selectedData.Contact_Code;
        document.querySelector('[placeholder="012345648382"]').value = selectedData.Contact_number;
        document.querySelector('[placeholder="Enter Email Address"]').value = selectedData.Email;
        document.querySelector('#dateOfBirth').value = selectedData.Date_Of_Birth;
        document.querySelector('#passportExpirtyDate').value = selectedData.Passport_Expiry_Date;

        // dispatch input events
        document.querySelector('[placeholder="Enter your first name"]').dispatchEvent(new Event('input'));
        document.querySelector('[placeholder="Please enter last name."]').dispatchEvent(new Event('input'));
        document.querySelector('[placeholder="Enter passport number"]').dispatchEvent(new Event('input'));
        document.querySelector('[placeholder="44"]').dispatchEvent(new Event('input'));
        document.querySelector('[placeholder="012345648382"]').dispatchEvent(new Event('input'));
        document.querySelector('[placeholder="Enter Email Address"]').dispatchEvent(new Event('input'));
        document.querySelector('#dateOfBirth').dispatchEvent(new Event('input'));
        document.querySelector('#passportExpirtyDate').dispatchEvent(new Event('input'));

        // اختيار النوع والجنسية
        selectGender(selectedData.Gender);
        setTimeout(() => selectFixedNationality(), 500);
      });
    }
  }, 500);
})();