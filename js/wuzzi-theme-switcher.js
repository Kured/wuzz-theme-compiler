// Theme Changer
window._toggleTheme = function(themeMode) {    

    var $elementThemeSetting, $elementsThemeL, $elementsThemeD;
   
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
