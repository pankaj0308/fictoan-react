import { lighten, darken } from "polished";

import { baseColors } from "./BaseColors";


export const mainColors = {
    hue      : baseColors.blue90,
    tint     : baseColors.amber,
    shade    : baseColors.grey,
    analogue : baseColors.indigo50,
    accent   : baseColors.green80,
}

export const FRDarkTheme = {
    mainColors,

    //  BASICS  ///////////////////////////////////////////////////////////////
    body : {
        bg : `${darken(0.32, baseColors.blue)}`,
    },


    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font : {
            sans  : "sans-serif",
            serif : "serif",
            mono  : "monospace",
        },

        paras : {
            size       : 1,
            color      : baseColors.indigo60,
            weight     : 400,
            lineHeight : 1.64,
        },

        headings : {
            font       : "sans-serif",
            color      : baseColors.indigo40,
            weight     : 600,
            multiplier : 1.24,
            lineHeight : 1.24
        },

        links : {
            default : {
                color : baseColors.blue90,
            },
            onHover : {
                color : baseColors.blue60
            }
        },

        selection : {
            bg   : mainColors.hue,
            text : baseColors.white
        },

        code : {
            inline : {
                bg    : baseColors.indigo,
                text  : baseColors.indigo60,
                scale : 80
            },
            block : {
                bg         : `${darken(0.16, baseColors.indigo)}`,
                text       : baseColors.indigo,
                scale      : 80,
                lineHeight : 1.8
            },
            prism : {
                tokens : {
                    tag         : baseColors.violet,
                    atrule      : baseColors.teal90,
                    attrName    : baseColors.orange,
                    attrValue   : baseColors.green80,
                    boolean     : baseColors.green80,
                    cdata       : baseColors.grey70,
                    className   : baseColors.red,
                    comment     : baseColors.grey70,
                    constant    : baseColors.green80,
                    deleted     : baseColors.slate80,
                    delimiter   : baseColors.grey90,
                    doctype     : baseColors.grey90,
                    entity      : baseColors.green80,
                    function    : baseColors.orange,
                    hexcode     : baseColors.green,
                    inserted    : baseColors.green80,
                    italic      : baseColors.green80,
                    keyword     : baseColors.orange90,
                    namespace   : baseColors.green80,
                    number      : baseColors.green80,
                    operator    : baseColors.pistachio,
                    plain       : baseColors.indigo40,
                    prolog      : baseColors.grey90,
                    property    : baseColors.red90,
                    punctuation : baseColors.grey60,
                    regex       : baseColors.green80,
                    selector    : baseColors.violet,
                    string      : baseColors.crimson60,
                    symbol      : baseColors.green80,
                    url         : baseColors.green80,
                    variable    : baseColors.orange80,
                },

                languages : {
                    css : {
                        fallback : baseColors.orange90
                    },
                    html : {
                        fallback : baseColors.grey
                    },
                    js : {
                        fallback : baseColors.violet90
                    },
                    json : {
                        fallback : baseColors.teal,
                        tokens   : {
                            string : baseColors.teal
                        }
                    }
                }
            }
        },

        kbd : {
            text : baseColors.grey,
            bg   : baseColors.grey10
        }
    },


    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg     : baseColors.white,
        border : baseColors.slate10
    },


    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel : {
        bg     : baseColors.white,
        border : baseColors.slate20,
        dismissButton : {
            bg      : baseColors.white,
            color   : baseColors.slate90,
            content : "×"
        }
    },


    //  BREADCRUMBS  ///////////////////////////////////////////////////////////
    breadcrumb : {
        wrapper : {
            bg : baseColors.white,
        },
        item : {
            text      : mainColors.shade,
            separator : baseColors.slate40,
            active    : mainColors.shade,
            inactive  : mainColors.shade
        }
    },


    //  BUTTON  ///////////////////////////////////////////////////////////////
    button : {
        fontFamily: "sans-serif",
        primary : {
            default : {
                bg           : mainColors.hue,
                border       : mainColors.hue,
                text         : baseColors.white,
                borderRadius : "4px",
            },
            onHover : {
                bg     : mainColors.hue,
                border : mainColors.hue,
                text   : baseColors.white,
            },
            isActive : {
                bg     : mainColors.hue,
                border : mainColors.hue,
                text   : baseColors.white,
            },
            isLoading : {
                spinnerBorder : baseColors.white
            }
        },
        secondary : {
            default : {
                bg           : `${lighten(0.4, mainColors.hue)}`,
                border       : mainColors.hue,
                text         : mainColors.hue,
                borderRadius : "4px",
            },
            onHover : {
                bg     : `${lighten(0.32, mainColors.hue)}`,
                border : mainColors.hue,
                text   : mainColors.hue,
            },
            isActive : {
                bg     : `${lighten(0.2, mainColors.hue)}`,
                border : mainColors.hue,
                text   : mainColors.hue,
            },
            isLoading : {
                spinnerBorder : mainColors.hue,
            }
        }
    },


    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        primary : {
            bg     : baseColors.indigo60,
            height : "1px"
        },
        secondary : {
            bg     : baseColors.indigo80,
            height : "1px"
        },
        tertiary : {
            bg     : baseColors.indigo,
            height : "1px"
        }
    },


    //  INPUT  ////////////////////////////////////////////////////////////////
    input : {
        default : {
            bg     : baseColors.white,
            border : baseColors.slate40,
            label  : mainColors.shade,
            text   : mainColors.shade
        },
        onFocus : {
            bg       : baseColors.white,
            border   : mainColors.hue,
            text     : mainColors.shade,
            helpText : mainColors.shade,
        },
        isValid : {
            bg     : baseColors.white,
            border : baseColors.green80,
            label  : mainColors.shade
        },
        isInvalid : {
            bg       : baseColors.red10,
            border   : baseColors.red80,
            label    : baseColors.red,
            helpText : baseColors.red,
        },
        isReadOnly : {
            bg     : baseColors.grey50,
            border : baseColors.grey50,
            label  : mainColors.shade
        },
        required : {
            text : baseColors.red
        },
        icons : {
            default : {
                fill : baseColors.slate30,
            },
            onFocus : {
                fill : mainColors.hue,
            },
            isValid : {
                bg     : baseColors.grey50,
                border : baseColors.red30,
            }
        },
        select : {
            chevron : mainColors.hue
        },
        radioButton : {
            default : {
            }
        }
    },


    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        isCollapsed : {
            label : {
                text : baseColors.white,
                bg   : `${darken(0.04, baseColors.indigo)}`
            }
        },

        header : {
            bg           : `${darken(0.24, baseColors.indigo)}`,
            borderBottom : `${darken(0.24, baseColors.indigo)}`
        },

        body : {
            bg : `${darken(0.24, baseColors.indigo)}`,
        },

        icons : {
            stroked : {
                thickness : 2,
                default : {
                    line : baseColors.slate40,
                },
                onHover : {
                    line : baseColors.slate80,
                },
                isActive : {
                    line : baseColors.slate,
                }
            },
            filled : {
                default : {
                    bg : baseColors.slate40,
                },
                onHover : {
                    bg : baseColors.slate80,
                },
                isActive : {
                    bg : baseColors.slate,
                }
            }
        },

        links : {
            default : {
                bg     : `${darken(0.24, baseColors.indigo)}`,
                text   : baseColors.indigo40,
                scale  : 100,
                weight : 600,
            },
            onHover : {
                bg   : `${darken(0.16, baseColors.indigo)}`,
                text : baseColors.indigo60,
            },
            isSelected : {
                bg     : baseColors.indigo,
                border : baseColors.indigo,
                text   : baseColors.indigo,
            },
            hasAlert : {
                bg : baseColors.red70
            },
        },

        subLinks : {
            header : {
                weight : 600,
            },
            default: {
                bg     : `${darken(0.16, baseColors.indigo)}`,
                text   : `${lighten(0.24, baseColors.indigo)}`,
                weight : 400,
                scale  : 92,
            },
            onHover : {
                bg   : baseColors.slate10,
                text : `${darken(0.24, baseColors.indigo)}`
            },
            chevron : {
                border : baseColors.slate40
            }
        },



        footer : {
            bg        : `${darken(0.24, baseColors.indigo)}`,
            borderTop : `${darken(0.24, baseColors.indigo)}`
        }
    },


    //  NOTIFICATION  /////////////////////////////////////////////////////////
    notification : {
        default : {
            bg   : baseColors.slate10,
            text : mainColors.shade
        },
        types: {
            info : {
                border : baseColors.blue60,
            },
            warning : {
                border : baseColors.amber,
            },
            error : {
                border : baseColors.red90,
            },
            success : {
                border : baseColors.green90,
            }
        }
    },


    //  TABLE  ////////////////////////////////////////////////////////////////
    table : {
        bg      : `${darken(0.16, baseColors.indigo)}`,
        text    : baseColors.indigo60,
        border  : `${darken(0.32, baseColors.indigo)}`,
        striped : {
            header : {
                bg : `${darken(0.32, baseColors.indigo)}`,
            },
            cell : {
                bg : baseColors.slate20,
            }
        },
        onHover : {
            bg   : baseColors.amber20,
            text : baseColors.indigo60
        }
    },


    //  PROGRESS BAR  /////////////////////////////////////////////////////////
    progressBar : {
        bg     : baseColors.slate20,
        fill   : mainColors.hue,
        label  : mainColors.shade,
        value  : `${lighten(0.24, mainColors.shade)}`,
    }
}
