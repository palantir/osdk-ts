import{j as n}from"./iframe-CJbOBKBh.js";import{B as e}from"./BasePdfViewer--ysZa02W.js";import"./preload-helper-BLHdcgal.js";import"./index-BZGK6RAy.js";import"./BasePdfViewer.module.css-DrAv0kv7.js";import"./PdfViewerAnnotationLayer-C1LdBC9E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3EDU-4vX.js";import"./PdfViewerOutlineSidebar-J-eMNPp6.js";import"./PdfViewerSidebarHeader-DiBuFb0X.js";import"./useBaseUiId-BLfqnsnM.js";import"./useControlled-CZ4YcEAU.js";import"./CompositeRoot-9pHNxhvX.js";import"./CompositeItem-CstBZeOc.js";import"./ToolbarRootContext-DRMcjCuu.js";import"./composite-C9nRcOzN.js";import"./svgIconContainer-nMosQuRN.js";import"./PdfViewerSearchBar-Cm7h1wff.js";import"./chevron-up-uNgbMAJC.js";import"./chevron-down-Cy1gcHm4.js";import"./cross-DXZ7nfx1.js";import"./PdfViewerSidebar-DyJtP2Md.js";import"./index-Dxrf0IE0.js";import"./index-De6fjuAQ.js";import"./index-B_6VUgxJ.js";import"./PdfViewerToolbar-DrEUW2sa.js";import"./Button-ChlDUqJf.js";import"./chevron-right-BElyHC62.js";import"./Input-B6hCJoOA.js";import"./search-BiEjqGXz.js";import"./spin-BFbRVGze.js";import"./error-SsNWn793.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3981/64b57bfb69dba2dcc19b413c535269f14598f75a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
