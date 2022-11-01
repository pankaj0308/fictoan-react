//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleSidebar = `<SidebarWrapper>
    <SidebarHeader isSticky>    // All elements for Sidebar header
        <Logo />
    </SidebarHeader>

    <SidebarItem>   //  All links and icons go inside
        <SidebarItemIcon iconType="stroked">
        <Icon />
        </SidebarItemIcon>

        <SidebarItemText weight="400" linkText="Home" />
    </SidebarItem>

    <SidebarFooter> // All elements for Sidebar footer
        <SidebarItem>
            <SidebarItemIcon iconType="stroked">
                <ThemeIcon />
            </SidebarItemIcon>
        </SidebarItem>
    </SidebarFooter>
</SidebarWrapper>
`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleSidebarStructure = `<SidebarWrapper>
    <SidebarHeader></SidebarHeader> // Header

    <SidebarItem> // All links go inside
        <SidebarItemIcon></SidebarItemIcon>
        
        <SidebarItemText linkText="" />
    </SidebarItem> 

    <SidebarFooter></SidebarFooter> // Footer
</SidebarWrapper>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleSidebarHeader = `<SidebarWrapper>
    <SidebarHeader isSticky></SidebarHeader>
</SidebarWrapper>`;


//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleSidebarItem = `<SidebarWrapper>
    <SidebarItem>
    </SidebarItem>
</SidebarWrapper>`;


//  Code sample 05 ////////////////////////////////////////////////////////////
export const sampleSidebarItemText = `<SidebarItem>
    <SidebarItemText linkText="" />
</SidebarItem>`;


//  Code sample 06 ////////////////////////////////////////////////////////////

export const sampleSidebarItemIcon = `<SidebarItem>
    <SidebarItemIcon>
        // Icon will go here
    </SidebarItemIcon>
</SidebarItem>`;



//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleSidebarFooter = `<SidebarWrapper>
    <SidebarFooter isSticky></SidebarFooter>
</SidebarWrapper>`;


//  Code sample 08 ////////////////////////////////////////////////////////////
export const sampleSidebarCollapse = `export const Sidebar = () => {
    const [sidebarState, setSidebarState] = useState("");
    
    const headerOnClick = () => {
        setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
    }
    
    return (
        <SidebarWrapper className={\`\${sidebarState === "collapsed" ? "collapsed" : ""}\`}>
            <SidebarHeader onClick={headerOnClick}>
            </SidebarHeader>
        </SidebarWrapper>
    )
}`;


//  Code sample 09 ////////////////////////////////////////////////////////////
export const sampleSidebarTheming = `sidebar : {
    isCollapsed : {
        label : {
            text : defaultColours.white,
            bg   : customColours.hue
        }
    },

    body : {
        bg : defaultColours.white
    },

    header : {
        bg           : defaultColours.white,
        borderBottom : defaultColours.slate10,
        logoWidth    : "50%"
    },

    footer : {
        height    : "32px",
        bg        : defaultColours.white,
        borderTop : defaultColours.slate10
    }
},`;
