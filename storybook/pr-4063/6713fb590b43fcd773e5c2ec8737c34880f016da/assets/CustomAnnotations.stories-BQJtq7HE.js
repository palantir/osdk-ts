import{j as n}from"./iframe-CGwmlW2r.js";import{B as e}from"./BasePdfViewer-78TVCC2c.js";import"./preload-helper-CVIGiO6F.js";import"./index-CjgswMxd.js";import"./BasePdfViewer.module.css-ObQXPNv_.js";import"./PdfViewerAnnotationLayer-C9rAXC9M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HC6p7jn5.js";import"./PdfViewerOutlineSidebar-CJX3x_Ji.js";import"./PdfViewerSidebarHeader-BT22T0eG.js";import"./useBaseUiId-Bm2cFh6B.js";import"./useControlled-DsP0nmCG.js";import"./CompositeRoot-Bh5nsKzg.js";import"./CompositeItem-7T1omaB9.js";import"./ToolbarRootContext-CxtjwMoV.js";import"./composite-BJmQcV2t.js";import"./svgIconContainer-BTPb8DLH.js";import"./PdfViewerSearchBar-kz3CMSLM.js";import"./chevron-up-CSORMd0b.js";import"./chevron-down-CfoUsUUp.js";import"./cross-DQgNlB5k.js";import"./PdfViewerSidebar-Y8Qh-VkB.js";import"./index-Z2JS55l6.js";import"./index-DxRKQXJQ.js";import"./index-CafwHe0h.js";import"./PdfViewerToolbar-T8L1sCaa.js";import"./Button-DFUwv3AU.js";import"./chevron-right-C59xzDTe.js";import"./Input-pi6zEsGe.js";import"./search-DcxUYSzD.js";import"./spin-B_MPtgds.js";import"./error-CgUQsRwJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4063/6713fb590b43fcd773e5c2ec8737c34880f016da/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
