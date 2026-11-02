import{j as n}from"./iframe-B6oWV_cO.js";import{B as e}from"./BasePdfViewer-CyLrtb6_.js";import"./preload-helper-CvT5iRxj.js";import"./index-jWi9en1s.js";import"./BasePdfViewer.module.css-D-9ey5gU.js";import"./PdfViewerAnnotationLayer-DYiqrRoW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CND27DwJ.js";import"./PdfViewerOutlineSidebar-DAkmjCeE.js";import"./PdfViewerSidebarHeader-DoXTDHvm.js";import"./useBaseUiId-Lqu0Q_Vu.js";import"./useControlled-BYVF8v0w.js";import"./CompositeRoot-BOsrxmub.js";import"./CompositeItem-Bt81vcwk.js";import"./ToolbarRootContext-BPjzZzdt.js";import"./composite-Dp6W2S9Q.js";import"./svgIconContainer-CyQYn__Q.js";import"./PdfViewerSearchBar-BVzqic0l.js";import"./chevron-up-bHgsMpWq.js";import"./chevron-down-DRI3eY5G.js";import"./cross-CMQlEfgT.js";import"./PdfViewerSidebar-CwkuMVJb.js";import"./index-DgJyY4kw.js";import"./index-CuLm7S4g.js";import"./index-BRc86hmI.js";import"./PdfViewerToolbar-CWWXjhu-.js";import"./Button-COxF9se3.js";import"./chevron-right-DRUferBa.js";import"./Input-Czst-Pu5.js";import"./search-elVCr7Zu.js";import"./spin-BD5CCDBd.js";import"./error-BpLqO6z6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4313/d440819311137dc60a826fd70f1cd4f27ca07765/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
