# TEST DATA CREATOR FRONT END

## MUSE FOR CREATING THIS APPLICATION
<p>
As a professional working as a software engineer,  I frequently have to develop my own tools to assist me in doing my job more efficiently. This is often because of security issues with free tools that are available or because of the significant cost to the company to buy tools.  In addition, I often find myself having to test the functionality of systems or applications. One big issue is that I do not have a place to put testing notes I created for my testing of systems or applications, so that I can look back at it later to gather more information and analyze it after the fact. I would also like to use the testing notes from one application for another application as well.
</p>

## WEB APPLICATION
### JS FRAMEWORK USED
* React
* LINK TO WEBSITE: https://reactjs.org/
### CSS FRAMEWORK USED
* Bootstrap
* LINK TO WEBSITE: https://getbootstrap.com/
### PAGE LAYOUTS

* PAGE: GREETINGS AND LOGIN

| SECTION       | DISP TYPE | LENGTH | REQUIRED |
|---------------|-----------|--------|----------|  
| BANNER        | TEXT/IMG  | N/A    | READONLY |
| MAIN IMAGE    | IMG       | N/A    | N/A      |
| LOGIN INPUT   | TEXT INPUT| 255    | YES      |
| PASSWORD INPUT| TEXT INPUT| 255    | YES      |
| LOGIN BUTTON  | BUTTON    | N/A    | YES      |

* PAGE SECTION A: TEST INQUEST PROJECTS

| SECTION       | DISP TYPE | LENGTH | REQUIRED |
|---------------|-----------|--------|----------|  
| BANNER        | TEXT/IMG  | N/A    | READONLY |
| HANDLE NAME   | TEXT      | N/A    | READONLY |
| CREATE BUTTON | BUTTON    | N/A    | YES      |
| EDIT BUTTON   | BUTTON    | N/A    | YES      |
| DELETE BUTTON | BUTTON    | N/A    | YES      |
| INQUEST NAME  | TEXT INPUT| 255    | YES      |
| INQUEST DESC  | TEXT INPUT| 255    | NO       |
| INQUEST NOTES | TEXT INPUT| 255    | NO       |

* PAGE SECTION B: TEST ARTIFACT LOGS

| SECTION       | DISP TYPE | LENGTH | REQUIRED |
|---------------|-----------|--------|----------|
| BANNER        | TEXT/IMG  | N/A    | READONLY |
| ARTIFACT VIEW | TEXT AREA | N/A    | YES      |
| ARTIFACT NAME | TEXT INPUT| 255    | YES      |
| ARTIFACT TYPE | TEXT INPUT| 255    | YES      |
| ARTIFACT VALUE| TEXT INPUT| 255    | NO       |
| ARTIFACT CODE | TEXT INPUT| 255    | YES      |

## PROJECT STATUS LOGS
* CREATED READ ME FILE (07/05/2022)
* UPDATED READ ME FILE (07/17/2022)

## THINGS THAT NEED WORK
* Authentication still needs to be made secure.  It is not real authentication yet!
* Artifact audit display needs to be fully implemented.
* Data going back and forth from the DB needs to be displayed upon each CRUD action.
* Messages to the user need to be better organized.

