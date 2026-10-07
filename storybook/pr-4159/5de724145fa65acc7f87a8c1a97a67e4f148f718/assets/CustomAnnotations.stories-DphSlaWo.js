import{j as n}from"./iframe-BkonaQ0V.js";import{B as e}from"./BasePdfViewer-Pur4KkAb.js";import"./preload-helper-wgqeRAml.js";import"./index-CygiEJb6.js";import"./BasePdfViewer.module.css-b6heD_G_.js";import"./PdfViewerAnnotationLayer-DbtEycvZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CR2M6QdB.js";import"./PdfViewerOutlineSidebar-BnBApn3N.js";import"./PdfViewerSidebarHeader-Cz5y8fCf.js";import"./useBaseUiId-DnbkQC4-.js";import"./useControlled-DJSj5exZ.js";import"./CompositeRoot-CJyLR6FT.js";import"./CompositeItem-Bl9Mb02l.js";import"./ToolbarRootContext-C3x2oEG2.js";import"./composite-CFHemZO9.js";import"./svgIconContainer-B_Cau1X9.js";import"./PdfViewerSearchBar-BTmXjpbq.js";import"./chevron-up-CnDv6d0_.js";import"./chevron-down-BvYaF6aU.js";import"./cross-CkDGtOaH.js";import"./PdfViewerSidebar-B368Cm_R.js";import"./index-CcaHmPI_.js";import"./index-CBL-z8ep.js";import"./index-ct3tIu0S.js";import"./PdfViewerToolbar-DmYTyZuT.js";import"./Button-uS_BewGO.js";import"./chevron-right-5eFplkkn.js";import"./Input-BP09pCNP.js";import"./search-J0YUGWpH.js";import"./spin-Cszm9oLV.js";import"./error-DnbjG5aU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4159/5de724145fa65acc7f87a8c1a97a67e4f148f718/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
