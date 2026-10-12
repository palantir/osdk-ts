import{j as n}from"./iframe-BLtbB9yL.js";import{B as e}from"./BasePdfViewer-6Q-COljH.js";import"./preload-helper-NY6L4APl.js";import"./index-Dzu4b_IB.js";import"./BasePdfViewer.module.css-C0fDwV7Y.js";import"./PdfViewerAnnotationLayer-CxPWWlJG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DvInpOxN.js";import"./PdfViewerOutlineSidebar-CdCAww5f.js";import"./PdfViewerSidebarHeader-BzPWK79K.js";import"./useBaseUiId-DmOmCKZO.js";import"./useControlled-WQcnYS8e.js";import"./CompositeRoot-BD6WdsPb.js";import"./CompositeItem-DNKgQIaZ.js";import"./ToolbarRootContext-DdGg-Lfa.js";import"./composite-Cypvm6OB.js";import"./svgIconContainer-cTxegse7.js";import"./PdfViewerSearchBar-sO5-3Ydb.js";import"./chevron-up-BVr3oU-0.js";import"./chevron-down-BhpG0rg7.js";import"./cross-C7Pfqsgy.js";import"./PdfViewerSidebar-B0-5Yp7H.js";import"./index-DcUVdUbh.js";import"./index-Dq2eIlq8.js";import"./index-u2zPfote.js";import"./PdfViewerToolbar-B3Dg05ea.js";import"./Button-B6pZtsky.js";import"./chevron-right-Bnw4Q8nU.js";import"./Input-BiA-3KH_.js";import"./search-1AInKOFa.js";import"./spin-CLzxPla7.js";import"./error-BGqP2VaS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4194/d285ff9bbdb4585818c84c3226505b51e76904ab/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
