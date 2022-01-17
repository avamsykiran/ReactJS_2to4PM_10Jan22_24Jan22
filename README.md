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
                                npm --version

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

ReactJS Introduction
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
Creating a react app
----------------------------------------------------------------------\

    npx create-react-app proj-name

    (or)

    npm install -g create-react-app@latest

    create-eact-app proj-name

Compile, Bundle and run the react app on developemnt server
---------------------------------------------------------------------
    cd proj-name
    npm start

JSX - Javascript extended
----------------------------------------------------------------------

    Javascript
        let userName = "Vamsy Kiran";
        let myPara = docuemnt.createElement("p");
        myPara.textContent = "Hai Hello "+ userName +", how are you?";

        let friends =["Vamsy","Vinay","Ram","Raju"];
        let frdOL = document.createElement("ol");
        friends.forEach(
            fnm => {
                let item = document.createElement("li");
                item.textContent=fnm;
                frdOL.appendChild(item);
            }
        );

    JSX
        let userName = "Vamsy Kiran";
        let myPara = <p>Hai Hello {userName}, how are you?</p> ;

        let friends =["Vamsy","Vinay","Ram","Raju"];
        let frdOL = <ol>
                        {friends.map(fnm => <li>{fnm}</li>)}
                    </ol>;

        the html elements are all expected to be lower cased.
        the react compoenets can be refered in JSX as Html Tags with the class name being tag name.
        the 'class' attribute is not allowd instead 'className' attribute is tobe used.


ReactJS - Componenets
--------------------------------------------------------

    A component is a resuable self-reliant section.
    Single Page of the SPA (index.html) is composed of one or more of thsoe components.
    And these components are interchangable when needed.

    index.html
        |- head
        |- body
            |- div
                 |- AppComponent
                        |- HeaderComponent
                        |- NavComponent
                        |- MainComponent
                                |
                                -----------------------------------------------------------------------
                                |                 |                         |                       |
                                LoginComponent  RegistrationComponent       DashboardComponent      .......
                        |- FooterComponent


    Component   =   state + props + render()

                    state is all the data the component needs to hold.
                            1. the state has to be initialized only in the constructor.
                            2. the state can not be modified directly, instead 'setState' method
                                is used to revamp (recreated and repalced) the state.
                            3. the state is alwasy monitored by the react chagne system. as an when
                                a change in the state is detected, the render() method is invoked.

                    render()    is a method that shall return one and only one HTML element, and that
                                    html element is displayed on the screen when ever the current component
                                    has to be displayed.


    1. Class based Components
    2. Function based Components
    3. High Order Components

    Class based Components
    --------------------------------------------------------------------------------
            clsss Header extends React.Component {
                constructor(){
                    this.state = {
                        //all the data needed by this component
                    };
                }

                render(){
                    //JSX code and fabricate one single HTML element

                    return htmlElement; 
                }
            }

            Event Handling
            ------------------------------------------------------------------

                assign the member method to the html event attribute.

            Form Handling
            ------------------------------------------------------------------

                <input type="number" value={this.state.n1} onChange={//setState} />        


    Function based Components
    --------------------------------------------------------------------------------

        are also called state less components.

        const Footer = (props) => {
            
            //any JSX or javascript code....

            return aSinglelHtmlElement;
        };

    props 
    ---------------------------------------------------------------------------

        props are attributes shared with the child component 
        from a parent component.

    High Order Components
    --------------------------------------------------------------------

        is a function that accepts a component as a parameter
        and modifies that component
        and returns the modfiied component.

        are used to isolate reusable/repeated operations.

    V-DOM / Virtual DOM / Shadow DOM
    --------------------------------------------------------------------

        the react view engine creates a copy of the actual DOM 
        and calls it the V-DOM.

        Any changes made to v-dom will not be displayed immediatly on the screen,
        where as any chagne made to the actula dom gets rendered on the screen immediatly.

        Each time a change of state is detected, the render method regenrate the whole
        v-dom and thats fast and easy as it has no direct visual effect. Once v-dom is
        generated, it is comapred with the actual dom and the nodes that need to be
        created/removed/modifed are identified and only those nodes are created or removed
        or changed, thus avoiding complete change on actual dom.

        





