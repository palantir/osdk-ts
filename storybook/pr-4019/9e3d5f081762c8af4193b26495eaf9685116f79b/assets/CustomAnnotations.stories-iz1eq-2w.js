import{j as n}from"./iframe-Djf7Pdxr.js";import{B as e}from"./BasePdfViewer-D0Fv1Ks0.js";import"./preload-helper-bqmPmNVM.js";import"./index-q-X2FPlx.js";import"./BasePdfViewer.module.css-BAqT5IbN.js";import"./PdfViewerAnnotationLayer-CMe_9zab.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ckl1lmOG.js";import"./PdfViewerOutlineSidebar-D5YQQo3U.js";import"./PdfViewerSidebarHeader-BnON9e_L.js";import"./useBaseUiId-CFhAQZOZ.js";import"./useControlled-DBGPJ9YV.js";import"./CompositeRoot-BXrdOGV5.js";import"./CompositeItem-CA-IJTMc.js";import"./ToolbarRootContext-DMoWDH_V.js";import"./composite-IAQwOYh1.js";import"./svgIconContainer-BOlRpQyp.js";import"./PdfViewerSearchBar-B86Eh5sG.js";import"./chevron-up-Dw4yeYoV.js";import"./chevron-down-CuR5Ei1Z.js";import"./cross-DFIWw1bP.js";import"./PdfViewerSidebar-DnZbRtcw.js";import"./index-3wqM3UEs.js";import"./index-Br-LNr6E.js";import"./index-B_8x8Udt.js";import"./PdfViewerToolbar-i6A5MP4l.js";import"./Button-DSU1CbLm.js";import"./chevron-right-DVNrGmh5.js";import"./Input-BOeBxQZ8.js";import"./search-Ddeiu8tt.js";import"./spin-DQ3nCj4j.js";import"./error-D2_XhANl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/9e3d5f081762c8af4193b26495eaf9685116f79b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
