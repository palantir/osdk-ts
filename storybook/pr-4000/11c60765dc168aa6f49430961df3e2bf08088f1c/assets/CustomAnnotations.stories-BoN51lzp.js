import{j as n}from"./iframe-DQpCivO1.js";import{B as e}from"./BasePdfViewer-BOHvCbVf.js";import"./preload-helper-BNtpiPnv.js";import"./index-DS8-D35g.js";import"./BasePdfViewer.module.css-uEXfqq6w.js";import"./PdfViewerAnnotationLayer-CAFWmPXY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFxpNgFY.js";import"./PdfViewerOutlineSidebar-DQd69dUO.js";import"./PdfViewerSidebarHeader-DAyqvx1t.js";import"./useBaseUiId-C8ulXah6.js";import"./useControlled-LcZaVq-T.js";import"./CompositeRoot-B3yaZnwv.js";import"./CompositeItem-BwdYO-ps.js";import"./ToolbarRootContext-DQ_5rIHb.js";import"./composite-xfEh3o5g.js";import"./svgIconContainer-CxU-QT8u.js";import"./PdfViewerSearchBar-BzNYJttK.js";import"./chevron-up-R9Wq5hgx.js";import"./chevron-down-DfHD6Nmf.js";import"./cross-Ccdwkdk3.js";import"./PdfViewerSidebar-S9U_0whV.js";import"./index-CliSQRrA.js";import"./index-BKAa7pmt.js";import"./index-Dqn9XUWy.js";import"./PdfViewerToolbar-DSWUtJxN.js";import"./Button-CstsYLg_.js";import"./chevron-right-CLJ7D95t.js";import"./Input-i7VlWrgO.js";import"./search-GD8U0S68.js";import"./spin-RagGRGd2.js";import"./error-CRC1V3FY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4000/11c60765dc168aa6f49430961df3e2bf08088f1c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
