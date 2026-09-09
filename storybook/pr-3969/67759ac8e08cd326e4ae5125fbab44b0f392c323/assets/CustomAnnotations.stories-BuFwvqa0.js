import{j as n}from"./iframe-B3Tmb11O.js";import{B as e}from"./BasePdfViewer-DsH4rmHj.js";import"./preload-helper-gakQdOi4.js";import"./index-kZbgPBf-.js";import"./BasePdfViewer.module.css-sUA7eAOY.js";import"./PdfViewerAnnotationLayer-1mSNDuqd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CjCS6iHb.js";import"./PdfViewerOutlineSidebar-BLshR_8y.js";import"./PdfViewerSidebarHeader-BRgrjtt9.js";import"./useBaseUiId-Bm-vJATe.js";import"./useControlled-uOco89xC.js";import"./CompositeRoot-Rjl5Ixan.js";import"./CompositeItem-BKoGSNiO.js";import"./ToolbarRootContext-CqEf4XEU.js";import"./composite-2j3kB3hN.js";import"./svgIconContainer-BsQARODV.js";import"./PdfViewerSearchBar-DH-sPQ2J.js";import"./chevron-up-BRvUcC8v.js";import"./chevron-down-CsQH01fJ.js";import"./cross-C-JhHfM1.js";import"./PdfViewerSidebar-CnVf3LjP.js";import"./index-D4PUZNNP.js";import"./index-DfPJChMi.js";import"./index-QmBbQjFR.js";import"./PdfViewerToolbar-ClTKRsMc.js";import"./Button-BRlUcQED.js";import"./chevron-right-B5RWh1z-.js";import"./Input-CWGLraK0.js";import"./search-ZvK9KowR.js";import"./spin-BDy1yXny.js";import"./error-DCFU_pHO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3969/67759ac8e08cd326e4ae5125fbab44b0f392c323/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
