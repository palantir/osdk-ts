import{j as n}from"./iframe-CuEjl7Uz.js";import{B as e}from"./BasePdfViewer-BwZGAPh1.js";import"./preload-helper-Bnv-TItm.js";import"./index-BYfl2w_f.js";import"./BasePdfViewer.module.css-2FIs03Vx.js";import"./PdfViewerAnnotationLayer-Bu7rWEl4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXsnQS6c.js";import"./PdfViewerOutlineSidebar-BqkLiPAW.js";import"./PdfViewerSidebarHeader-Clp5233L.js";import"./useBaseUiId-CvRriR4c.js";import"./useControlled-DBpnwX6L.js";import"./CompositeRoot-C6d8kw3h.js";import"./CompositeItem-BhUbIVeo.js";import"./ToolbarRootContext-BwI8s8FH.js";import"./composite-kFUoCHQq.js";import"./svgIconContainer-Dd92hyPw.js";import"./PdfViewerSearchBar-D6Knj1oe.js";import"./chevron-up-BZnvYc8R.js";import"./chevron-down-CP7RGjpz.js";import"./cross-CXL6d4Nc.js";import"./PdfViewerSidebar-BYwy59aB.js";import"./index-DxunnI8U.js";import"./index-Bx0fAKss.js";import"./index-CS1Bngb_.js";import"./PdfViewerToolbar-SCHtgtdX.js";import"./Button-DPfa27EA.js";import"./chevron-right-P69oW7o7.js";import"./Input-ZdxPnrAH.js";import"./search-3wsQQ4iP.js";import"./spin-Be3PhZ9-.js";import"./error-NZ5oWKud.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3925/114f5c1c5d65fa781d9f34d51c14ce1985de2c1f/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
