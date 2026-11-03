import{j as n}from"./iframe-_lLrSj1r.js";import{B as e}from"./BasePdfViewer-BJWxC4s9.js";import"./preload-helper--K06I6bX.js";import"./index-u4LjU3wy.js";import"./BasePdfViewer.module.css-BYy1xE0b.js";import"./PdfViewerAnnotationLayer-DTC0sCLj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1Yo3sNC.js";import"./PdfViewerOutlineSidebar-CZMCnyrD.js";import"./PdfViewerSidebarHeader-BJ6HVL7E.js";import"./useBaseUiId-Bc8GG6V8.js";import"./useControlled-ef7rEDgw.js";import"./CompositeRoot-BLbkv49G.js";import"./CompositeItem-DQchaMiL.js";import"./ToolbarRootContext-DHD80eI9.js";import"./composite-BZPxrUSk.js";import"./svgIconContainer-mBZD1oTc.js";import"./PdfViewerSearchBar-BCJQJwo7.js";import"./chevron-up-BuVKIe-6.js";import"./chevron-down-DeOYs4U6.js";import"./cross-Cf8HUSkr.js";import"./PdfViewerSidebar-DRdM2CXW.js";import"./index-Cp32Ucpe.js";import"./index-DMVKgr18.js";import"./index-_W33FQQz.js";import"./PdfViewerToolbar-B8kpppCS.js";import"./Button-DtR0BNuF.js";import"./chevron-right-DxDLdBkC.js";import"./Input-ByElj6b4.js";import"./search-BsFDT1OC.js";import"./spin-Banl6WMr.js";import"./error-po7axJSl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/328e924cc3958d6d6b08ae4d2e9b218ae7410ae1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
