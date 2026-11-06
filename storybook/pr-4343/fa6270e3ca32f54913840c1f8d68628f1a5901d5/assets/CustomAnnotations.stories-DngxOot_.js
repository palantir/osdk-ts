import{j as n}from"./iframe-CDFbPseP.js";import{B as e}from"./BasePdfViewer-CcWfpHB8.js";import"./preload-helper-BKjsnnFk.js";import"./index-CzYE_gFj.js";import"./BasePdfViewer.module.css-CrdJe9Ol.js";import"./PdfViewerAnnotationLayer-DjSjto05.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bkzlAG0j.js";import"./PdfViewerOutlineSidebar-Gfjr0ON0.js";import"./PdfViewerSidebarHeader-BxrMX8OG.js";import"./useBaseUiId-BT9BKuc8.js";import"./useControlled-DSth82Ot.js";import"./CompositeRoot-Pdj2YrDd.js";import"./CompositeItem-CBWcSsRg.js";import"./ToolbarRootContext-B4N7QEkj.js";import"./composite-DoGjJBYp.js";import"./svgIconContainer-BNgOwI7J.js";import"./PdfViewerSearchBar-Cu3Cvjqp.js";import"./chevron-up-B9sXUp00.js";import"./chevron-down-LTvAL7jy.js";import"./cross-D1CsBnZQ.js";import"./PdfViewerSidebar-BlPLApKq.js";import"./index-sMIecie8.js";import"./index-zCdxyZBm.js";import"./index-B9ZyEEfj.js";import"./PdfViewerToolbar-C0mH-aDW.js";import"./Button-adqe8TBe.js";import"./chevron-right-CVK9SWZV.js";import"./Input-RJbqaFIV.js";import"./search-B_GZiPBG.js";import"./spin--t641HpU.js";import"./error-B-c6YY8H.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4343/fa6270e3ca32f54913840c1f8d68628f1a5901d5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
