import{j as n}from"./iframe-el7bjSAH.js";import{B as e}from"./BasePdfViewer-DggwxqjO.js";import"./preload-helper-DLIuAVkn.js";import"./index-DqdFzNH7.js";import"./BasePdfViewer.module.css-ChhUk8Lm.js";import"./PdfViewerAnnotationLayer-C9b_h0TU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChhDJjRW.js";import"./PdfViewerOutlineSidebar-dAWSz96g.js";import"./PdfViewerSidebarHeader-B0STjWoM.js";import"./useBaseUiId-BMJSE7oP.js";import"./useControlled-B75sCM7T.js";import"./CompositeRoot-BkTRdWQt.js";import"./CompositeItem-2Q_-fuaz.js";import"./ToolbarRootContext-B3AP-FE_.js";import"./composite-CNO4lqFc.js";import"./svgIconContainer-DsqZkZNx.js";import"./PdfViewerSearchBar-B8lQMKze.js";import"./chevron-up-DUc-JZ6h.js";import"./chevron-down-C0Gm8Kcu.js";import"./cross-DKrIoJp0.js";import"./PdfViewerSidebar-C7Ibmmyi.js";import"./index-BxJn0x3b.js";import"./index-C95mnJoM.js";import"./index-0oAMicpD.js";import"./PdfViewerToolbar-TaVo98Am.js";import"./Button-CzJbluPV.js";import"./chevron-right-BKMPkhOz.js";import"./Input-CL8_Xm7J.js";import"./search-BcW8-7NR.js";import"./spin-CFUwHxCS.js";import"./error-D7fY3cPV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/d93340d0dd88c91ad8878f051327bac288f5807f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
