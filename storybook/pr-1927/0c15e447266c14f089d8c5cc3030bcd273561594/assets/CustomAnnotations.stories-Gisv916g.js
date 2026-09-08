import{j as n}from"./iframe-QQ9Fs_tc.js";import{B as e}from"./BasePdfViewer-ChEwKP4K.js";import"./preload-helper-B4fYryDC.js";import"./index-DkrQDtS2.js";import"./BasePdfViewer.module.css-DTGmDYDW.js";import"./PdfViewerAnnotationLayer-D93FV0Lv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9ISynJZ.js";import"./PdfViewerOutlineSidebar-Cb9x483L.js";import"./PdfViewerSidebarHeader-Bhyoexd7.js";import"./useBaseUiId-1r5VJFrp.js";import"./useControlled-36aB-sGp.js";import"./CompositeRoot-B0X_7QWj.js";import"./CompositeItem-Bl0uQaQG.js";import"./ToolbarRootContext-YsoXVLyq.js";import"./composite-2UwVI9RX.js";import"./svgIconContainer-DTxq_i5h.js";import"./PdfViewerSearchBar-CWWHwluC.js";import"./chevron-up-Dba1kWyK.js";import"./chevron-down-Bgnu4jc9.js";import"./cross-DmvM--6P.js";import"./PdfViewerSidebar-BRBNBbjP.js";import"./index-C32oDOmG.js";import"./index-D63-R6ut.js";import"./index-DsjkNNfA.js";import"./PdfViewerToolbar-RbawhQ5G.js";import"./Button-DJziOx5S.js";import"./chevron-right-Ch9DS3Vq.js";import"./Input-CucLW42P.js";import"./search-BSq4Mlrv.js";import"./spin-B5WqDu4B.js";import"./error-DTTckfDx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1927/0c15e447266c14f089d8c5cc3030bcd273561594/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
