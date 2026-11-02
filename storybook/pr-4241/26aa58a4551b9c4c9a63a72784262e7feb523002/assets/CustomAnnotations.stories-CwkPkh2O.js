import{j as n}from"./iframe-DSFURlDA.js";import{B as e}from"./BasePdfViewer-BNXoLyLH.js";import"./preload-helper-B1VAjeN0.js";import"./index-n2cVRLUV.js";import"./BasePdfViewer.module.css-DnH-ZeK7.js";import"./PdfViewerAnnotationLayer-BXR1Tc22.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DX2NA0Sq.js";import"./PdfViewerOutlineSidebar-Cayfo4LN.js";import"./PdfViewerSidebarHeader-BQyjjx5z.js";import"./useBaseUiId-CPQbMaU1.js";import"./useControlled-C2QQWcpQ.js";import"./CompositeRoot-Co6W6f7L.js";import"./CompositeItem-4TlbRyqO.js";import"./ToolbarRootContext-D4dmc43x.js";import"./composite-zLymdlB4.js";import"./svgIconContainer-DdvBD_9a.js";import"./PdfViewerSearchBar-DbaVy0yd.js";import"./chevron-up-Ce33y_zj.js";import"./chevron-down-DT3G6LtT.js";import"./cross-BfC9nIFZ.js";import"./PdfViewerSidebar-CvcJQ4to.js";import"./index-ojfPVnys.js";import"./index-DEWyNal3.js";import"./index-DatMcuFW.js";import"./PdfViewerToolbar-BtB8-I54.js";import"./Button-B9oX6qDj.js";import"./chevron-right-CUDBSdZ9.js";import"./Input-TT4Euawv.js";import"./search-BUp5dxQj.js";import"./spin-kh0G29qe.js";import"./error-DUIlp0md.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/26aa58a4551b9c4c9a63a72784262e7feb523002/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
