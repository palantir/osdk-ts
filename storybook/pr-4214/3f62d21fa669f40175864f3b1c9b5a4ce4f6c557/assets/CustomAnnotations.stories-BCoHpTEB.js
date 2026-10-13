import{j as n}from"./iframe-CofS9Mjv.js";import{B as e}from"./BasePdfViewer-CtqCZK4V.js";import"./preload-helper-DCg3GuVE.js";import"./index-Dba1-hqN.js";import"./BasePdfViewer.module.css-YR1zDZz4.js";import"./PdfViewerAnnotationLayer-Cjkim3eY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ct1NOy-G.js";import"./PdfViewerOutlineSidebar-B8w8rzdm.js";import"./PdfViewerSidebarHeader-NhRyCa1W.js";import"./useBaseUiId-BkkGBRPa.js";import"./useControlled-Dhms1Lp4.js";import"./CompositeRoot-BDFEKOSr.js";import"./CompositeItem-GQbg_S7m.js";import"./ToolbarRootContext-B8GhaGLP.js";import"./composite-BDNG4DUT.js";import"./svgIconContainer-rLHaF5xG.js";import"./PdfViewerSearchBar-CY8cxa_3.js";import"./chevron-up-CA9F1BNS.js";import"./chevron-down-CACMHp08.js";import"./cross-5sYjwK4P.js";import"./PdfViewerSidebar-BF240AW4.js";import"./index-CfMbSRut.js";import"./index-FNQL6Pr9.js";import"./index-KxxBCqJY.js";import"./PdfViewerToolbar-CA7RAQMz.js";import"./Button-3zEBIt6E.js";import"./chevron-right-BXCFSWEy.js";import"./Input-Bk5_B8IH.js";import"./search-CbFqNZT1.js";import"./spin-7yiGG4xi.js";import"./error-DOmo2qFa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4214/3f62d21fa669f40175864f3b1c9b5a4ce4f6c557/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
