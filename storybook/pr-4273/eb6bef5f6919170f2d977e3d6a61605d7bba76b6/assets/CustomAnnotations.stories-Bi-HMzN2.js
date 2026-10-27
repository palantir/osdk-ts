import{j as n}from"./iframe-BECIlG-5.js";import{B as e}from"./BasePdfViewer-C-Fko_7e.js";import"./preload-helper-Cv0NrjSm.js";import"./index-0SVtXK84.js";import"./BasePdfViewer.module.css-DW4wjV5S.js";import"./PdfViewerAnnotationLayer-CUw8Ptvr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUNM33LQ.js";import"./PdfViewerOutlineSidebar-DxxH2KMI.js";import"./PdfViewerSidebarHeader-AwMP8yej.js";import"./useBaseUiId-BynaZof5.js";import"./useControlled-DwAysQOe.js";import"./CompositeRoot-CYKJI4vX.js";import"./CompositeItem-Dl8QDSWw.js";import"./ToolbarRootContext-4ge2fwUs.js";import"./composite-Bb9FNHOi.js";import"./svgIconContainer-B-mztRGa.js";import"./PdfViewerSearchBar-Cggl9jpT.js";import"./chevron-up-DUxMILLL.js";import"./chevron-down-B_ghTOEG.js";import"./cross-ubVpY3r4.js";import"./PdfViewerSidebar-BUgvtRF9.js";import"./index-BtesBorZ.js";import"./index-CXVpCKKQ.js";import"./index-sIW5LEP1.js";import"./PdfViewerToolbar-BOjCYA-x.js";import"./Button-cPt_jdAf.js";import"./chevron-right-Cj3teQ_r.js";import"./Input-Bv6R3iZB.js";import"./search-CxKdELes.js";import"./spin-BkVHUExP.js";import"./error-W3FJWM_l.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4273/eb6bef5f6919170f2d977e3d6a61605d7bba76b6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
