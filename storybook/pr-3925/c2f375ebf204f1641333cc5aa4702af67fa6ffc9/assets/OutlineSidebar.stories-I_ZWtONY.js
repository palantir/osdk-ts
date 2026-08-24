import{j as i}from"./iframe-D7uYHMK5.js";import{P as o}from"./PdfViewerOutlineSidebar-DFF7MxI0.js";import"./preload-helper-DiAZcfZm.js";import"./index-BzC45Lga.js";import"./PdfViewerSidebarHeader-BNSeETtT.js";import"./useBaseUiId-Us591avB.js";import"./useControlled-D3BSP16K.js";import"./CompositeRoot-BZ0Gs8W6.js";import"./CompositeItem-DjaEdGcQ.js";import"./ToolbarRootContext-D0EWy9dk.js";import"./composite-BcyVLOSD.js";import"./svgIconContainer-BznKxTlt.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,f=[{title:"Introduction",depth:0,pageNumber:1,bold:!0,italic:!1},{title:"Background",depth:1,pageNumber:2,bold:!1,italic:!1},{title:"Motivation",depth:1,pageNumber:3,bold:!1,italic:!1},{title:"Architecture",depth:0,pageNumber:4,bold:!0,italic:!1},{title:"System Overview",depth:1,pageNumber:5,bold:!1,italic:!1},{title:"Component Design",depth:1,pageNumber:6,bold:!1,italic:!1},{title:"Data Flow",depth:2,pageNumber:7,bold:!1,italic:!0},{title:"Implementation",depth:0,pageNumber:8,bold:!0,italic:!1},{title:"Results",depth:0,pageNumber:10,bold:!0,italic:!1},{title:"Conclusion",depth:0,pageNumber:12,bold:!0,italic:!1}],y={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/OutlineSidebar",component:o,tags:["beta"],args:{outlineItems:f,currentPage:1,onItemClick:a(),sidebarMode:"outline",onSidebarModeChange:a()},render:g=>i.jsx("div",{style:{height:"400px",width:"240px"},children:i.jsx(o,{...g})}),argTypes:{currentPage:{description:"Currently active page number (1-indexed)",control:{type:"number",min:1}},outlineItems:{description:"Array of outline items to display",control:"object"}}},e={parameters:{docs:{source:{code:`import { PdfViewerOutlineSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// depth drives indentation; bold and italic mirror the PDF's own bookmark styling
<PdfViewerOutlineSidebar
  outlineItems={[
    { title: "Introduction", depth: 0, pageNumber: 1, bold: true, italic: false },
    { title: "Background", depth: 1, pageNumber: 2, bold: false, italic: false },
    { title: "Data Flow", depth: 2, pageNumber: 7, bold: false, italic: true },
  ]}
  currentPage={1}
  onItemClick={(item) => goToPage(item.pageNumber)}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>`}}}},t={args:{currentPage:6},parameters:{docs:{source:{code:`import { PdfViewerOutlineSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// currentPage highlights the deepest entry at or before that page
<PdfViewerOutlineSidebar
  outlineItems={outlineItems}
  currentPage={6}
  onItemClick={(item) => goToPage(item.pageNumber)}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>`}}}},r={args:{outlineItems:[]},parameters:{docs:{source:{code:`import { PdfViewerOutlineSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// PDFs without bookmarks render an empty state rather than a blank panel
<PdfViewerOutlineSidebar
  outlineItems={[]}
  currentPage={1}
  onItemClick={(item) => goToPage(item.pageNumber)}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>`}}}};var n,d,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerOutlineSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// depth drives indentation; bold and italic mirror the PDF's own bookmark styling
<PdfViewerOutlineSidebar
  outlineItems={[
    { title: "Introduction", depth: 0, pageNumber: 1, bold: true, italic: false },
    { title: "Background", depth: 1, pageNumber: 2, bold: false, italic: false },
    { title: "Data Flow", depth: 2, pageNumber: 7, bold: false, italic: true },
  ]}
  currentPage={1}
  onItemClick={(item) => goToPage(item.pageNumber)}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>\`
      }
    }
  }
}`,...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    currentPage: 6
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerOutlineSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// currentPage highlights the deepest entry at or before that page
<PdfViewerOutlineSidebar
  outlineItems={outlineItems}
  currentPage={6}
  onItemClick={(item) => goToPage(item.pageNumber)}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>\`
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    outlineItems: []
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerOutlineSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// PDFs without bookmarks render an empty state rather than a blank panel
<PdfViewerOutlineSidebar
  outlineItems={[]}
  currentPage={1}
  onItemClick={(item) => goToPage(item.pageNumber)}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>\`
      }
    }
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const V=["Default","ActiveSection","Empty"];export{t as ActiveSection,e as Default,r as Empty,V as __namedExportsOrder,y as default};
