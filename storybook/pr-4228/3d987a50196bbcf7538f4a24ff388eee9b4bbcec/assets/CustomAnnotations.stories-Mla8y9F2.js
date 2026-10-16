import{j as n}from"./iframe-D48Q2Ih8.js";import{B as e}from"./BasePdfViewer-D3crRCAD.js";import"./preload-helper-CL77aTRo.js";import"./index-BAc81QxV.js";import"./BasePdfViewer.module.css-BdZjzNUq.js";import"./PdfViewerAnnotationLayer-DmOsJhYK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Y5s66mGU.js";import"./PdfViewerOutlineSidebar-DdlhcXDm.js";import"./PdfViewerSidebarHeader-xgwIV80T.js";import"./useBaseUiId-DGTp0U_O.js";import"./useControlled-CFgtbz8z.js";import"./CompositeRoot-BFpwLrpz.js";import"./CompositeItem-CIsGCI0M.js";import"./ToolbarRootContext-RyVic0HL.js";import"./composite-AHBdhfMT.js";import"./svgIconContainer-C8Iv3sR3.js";import"./PdfViewerSearchBar-CK2aPHkZ.js";import"./chevron-up-DpbWoxka.js";import"./chevron-down-BKXBxbNC.js";import"./cross-7sczFfzI.js";import"./PdfViewerSidebar-D-iR5ChY.js";import"./index-BSoRDxwG.js";import"./index-DKv9tcd8.js";import"./index-CMlea4RE.js";import"./PdfViewerToolbar-BzfVwyf-.js";import"./Button-CRna_EZj.js";import"./chevron-right-DHAD24Sa.js";import"./Input-BYdVsABv.js";import"./search-C9PzHLND.js";import"./spin-3hhLIFW6.js";import"./error-CmBzdsaE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4228/3d987a50196bbcf7538f4a24ff388eee9b4bbcec/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
