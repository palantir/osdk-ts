import{j as n}from"./iframe-BR4-xVYI.js";import{B as e}from"./BasePdfViewer-BdsIrxVo.js";import"./preload-helper-DbBEOmrA.js";import"./index-Bl34zl0T.js";import"./BasePdfViewer.module.css-B55j6wwF.js";import"./PdfViewerAnnotationLayer-CpINt9es.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yJHNsQRt.js";import"./PdfViewerOutlineSidebar-Crqs0DVb.js";import"./PdfViewerSidebarHeader-D6PGt4GT.js";import"./useBaseUiId-BYzMy68a.js";import"./useControlled-DN7CYAB2.js";import"./CompositeRoot-B78GDGW9.js";import"./CompositeItem-CeAvgtlv.js";import"./ToolbarRootContext-DPLqybB9.js";import"./composite-B5Ni56Yc.js";import"./svgIconContainer-DsRlczG5.js";import"./PdfViewerSearchBar-DWKL87k8.js";import"./chevron-up-sR2e5foT.js";import"./chevron-down-B00usCld.js";import"./cross-C0jaUfu0.js";import"./PdfViewerSidebar-DYh8u98K.js";import"./index-DEPbvTfn.js";import"./index-CeuhUjnH.js";import"./index-ucjEhEXO.js";import"./PdfViewerToolbar-D8jCJ8Uh.js";import"./Button-B43-ydWW.js";import"./chevron-right-DYZwrNyg.js";import"./Input-D7vx6zqX.js";import"./search-WudRV3Lk.js";import"./spin-oDXt0-V6.js";import"./error-DEM7tD3T.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4299/ab05c217cf8b17f32eb3cac8b94e2abd46165a2f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
