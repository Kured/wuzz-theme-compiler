// Theme Changer
window._toggleTheme = function(themeMode) {    

    var $elementThemeSetting, $elementsThemeL, $elementsThemeD, $elementsThemeLs, $elementsThemeDs;
   
   // check theme not already set to mode
   $elementThemeSetting = document.getElementById("themeSetting");
   if (themeMode && $elementThemeSetting.className === themeMode) return;
   
   // toggle theme
   $elementsThemeL = document.querySelectorAll('.bg-light');
   $elementsThemeD = document.querySelectorAll('.bg-dark');

   // Light to Dark
   if ($elementsThemeL) {
       
       for (let i=0; i<$elementsThemeL.length; i++) {
           let element = $elementsThemeL[i];

           element.classList.remove("bg-light");
           element.classList.add("bg-dark");
       }     
   }   
   // Dark to Light
   if ($elementsThemeD) {
       for (let i=0; i<$elementsThemeD.length; i++) {
           let element = $elementsThemeD[i];
           element.classList.remove("bg-dark");
           element.classList.add("bg-light");
       }     
   }

   // toggle theme secondary (s)
   $elementsThemeLs = document.querySelectorAll('.bg-lights');
   $elementsThemeDs = document.querySelectorAll('.bg-darks');

   // Light to Dark secondary
   if ($elementsThemeLs) {
       
       for (let i=0; i<$elementsThemeLs.length; i++) {
           let element = $elementsThemeLs[i];

           element.classList.remove("bg-lights");
           element.classList.add("bg-darks");
       }     
   }   
   // Dark to Light secondary
   if ($elementsThemeDs) {
       for (let i=0; i<$elementsThemeDs.length; i++) {
           let element = $elementsThemeDs[i];
           element.classList.remove("bg-darks");
           element.classList.add("bg-lights");
       }     
   }
   
   // toggle theme text
   $elementsThemeTextL = document.querySelectorAll('.text-light');
   $elementsThemeTextD = document.querySelectorAll('.text-dark');

   // Light to Dark
   if ($elementsThemeTextL) {
       
       for (let i=0; i<$elementsThemeTextL.length; i++) {
           let element = $elementsThemeTextL[i];

           element.classList.remove("text-light");
           element.classList.add("text-dark");
       }     
   }   
   // Dark to Light
   if ($elementsThemeTextD) {
       for (let i=0; i<$elementsThemeTextD.length; i++) {
           let element = $elementsThemeTextD[i];
           element.classList.remove("text-dark");
           element.classList.add("text-light");
       }     
   } 
   
   // toggle theme text secondary (s)
   $elementsThemeTextLs = document.querySelectorAll('.text-lights');
   $elementsThemeTextDs = document.querySelectorAll('.text-darks');

   // Light to Dark secondary
   if ($elementsThemeTextLs) {
       
       for (let i=0; i<$elementsThemeTextLs.length; i++) {
           let element = $elementsThemeTextLs[i];

           element.classList.remove("text-lights");
           element.classList.add("text-darks");
       }     
   }   
   // Dark to Light secondary
   if ($elementsThemeTextDs) {
       for (let i=0; i<$elementsThemeTextDs.length; i++) {
           let element = $elementsThemeTextDs[i];
           element.classList.remove("text-darks");
           element.classList.add("text-lights");
       }     
   }
    
    // toggle theme text secondary (s)
   $elementsThemeBtnLs = document.querySelectorAll('.btn-lights');
   $elementsThemeBtnDs = document.querySelectorAll('.btn-darks');

   // Light to Dark secondary
   if ($elementsThemeBtnLs) {
       
       for (let i=0; i<$elementsThemeBtnLs.length; i++) {
           let element = $elementsThemeBtnLs[i];

           element.classList.remove("btn-lights");
           element.classList.add("btn-darks");
       }     
   }   
   // Dark to Light secondary
   if ($elementsThemeBtnDs) {
       for (let i=0; i<$elementsThemeBtnDs.length; i++) {
           let element = $elementsThemeBtnDs[i];
           element.classList.remove("btn-darks");
           element.classList.add("btn-lights");
       }     
   }
   // Styles update
   if ($elementThemeSetting.className === 'wz-light') {
       document.documentElement.style.setProperty('--main-ui', '#0A0C12');
       document.documentElement.style.setProperty('--main-ui-accent', '#1D2131');
       document.documentElement.style.setProperty('--main-ui-invert', 'white');
       document.documentElement.style.setProperty('--main-text-invert', 'black'); 
       document.documentElement.style.setProperty('--main-text', 'white');   
   }
   else {
       document.documentElement.style.setProperty('--main-ui', 'white');
       document.documentElement.style.setProperty('--main-ui-accent', '#F0F0F5');
       document.documentElement.style.setProperty('--main-ui-invert', '#0A0C12');   
       document.documentElement.style.setProperty('--main-text-invert', 'white'); 
       document.documentElement.style.setProperty('--main-text', 'black');   
   }
};
