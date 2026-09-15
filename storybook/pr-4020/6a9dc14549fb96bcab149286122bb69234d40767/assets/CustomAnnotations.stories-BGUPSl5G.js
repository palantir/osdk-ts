import{j as n}from"./iframe-C-CLTpsP.js";import{B as e}from"./BasePdfViewer-BlJmLHXm.js";import"./preload-helper-DHm86PzE.js";import"./index-C_yrN8nJ.js";import"./BasePdfViewer.module.css-CyL675-E.js";import"./PdfViewerAnnotationLayer-Psc1jZum.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dnq7guo1.js";import"./PdfViewerOutlineSidebar-28PW0dyf.js";import"./PdfViewerSidebarHeader-BgP3NtlI.js";import"./useBaseUiId-CzMe2Dnq.js";import"./useControlled-BMK5_n_x.js";import"./CompositeRoot-oyH0EfPE.js";import"./CompositeItem-DUPoB7w7.js";import"./ToolbarRootContext-BEcPVQJt.js";import"./composite-DJh0mugt.js";import"./svgIconContainer-xNOrsz7C.js";import"./PdfViewerSearchBar-CLzPR8VQ.js";import"./chevron-up-C0pmcL0Z.js";import"./chevron-down-Cj7uY9HA.js";import"./cross-Ku2F5rSb.js";import"./PdfViewerSidebar-pd7Zzwz7.js";import"./index-D7xNirGy.js";import"./index-D40VRMQn.js";import"./index-Cfu6rkCW.js";import"./PdfViewerToolbar-4L_ss73T.js";import"./Button-TBXiPdkd.js";import"./chevron-right-DBn3JIHq.js";import"./Input-D24KUx_z.js";import"./search-CpRfXCb8.js";import"./spin-BiJdR4vp.js";import"./error-B9ihfIkN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/6a9dc14549fb96bcab149286122bb69234d40767/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
