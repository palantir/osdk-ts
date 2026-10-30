import{j as n}from"./iframe-D1LXFBxc.js";import{P as r}from"./PdfViewerOutlineSidebar-DL_4sJ0y.js";import"./preload-helper-BMGLbfqy.js";import"./index-1OI0nGkQ.js";import"./PdfViewerSidebarHeader-B0awVJCF.js";import"./useBaseUiId-ps7HY4-v.js";import"./useControlled-BkSZr9vP.js";import"./CompositeRoot-987Pw8HT.js";import"./CompositeItem-TBc75DhR.js";import"./ToolbarRootContext-BWtsBung.js";import"./composite-DuREibPe.js";import"./svgIconContainer-bswbKgoA.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,h=[{title:"Introduction",depth:0,pageNumber:1,bold:!0,italic:!1},{title:"Background",depth:1,pageNumber:2,bold:!1,italic:!1},{title:"Motivation",depth:1,pageNumber:3,bold:!1,italic:!1},{title:"Architecture",depth:0,pageNumber:4,bold:!0,italic:!1},{title:"System Overview",depth:1,pageNumber:5,bold:!1,italic:!1},{title:"Component Design",depth:1,pageNumber:6,bold:!1,italic:!1},{title:"Data Flow",depth:2,pageNumber:7,bold:!1,italic:!0},{title:"Implementation",depth:0,pageNumber:8,bold:!0,italic:!1},{title:"Results",depth:0,pageNumber:10,bold:!0,italic:!1},{title:"Conclusion",depth:0,pageNumber:12,bold:!0,italic:!1}],D={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/OutlineSidebar",component:r,tags:["beta"],args:{outlineItems:h,currentPage:1,onItemClick:o(),sidebarMode:"outline",onSidebarModeChange:o()},render:b=>n.jsx("div",{style:{height:"400px",width:"240px"},children:n.jsx(r,{...b})}),argTypes:{currentPage:{description:"Currently active page number (1-indexed)",control:{type:"number",min:1}},outlineItems:{description:"Array of outline items to display",control:"object"}}},e={parameters:{docs:{source:{code:`const handleItemClick = useCallback((item: PdfOutlineItem) => {
  goToPage(item.pageNumber);
}, [goToPage]);

// depth drives indentation; bold and italic mirror the PDF's own bookmark styling
<PdfViewerOutlineSidebar
  outlineItems={[
    { title: "Introduction", depth: 0, pageNumber: 1, bold: true, italic: false },
    { title: "Background", depth: 1, pageNumber: 2, bold: false, italic: false },
    { title: "Data Flow", depth: 2, pageNumber: 7, bold: false, italic: true },
  ]}
  currentPage={1}
  onItemClick={handleItemClick}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>`}}}},t={args:{currentPage:6},parameters:{docs:{source:{code:`const handleItemClick = useCallback((item: PdfOutlineItem) => {
  goToPage(item.pageNumber);
}, [goToPage]);

// currentPage highlights the deepest entry at or before that page
<PdfViewerOutlineSidebar
  outlineItems={outlineItems}
  currentPage={6}
  onItemClick={handleItemClick}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>`}}}},a={args:{outlineItems:[]},parameters:{docs:{source:{code:`const handleItemClick = useCallback((item: PdfOutlineItem) => {
  goToPage(item.pageNumber);
}, [goToPage]);

// PDFs without bookmarks render an empty state rather than a blank panel
<PdfViewerOutlineSidebar
  outlineItems={[]}
  currentPage={1}
  onItemClick={handleItemClick}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>`}}}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const handleItemClick = useCallback((item: PdfOutlineItem) => {
  goToPage(item.pageNumber);
}, [goToPage]);

// depth drives indentation; bold and italic mirror the PDF's own bookmark styling
<PdfViewerOutlineSidebar
  outlineItems={[
    { title: "Introduction", depth: 0, pageNumber: 1, bold: true, italic: false },
    { title: "Background", depth: 1, pageNumber: 2, bold: false, italic: false },
    { title: "Data Flow", depth: 2, pageNumber: 7, bold: false, italic: true },
  ]}
  currentPage={1}
  onItemClick={handleItemClick}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>\`
      }
    }
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var s,c,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    currentPage: 6
  },
  parameters: {
    docs: {
      source: {
        code: \`const handleItemClick = useCallback((item: PdfOutlineItem) => {
  goToPage(item.pageNumber);
}, [goToPage]);

// currentPage highlights the deepest entry at or before that page
<PdfViewerOutlineSidebar
  outlineItems={outlineItems}
  currentPage={6}
  onItemClick={handleItemClick}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>\`
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    outlineItems: []
  },
  parameters: {
    docs: {
      source: {
        code: \`const handleItemClick = useCallback((item: PdfOutlineItem) => {
  goToPage(item.pageNumber);
}, [goToPage]);

// PDFs without bookmarks render an empty state rather than a blank panel
<PdfViewerOutlineSidebar
  outlineItems={[]}
  currentPage={1}
  onItemClick={handleItemClick}
  sidebarMode="outline"
  onSidebarModeChange={setSidebarMode}
/>\`
      }
    }
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const v=["Default","ActiveSection","Empty"];export{t as ActiveSection,e as Default,a as Empty,v as __namedExportsOrder,D as default};
