import{j as n}from"./iframe-w1UAnkHZ.js";import{B as e}from"./BasePdfViewer-C9Lp2a0-.js";import"./preload-helper-G_k10dw4.js";import"./index-DAjwvQw3.js";import"./BasePdfViewer.module.css-l5LI2u7S.js";import"./PdfViewerAnnotationLayer-Caur7h4e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbrkyJz0.js";import"./PdfViewerOutlineSidebar-KPZmddju.js";import"./PdfViewerSidebarHeader-DNtWF-uS.js";import"./useBaseUiId-B91xIf3E.js";import"./useControlled-CyfOlT88.js";import"./CompositeRoot-D4pxYwFT.js";import"./CompositeItem-BFhWCO7j.js";import"./ToolbarRootContext-c5WYrsd5.js";import"./composite-BpZVqO51.js";import"./svgIconContainer-D_dZC5hw.js";import"./PdfViewerSearchBar-CTMNO7Uv.js";import"./chevron-up-wWgD8XwP.js";import"./chevron-down-B9i1zJjC.js";import"./cross-DKbNK5yX.js";import"./PdfViewerSidebar-Dl1ApmOr.js";import"./index-CyLlbcvz.js";import"./index-Dbx2XJAZ.js";import"./index-Btv6-V1K.js";import"./PdfViewerToolbar-U0Cb9-FR.js";import"./Button-Bh0hjCLH.js";import"./chevron-right-CHy0x744.js";import"./Input-tf1Imv2g.js";import"./search-DeM19rtD.js";import"./spin-D_1KKOj8.js";import"./error-CkfO44o7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/035cd099e4406cd918ff7cb650ae4f65aaf1530d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
