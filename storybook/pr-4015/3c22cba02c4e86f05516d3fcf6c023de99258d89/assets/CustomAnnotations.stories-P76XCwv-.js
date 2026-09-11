import{j as n}from"./iframe-ME9jEV4B.js";import{B as e}from"./BasePdfViewer-CRtaMkYC.js";import"./preload-helper-CAlbxuMw.js";import"./index-BwQPjFr5.js";import"./BasePdfViewer.module.css-pQhcoGI4.js";import"./PdfViewerAnnotationLayer-KfUh-fjL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BC2rUamn.js";import"./PdfViewerOutlineSidebar-CTgiqCLI.js";import"./PdfViewerSidebarHeader-Y_GeUqy3.js";import"./useBaseUiId-BRBkTzbz.js";import"./useControlled-BiaTOKvQ.js";import"./CompositeRoot-Brjb4gET.js";import"./CompositeItem-CxooWEv2.js";import"./ToolbarRootContext-DM1MG67c.js";import"./composite-DGm-qDkX.js";import"./svgIconContainer-C0iDRr5R.js";import"./PdfViewerSearchBar-Cq4Ix3AU.js";import"./chevron-up-4p7biAv6.js";import"./chevron-down-6_LddkfR.js";import"./cross-BDVa-Vs8.js";import"./PdfViewerSidebar-CfCl8w2R.js";import"./index-D7oNMiqq.js";import"./index-BfDcgSaT.js";import"./index-By_4WpJv.js";import"./PdfViewerToolbar-DPnTX3Gr.js";import"./Button-Da4t_kgJ.js";import"./chevron-right-Bm9tYUwJ.js";import"./Input-CE0w_ENc.js";import"./search-Dg6pBwm_.js";import"./spin-Dm6DCEEL.js";import"./error-Y3Mhwjiz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/3c22cba02c4e86f05516d3fcf6c023de99258d89/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
