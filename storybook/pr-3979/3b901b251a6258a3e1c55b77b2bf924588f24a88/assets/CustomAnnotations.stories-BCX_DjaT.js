import{j as n}from"./iframe-BZrMvNjH.js";import{B as e}from"./BasePdfViewer-x8eXtaL4.js";import"./preload-helper-hIhWcbk1.js";import"./index-DS2flFfG.js";import"./BasePdfViewer.module.css-D0kdlX2y.js";import"./PdfViewerAnnotationLayer-U63f8HaT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvIN4Zn4.js";import"./PdfViewerOutlineSidebar-bPKX3eZG.js";import"./PdfViewerSidebarHeader-Ctc-7UFE.js";import"./useBaseUiId-CswL1btF.js";import"./useControlled-Bj7UVyPM.js";import"./CompositeRoot-BpXetu1C.js";import"./CompositeItem-Dintp2Bw.js";import"./ToolbarRootContext-CSb78eVd.js";import"./composite-Bvd7iHGV.js";import"./svgIconContainer-CY0qYkeS.js";import"./PdfViewerSearchBar-Bqd1LQ6Y.js";import"./chevron-up-zNQyrXtG.js";import"./chevron-down-Cbk6ruv5.js";import"./cross-iphUExt8.js";import"./PdfViewerSidebar-DCCCv2xg.js";import"./index-B3YZJx-I.js";import"./index-BlvQlGL4.js";import"./index-CClIcESQ.js";import"./PdfViewerToolbar-Cr4DgFer.js";import"./Button-DnumB7pL.js";import"./chevron-right-DAV4W4KF.js";import"./Input-nfoLLdye.js";import"./search-DxeR06nu.js";import"./spin-DnFo-SNe.js";import"./error-C4YZPalR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3979/3b901b251a6258a3e1c55b77b2bf924588f24a88/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
