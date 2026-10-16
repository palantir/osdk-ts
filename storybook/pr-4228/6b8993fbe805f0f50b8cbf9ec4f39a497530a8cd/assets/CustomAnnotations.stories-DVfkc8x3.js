import{j as n}from"./iframe-SdQCyUgp.js";import{B as e}from"./BasePdfViewer-DF7ViBUV.js";import"./preload-helper-CW3K-5XG.js";import"./index-D3TvMuk-.js";import"./BasePdfViewer.module.css-D8TJbQ8K.js";import"./PdfViewerAnnotationLayer-DWcicd7N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6N5H8RK.js";import"./PdfViewerOutlineSidebar-Bq_AYS7U.js";import"./PdfViewerSidebarHeader-BUaWw5yT.js";import"./useBaseUiId-CBeYQDU3.js";import"./useControlled-B_XDx7ZC.js";import"./CompositeRoot-DW0GclMe.js";import"./CompositeItem-DAnhs0Iq.js";import"./ToolbarRootContext-CFFUOJKL.js";import"./composite-DgbmPZb7.js";import"./svgIconContainer-DRjj58Q8.js";import"./PdfViewerSearchBar-BpOhLf97.js";import"./chevron-up-DTKlfGVM.js";import"./chevron-down-Bqf_32Up.js";import"./cross-5HR9Xmh-.js";import"./PdfViewerSidebar-CowJjaVE.js";import"./index-CqaCF-Lj.js";import"./index-Bcc2WdCU.js";import"./index-D0j0DV3h.js";import"./PdfViewerToolbar-DXhmDNlx.js";import"./Button-DVBp1SrV.js";import"./chevron-right-nPrxw0mQ.js";import"./Input-Dx-qEMGm.js";import"./search-DC3bQpgx.js";import"./spin-CroZ0ozD.js";import"./error-CUc6sGqF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4228/6b8993fbe805f0f50b8cbf9ec4f39a497530a8cd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
