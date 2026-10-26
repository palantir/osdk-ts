import{j as n}from"./iframe-C_udlJU4.js";import{B as e}from"./BasePdfViewer-BTekqEXn.js";import"./preload-helper-D7A5VPqB.js";import"./index-D5Td05wZ.js";import"./BasePdfViewer.module.css-Bu4x_uiP.js";import"./PdfViewerAnnotationLayer-B_ajse8z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EKScposx.js";import"./PdfViewerOutlineSidebar-DS1xAoRF.js";import"./PdfViewerSidebarHeader-BmqYVLQn.js";import"./useBaseUiId-D9eSz4SE.js";import"./useControlled-BScpaCoT.js";import"./CompositeRoot-MDMXsagZ.js";import"./CompositeItem-D9nRDYX0.js";import"./ToolbarRootContext-Cypj8NdZ.js";import"./composite-0__3ht0j.js";import"./svgIconContainer-YTE10dOj.js";import"./PdfViewerSearchBar-Di_Ghe1V.js";import"./chevron-up-CxhBgQK8.js";import"./chevron-down-BaUNK2Yk.js";import"./cross-aLVt525v.js";import"./PdfViewerSidebar-TCPNYdnL.js";import"./index-CzIBiuyR.js";import"./index-kFWYrntg.js";import"./index-BIYZQ0cF.js";import"./PdfViewerToolbar-CXvFRZY5.js";import"./Button-DMGSDF9f.js";import"./chevron-right-C2llO5QK.js";import"./Input-DnhGyrNk.js";import"./search-BeZJ_QRn.js";import"./spin-4WbF8C0F.js";import"./error-DvqmoNGN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4259/3c71537f946d128869e5c68bd634ffc6fdf50894/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
