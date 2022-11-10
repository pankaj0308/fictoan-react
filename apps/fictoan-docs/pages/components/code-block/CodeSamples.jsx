//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleCodeBlock = `<CodeBlock source=\{sampleCode} language="jsx" />`;

//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleCodeBlockTheme =`code : {
    inline : {
        bg    : defaultColours.blue10,
        text  : defaultColours.blue90,
        scale : 80
    },
    block  : {
        bg           : lighten0.02, defaultColours.slate10,
        text         : defaultColours.blue70,
        scale        : 80,
        lineHeight   : 1.8,
        borderRadius : globalVariables.borderRadius 
    },
    prism  : {
        tokens : {
            tag         : defaultColours.violet,
            atrule      : defaultColours.teal90,
            attrName    : defaultColours.orange,
            attrValue   : defaultColours.green80,
            boolean     : defaultColours.green80,
            cdata       : defaultColours.grey70,
            className   : defaultColours.red,
            comment     : defaultColours.grey70,
            constant    : defaultColours.green80,
            deleted     : defaultColours.slate80,
            delimiter   : defaultColours.grey90,
            doctype     : defaultColours.grey90,
            entity      : defaultColours.green80,
            function    : defaultColours.orange,
            hexcode     : defaultColours.green,
            inserted    : defaultColours.green80,
            italic      : defaultColours.green80,
            keyword     : defaultColours.orange90,
            namespace   : defaultColours.green80,
            number      : defaultColours.green80,
            operator    : defaultColours.pistachio,
            plain       : defaultColours.grey,
            prolog      : defaultColours.grey90,
            property    : defaultColours.red90,
            punctuation : defaultColours.grey60,
            regex       : defaultColours.green80,
            selector    : defaultColours.violet,
            string      : defaultColours.crimson60,
            symbol      : defaultColours.green80,
            url         : defaultColours.green80,
            variable    : defaultColours.orange8)
        },

        languages : {
            css  : {
                fallback : defaultColours.orange9)
            },
            html : {
                fallback : defaultColours.gre)
            },
            js   : {
                fallback : defaultColours.violet9)
            },
            json : {
                fallback : defaultColours.teal,
                tokens   : {
                    string : defaultColours.tea)
                }
            }
        }
    }
},`