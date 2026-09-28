import{j as n}from"./iframe-BtV5Bfbi.js";import{B as e}from"./BasePdfViewer-BmXBQYVS.js";import"./preload-helper-BaD02CxS.js";import"./index-DAzHyxws.js";import"./BasePdfViewer.module.css-k47wRbMd.js";import"./PdfViewerAnnotationLayer-DxU-NDth.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChEpwK2V.js";import"./PdfViewerOutlineSidebar-CXsvtDyV.js";import"./PdfViewerSidebarHeader-169wtg68.js";import"./useBaseUiId-BC3a2pkv.js";import"./useControlled-DlTCUtzh.js";import"./CompositeRoot-Bz64cv1t.js";import"./CompositeItem-Byxrj2vM.js";import"./ToolbarRootContext-BUFM8kOj.js";import"./composite-C3xTmSSO.js";import"./svgIconContainer-CFzNfVqM.js";import"./PdfViewerSearchBar-C47k6huh.js";import"./chevron-up-Dr62dO2v.js";import"./chevron-down-CdxAFrGc.js";import"./cross-BHH5GCet.js";import"./PdfViewerSidebar-BLgO0FLH.js";import"./index-C-hRh0T_.js";import"./index-D79nVaz6.js";import"./index-CDtXf1D5.js";import"./PdfViewerToolbar-BxUqkIXo.js";import"./Button-CysZ3JPI.js";import"./chevron-right-CugkhF1w.js";import"./Input-C3DTMAEb.js";import"./search-mBeXzQE2.js";import"./spin-ChQSv9nc.js";import"./error-h7XYysQz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4063/5a0d5bff76a066fd855c7aadede8a2018c5cdaed/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
