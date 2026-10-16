import{j as n}from"./iframe-DCDy9VYS.js";import{B as e}from"./BasePdfViewer-Dk_ZBFnk.js";import"./preload-helper-DYzeOhdi.js";import"./index-As1ywJYE.js";import"./BasePdfViewer.module.css-DsY_nMVL.js";import"./PdfViewerAnnotationLayer-uSS3Rrkl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU8ONwOP.js";import"./PdfViewerOutlineSidebar-49CPW0Os.js";import"./PdfViewerSidebarHeader-KTUH8O_X.js";import"./useBaseUiId-BwVm2U7U.js";import"./useControlled-Ck2v8yj-.js";import"./CompositeRoot-ClZxIwF5.js";import"./CompositeItem-DLLGFuyo.js";import"./ToolbarRootContext-cMntifXn.js";import"./composite-c9aHe9jO.js";import"./svgIconContainer-D9qShJuw.js";import"./PdfViewerSearchBar-Ch0BV9TB.js";import"./chevron-up-f_d5u9Gd.js";import"./chevron-down-hGs_IVeQ.js";import"./cross-BJlA6QIm.js";import"./PdfViewerSidebar-D-Zg7nEr.js";import"./index-CMTxTXNi.js";import"./index-CvF6o7Ro.js";import"./index-Dg2YILHW.js";import"./PdfViewerToolbar-BCbWyfqs.js";import"./Button-CEFR6_SV.js";import"./chevron-right-wnm_fRSM.js";import"./Input-1IBLw1l4.js";import"./search-Nu3soqfg.js";import"./spin-q9ixOul7.js";import"./error-5cMYD3vI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4228/25c0bc288842d980e0ee084656b2213a65a56511/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
