define(["TYPO3/CMS/In2studyfinder/Service/Backend/SelectExportPropertiesService","TYPO3/CMS/In2studyfinder/Service/Backend/SelectCoursesForExportService"],function(e,t){"use strict";var r={selectedPropertiesCount:0,propertyList:[]};return r.initialize=function(){r.addEventListener()},r.addEventListener=function(){var e=document.querySelector(".js-in2studyfinder-export-courses");e.addEventListener("click",r.exportCourses)},r.exportCourses=function(){r.addSelectionToSelectedPropertiesList()},r.addSelectionToSelectedPropertiesList=function(){for(var e=document.querySelector(".js-in2studyfinder-selected-properties-list"),t=0;t<e.options.length;t++)e.options[t].selected=!0},r.initialize(),r});