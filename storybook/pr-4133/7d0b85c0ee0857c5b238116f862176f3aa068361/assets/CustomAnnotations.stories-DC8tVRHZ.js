import{j as n}from"./iframe-CwfFVXYm.js";import{B as e}from"./BasePdfViewer-DJBQkFt6.js";import"./preload-helper-B0i1Ccv8.js";import"./index-12mUJC8n.js";import"./BasePdfViewer.module.css-DJVXS2mG.js";import"./PdfViewerAnnotationLayer-HmYDJFzd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cw1wsSyu.js";import"./PdfViewerOutlineSidebar-bZ2OcwtV.js";import"./PdfViewerSidebarHeader-CwkTiX3J.js";import"./useBaseUiId-D7i-0lUl.js";import"./useControlled-CBv31JWZ.js";import"./CompositeRoot-DnxEXpos.js";import"./CompositeItem-BPiFovJv.js";import"./ToolbarRootContext-mV67Z_2Q.js";import"./composite-B35ndqHm.js";import"./svgIconContainer-CGFZMhJS.js";import"./PdfViewerSearchBar-CBQml5F6.js";import"./chevron-up-DFx_f40v.js";import"./chevron-down-CYWunexi.js";import"./cross-vHANk4GA.js";import"./PdfViewerSidebar-DpR2ZXJe.js";import"./index-DTmUBa4U.js";import"./index-DNXZoFIr.js";import"./index-D2z71Qsm.js";import"./PdfViewerToolbar-0IUWrPzy.js";import"./Button-BEoayh3H.js";import"./chevron-right-CgSUQ9dT.js";import"./Input-B3BLVjbw.js";import"./search-CXyOr2KE.js";import"./spin-DOk5ZQYs.js";import"./error-BbOajjO4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4133/7d0b85c0ee0857c5b238116f862176f3aa068361/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
