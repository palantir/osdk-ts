import{j as n}from"./iframe-CFV-nnj8.js";import{B as e}from"./BasePdfViewer-D6pwGRVP.js";import"./preload-helper-B6fyfr7c.js";import"./index-vmaSH1sB.js";import"./BasePdfViewer.module.css-BZeQunXF.js";import"./PdfViewerAnnotationLayer-6SyFmZJh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cn_7lnEy.js";import"./PdfViewerOutlineSidebar-IEPtirvS.js";import"./PdfViewerSidebarHeader-CO_ILrjp.js";import"./useBaseUiId-WVaYu2-M.js";import"./useControlled-BOSfLjyK.js";import"./CompositeRoot-MmXsgA7t.js";import"./CompositeItem-C3ap8dp1.js";import"./ToolbarRootContext-BsgEetLb.js";import"./composite-DJp6IOoD.js";import"./svgIconContainer-D_-2ttXX.js";import"./PdfViewerSearchBar-Bf2lrlnf.js";import"./chevron-up-CVMRK1Sx.js";import"./chevron-down-14_leR3A.js";import"./cross-QMVU-YJc.js";import"./PdfViewerSidebar-BzDwn3V3.js";import"./index-DsD3GjJA.js";import"./index-BjUsjKoR.js";import"./index-Dyi_6i64.js";import"./PdfViewerToolbar-CZp-P79J.js";import"./Button-B3yPaUxl.js";import"./chevron-right-CHhK0Uur.js";import"./Input-KbJwk9Nd.js";import"./search-DZmS-pfQ.js";import"./spin-DAv2U0s5.js";import"./error-CPA32RNg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4050/f06d0aa278711eb116682fe06cf0586a40880c0c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
