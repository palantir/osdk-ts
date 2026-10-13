import{j as n}from"./iframe-Cnqo8JoO.js";import{B as e}from"./BasePdfViewer-DztAsZZF.js";import"./preload-helper-DB7HrsLr.js";import"./index-DPLneUTO.js";import"./BasePdfViewer.module.css-DuuqIdR4.js";import"./PdfViewerAnnotationLayer-DKuLBSpd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRoK8awg.js";import"./PdfViewerOutlineSidebar-BDVNQu_y.js";import"./PdfViewerSidebarHeader-OIzYUx3j.js";import"./useBaseUiId-CMntNwg3.js";import"./useControlled-D7Uij8uU.js";import"./CompositeRoot-Dh3LHx10.js";import"./CompositeItem-Cx-1EMH-.js";import"./ToolbarRootContext-BP77INzo.js";import"./composite-DaaqoGoy.js";import"./svgIconContainer-CSxRudGe.js";import"./PdfViewerSearchBar-DSPa2S3T.js";import"./chevron-up-BPnDo3OQ.js";import"./chevron-down-T8AVx82S.js";import"./cross-L-SNvRGg.js";import"./PdfViewerSidebar-BP9S1HDF.js";import"./index-BDFdu6IJ.js";import"./index-CwsDo0MO.js";import"./index-CKI4qvj-.js";import"./PdfViewerToolbar-D2pPM0WN.js";import"./Button-ChrgAtHr.js";import"./chevron-right-CUjtjav7.js";import"./Input-DB0BU6v_.js";import"./search-Bfy7kx1g.js";import"./spin-Dx9riRnu.js";import"./error-DWCGh03E.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4202/9c166a9ee03840c5c6788392f0e89ddf8b50a695/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
