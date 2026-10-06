import{j as n}from"./iframe-D8wUjP5Q.js";import{B as e}from"./BasePdfViewer-Eyw4ovTo.js";import"./preload-helper-C60jAzLY.js";import"./index-BIu9Kojc.js";import"./BasePdfViewer.module.css-CSTl2mXR.js";import"./PdfViewerAnnotationLayer-CulzFmyO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BF8dog06.js";import"./PdfViewerOutlineSidebar-Dz23SlSE.js";import"./PdfViewerSidebarHeader-C9DrxVR0.js";import"./useBaseUiId-BUaCAPTV.js";import"./useControlled-DRmCkPiT.js";import"./CompositeRoot-B38ob4_b.js";import"./CompositeItem-Df57X5b8.js";import"./ToolbarRootContext-Cng6yUXD.js";import"./composite-C2EdyOaO.js";import"./svgIconContainer-DfD-bPJ9.js";import"./PdfViewerSearchBar-Doihf0Kl.js";import"./chevron-up-CzrTJ-Ex.js";import"./chevron-down-BCcrHoHV.js";import"./cross-uw8rTCsg.js";import"./PdfViewerSidebar-zJ7ZcMeM.js";import"./index-BopS7lH3.js";import"./index-Urfc-aXa.js";import"./index-9bYJqJha.js";import"./PdfViewerToolbar-egatbTTZ.js";import"./Button-Db1yV2vy.js";import"./chevron-right-Cmqp5uaQ.js";import"./Input-DqsKhBeK.js";import"./search-CqoqcUsr.js";import"./spin-CJoaGaJp.js";import"./error-CtMjuQbV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/76d364050f0ef098802f785ec3e893d6a783bc31/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
