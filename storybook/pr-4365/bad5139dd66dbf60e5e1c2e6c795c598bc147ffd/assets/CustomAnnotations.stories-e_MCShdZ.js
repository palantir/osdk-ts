import{j as n}from"./iframe-D8PhF-eH.js";import{B as e}from"./BasePdfViewer-CL8IkRh1.js";import"./preload-helper-BAjhLXlD.js";import"./index-GeJSxn-b.js";import"./BasePdfViewer.module.css-BSykiNVX.js";import"./PdfViewerAnnotationLayer-BHdgNbN8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_9GUhaZ.js";import"./PdfViewerOutlineSidebar-CCawmC0v.js";import"./PdfViewerSidebarHeader-DKpmd7rg.js";import"./useBaseUiId-B7vHmMIX.js";import"./useControlled-Bb2LNbVb.js";import"./CompositeRoot-BNpHuEUn.js";import"./CompositeItem-hs5t7L4r.js";import"./ToolbarRootContext-CfxpKT0G.js";import"./composite-D3ANHq5C.js";import"./svgIconContainer-B9myFr8z.js";import"./PdfViewerSearchBar-BU9PmUBT.js";import"./chevron-up-CfuzuH3q.js";import"./chevron-down-egnrEsvE.js";import"./cross-B-SWIjS0.js";import"./PdfViewerSidebar-BeyDyRVn.js";import"./index-3jm-2kpZ.js";import"./index-BjXCP1BI.js";import"./index-C2YCUhpZ.js";import"./PdfViewerToolbar-BVeqOqlB.js";import"./Button-DJIgkoJK.js";import"./chevron-right--HKCWypp.js";import"./Input-BVLD4pm0.js";import"./search-CFo5JCpY.js";import"./spin-DKmeLC3e.js";import"./error-odhwE47h.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4365/bad5139dd66dbf60e5e1c2e6c795c598bc147ffd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
