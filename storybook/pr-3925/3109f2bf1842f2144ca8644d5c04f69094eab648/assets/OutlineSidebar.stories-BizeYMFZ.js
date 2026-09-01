import{j as a}from"./iframe-CXrz77U6.js";import{P as o}from"./PdfViewerOutlineSidebar-BeLhYBTB.js";import"./preload-helper-CKbgkQtS.js";import"./index-X106RkLU.js";import"./PdfViewerSidebarHeader-DPRMv6gP.js";import"./useBaseUiId-DEWnkFns.js";import"./useControlled-TnVqlNU3.js";import"./CompositeRoot-YeJPlhey.js";import"./CompositeItem-CriE69S9.js";import"./ToolbarRootContext-ly2czwm4.js";import"./composite-ggnTBoJz.js";import"./svgIconContainer-C1hoWfOl.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,h=[{title:"Introduction",depth:0,pageNumber:1,bold:!0,italic:!1},{title:"Background",depth:1,pageNumber:2,bold:!1,italic:!1},{title:"Motivation",depth:1,pageNumber:3,bold:!1,italic:!1},{title:"Architecture",depth:0,pageNumber:4,bold:!0,italic:!1},{title:"System Overview",depth:1,pageNumber:5,bold:!1,italic:!1},{title:"Component Design",depth:1,pageNumber:6,bold:!1,italic:!1},{title:"Data Flow",depth:2,pageNumber:7,bold:!1,italic:!0},{title:"Implementation",depth:0,pageNumber:8,bold:!0,italic:!1},{title:"Results",depth:0,pageNumber:10,bold:!0,italic:!1},{title:"Conclusion",depth:0,pageNumber:12,bold:!0,italic:!1}],T={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/OutlineSidebar",component:o,tags:["beta"],args:{outlineItems:h,currentPage:1,onItemClick:i(),sidebarMode:"outline",onSidebarModeChange:i()},render:g=>a.jsx("div",{style:{height:"400px",width:"240px"},children:a.jsx(o,{...g})}),argTypes:{currentPage:{description:"Currently active page number (1-indexed)",control:{type:"number",min:1}},outlineItems:{description:"Array of outline items to display",control:"object"}}},e={parameters:{docs:{source:{code:`// depth drives indentation; bold and italic mirror the PDF's own bookmark styling
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
/>`}}}},t={args:{currentPage:6},parameters:{docs:{source:{code:`// currentPage highlights the deepest entry at or before that page
<PdfViewerOutlineSidebar
  outlineItems={outlineItems}
  currentPage={6}
  onItemClick={(item) => goToPage(item.pageNumber)}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>`}}}},r={args:{outlineItems:[]},parameters:{docs:{source:{code:`// PDFs without bookmarks render an empty state rather than a blank panel
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
        code: \`// depth drives indentation; bold and italic mirror the PDF's own bookmark styling
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
}`,...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    currentPage: 6
  },
  parameters: {
    docs: {
      source: {
        code: \`// currentPage highlights the deepest entry at or before that page
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    outlineItems: []
  },
  parameters: {
    docs: {
      source: {
        code: \`// PDFs without bookmarks render an empty state rather than a blank panel
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
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const v=["Default","ActiveSection","Empty"];export{t as ActiveSection,e as Default,r as Empty,v as __namedExportsOrder,T as default};
