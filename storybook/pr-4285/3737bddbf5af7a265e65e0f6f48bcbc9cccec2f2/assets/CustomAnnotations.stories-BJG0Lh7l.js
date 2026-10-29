import{j as n}from"./iframe-CiSKHfyc.js";import{B as e}from"./BasePdfViewer-CQ8yn9KF.js";import"./preload-helper-CWupNPgO.js";import"./index-D3wSasD3.js";import"./BasePdfViewer.module.css-C8-eRAoz.js";import"./PdfViewerAnnotationLayer-DZ6E44VC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkWziXfV.js";import"./PdfViewerOutlineSidebar-BymfGBtU.js";import"./PdfViewerSidebarHeader-DpfBipNy.js";import"./useBaseUiId-b_FN5CrC.js";import"./useControlled-CiZcMD85.js";import"./CompositeRoot-DGORO-V9.js";import"./CompositeItem-_hXBxygC.js";import"./ToolbarRootContext-D7bvCCy6.js";import"./composite-jZQCk-zR.js";import"./svgIconContainer-BJUr7DHQ.js";import"./PdfViewerSearchBar-CkfCG7ZZ.js";import"./chevron-up-Dlo1kaVg.js";import"./chevron-down-D5jrtiFY.js";import"./cross-DLLCkXVB.js";import"./PdfViewerSidebar-BJYS0Gyb.js";import"./index-CVFbikLp.js";import"./index-B_PLf88V.js";import"./index-EV91z822.js";import"./PdfViewerToolbar-B0bAdZbF.js";import"./Button-Cmyv-rnS.js";import"./chevron-right-D_u8lc1C.js";import"./Input-Cul32AIH.js";import"./search-DZapC1lH.js";import"./spin-BTz6X7oU.js";import"./error-CDPXWVFZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/3737bddbf5af7a265e65e0f6f48bcbc9cccec2f2/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
