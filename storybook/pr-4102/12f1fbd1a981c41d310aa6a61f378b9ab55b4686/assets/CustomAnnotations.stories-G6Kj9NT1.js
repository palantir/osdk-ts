import{j as n}from"./iframe-mIKFVahX.js";import{B as e}from"./BasePdfViewer-B7GsuLrq.js";import"./preload-helper-DQmtxJ1O.js";import"./index-eiO_d1ck.js";import"./BasePdfViewer.module.css-ig0uFB9W.js";import"./PdfViewerAnnotationLayer-DmKVlvzE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_--MY-H.js";import"./PdfViewerOutlineSidebar-CCnA0owF.js";import"./PdfViewerSidebarHeader-CLJCBmXL.js";import"./useBaseUiId-CgEi7PVt.js";import"./useControlled-XyEjnDFJ.js";import"./CompositeRoot-Ch7lFv2f.js";import"./CompositeItem-CiILW6_Z.js";import"./ToolbarRootContext-xG4QpLCn.js";import"./composite-D6bfVeDu.js";import"./svgIconContainer-CQHualxO.js";import"./PdfViewerSearchBar-DzsXaRCY.js";import"./chevron-up-BIMYUXIf.js";import"./chevron-down-BpXaL00s.js";import"./cross-UeuWwKaz.js";import"./PdfViewerSidebar-Bol2Qm9D.js";import"./index-ug1vsAFu.js";import"./index-Dr8o4W-0.js";import"./index-CRsq_c05.js";import"./PdfViewerToolbar-Bt7Rjbi0.js";import"./Button-D5NXSYW3.js";import"./chevron-right-C5Q57e0C.js";import"./Input-C9PDTVtY.js";import"./search-BUcn5JQ5.js";import"./spin-RRdRk79g.js";import"./error-Jm4hVuYR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/12f1fbd1a981c41d310aa6a61f378b9ab55b4686/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
