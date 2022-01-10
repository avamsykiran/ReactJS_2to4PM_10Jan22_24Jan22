ReactJs Pre-Required Skills
-------------------------------------------------------

    HTML 5
        All basic html elements and attributes
        Form Eleemnts and Validation Attributes
        Web Storage
        Web Workers
        GEO Location

    CSS 3
        CSS Properties  - borders, paddings, margin, box model, images and backgrounds
        Selectors
        Responsive Design

    Bootstrap 5     (Optional)

    Javascript (ECMAScript 6)
        Basic JS Obejcts
            Window
            Document
            String
            Math
            Error
        Arrays and Array Prototype Functions
        Functions
            Simple Normal Fucntions
            Pure Function
            Arrow Function
            IIFE
            Call Back
            Closures
        Spread Operator
        Rest Operator
        Optional Parameter
        async and await keywords
        this and static keywords
        Promise
        Template Leterals
        Destructured Assignemnt
        ES6 Modules

Lab Setup
--------------------------------------------------------
    VSCode      IDE             https://code.visualstudio.com/download
    NodeJS      DevPlatform     https://nodejs.org/en/

                                node --version

    create-react-app    dev tool


NodeJS
--------------------------------------------------------

    is a javascript execution environment or javascript runtime.
    It allows javascript to execute wihtout a browser.
    Meaning javascript server side execuitions are housed in NodeJS.

    Developing an App...
        Compose the source code             IDE
        Dependency Management               node package manager (npm)
        link, build                         npm, react-scripts
        Testing                             Jest
        Deploy it on a server               

    These tools are going to run in NodeJS of developer machine.

ReactJS
--------------------------------------------------------
    
    is a javascript based SPA framework

    Single Page Applciation is a UI/UX app that has only one
    html page (index.html) along with a lot of Javascript .

    And the whole SPA runs on the client.

    Dynamic Web Apps

        WebServer                                            Client (Browser)

            Controller + View     <----------REQ1-------------- by typing the web url
            (Servlet/JSP)       ----Generates HTML - RESP-------> receives the html and loads the DOM 
            (Spring Boot)
            (ASP.NET)             <---------REQ2--------------  form submittion / clicking a link ...
            (Python)            ----Generates HTML - RESP-------> receives the html and 
                                                                    unload teh previous page and 
                                                                    loads new html content in the DOM 

    Single Page App

        WebServer                                            Client (Browser)

            SPA Bundle          <----------REQ1-------------- by typing the web url
            (index.html +       ----SPA Bundle - RESP-------> receives the whole SPA Bundle
            Javascript code +                                   load the index.html onb the DOM
            CSS)                                               and execute the associated javascript.
            
                                                              form submittion / clicking a link ...
                                                                are all handled by the javascript
                                                                living on the client.

                                                                this javascript can generate html
                                                                on the client and replace the 
                                                                content in index.html with the
                                                                generated content.

        BackEnd Server (WebServices)

            REST api        <----reqeusted-----------------     the javascript can req for 
                                                                    data retrival or data storage
                                                                    asynchrnonously from time to time.

                            ----------DATA (xml/JSON) RESP ---> recevied by the javascript and can 
                                                                    display on the index.html