import{j as n}from"./iframe-DaskLrq8.js";import{B as e}from"./BasePdfViewer-f9Xv3-qA.js";import"./preload-helper-BVj_xxLy.js";import"./index-Bqih82xZ.js";import"./BasePdfViewer.module.css-CuqAoBa5.js";import"./PdfViewerAnnotationLayer-CW_xXzT9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aI4J6Z_X.js";import"./PdfViewerOutlineSidebar-VOBfFJN0.js";import"./PdfViewerSidebarHeader-C00CN4jT.js";import"./useBaseUiId-DMXF2oMu.js";import"./useControlled-CYCM7Lap.js";import"./CompositeRoot-BNgyz3CD.js";import"./CompositeItem-BVBCC1HX.js";import"./ToolbarRootContext-BzuzU9vE.js";import"./composite-BYKbQoC1.js";import"./svgIconContainer-tkjo1pD1.js";import"./PdfViewerSearchBar-B9pxINup.js";import"./chevron-up-BMkjSMDP.js";import"./chevron-down-CjfhpjkO.js";import"./cross-B-0FObLb.js";import"./PdfViewerSidebar-2zGs2m6g.js";import"./index-DmvVgxHl.js";import"./index-C_mHhOwa.js";import"./index-Dy_kZRgY.js";import"./PdfViewerToolbar-DQrD8D-2.js";import"./Button-BrqzKE8K.js";import"./chevron-right-CC-p5PCu.js";import"./Input-DB2lb1xd.js";import"./search-25BjkPAP.js";import"./spin-4IN9bQG2.js";import"./error-5sU13yE2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4185/60b1e0bce6a368ec8f0e0b1f4333c73e239f6150/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
