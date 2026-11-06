import{j as n}from"./iframe-DalzUr1q.js";import{B as e}from"./BasePdfViewer-kvXgimS-.js";import"./preload-helper-D_n2FxVD.js";import"./index-BFBpHzmv.js";import"./BasePdfViewer.module.css-QPM4myKY.js";import"./PdfViewerAnnotationLayer-BWrQ-j4s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpyA5lgW.js";import"./PdfViewerOutlineSidebar-P6casyWk.js";import"./PdfViewerSidebarHeader-CMtV1Ard.js";import"./useBaseUiId-C1YfiI_O.js";import"./useControlled-kzcpSzwV.js";import"./CompositeRoot-CMKlH_Pk.js";import"./CompositeItem-BA4-v1aY.js";import"./ToolbarRootContext-BCpC9w2q.js";import"./composite-ByIGP6v1.js";import"./svgIconContainer-8scThZ5S.js";import"./PdfViewerSearchBar-BuATpDg6.js";import"./chevron-up-BuQVfXH0.js";import"./chevron-down-CPH5FDFQ.js";import"./cross-SZYnhdqh.js";import"./PdfViewerSidebar-RNTmkKK7.js";import"./index-B3TGx6rz.js";import"./index-CyRUVzxf.js";import"./index-8qyP2Pih.js";import"./PdfViewerToolbar-DQPhDK5-.js";import"./Button-c1CthLqB.js";import"./chevron-right-CbkGGwc1.js";import"./Input-D5Owm4cS.js";import"./search-B4UxFsnj.js";import"./spin-iVO2YGPz.js";import"./error-3LJUbIdl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4351/9b98a2972dbcc0e968765b943b546d86ac5cbd6c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
