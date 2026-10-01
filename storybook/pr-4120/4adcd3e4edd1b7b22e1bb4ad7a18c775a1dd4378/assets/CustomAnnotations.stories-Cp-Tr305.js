import{j as n}from"./iframe-BiMzIlPJ.js";import{B as e}from"./BasePdfViewer-0kUU5Itq.js";import"./preload-helper-dV0TeC0E.js";import"./index-Dl3SZpx3.js";import"./BasePdfViewer.module.css-DXGGtdc9.js";import"./PdfViewerAnnotationLayer-BN5hMt_d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLpxUwZ9.js";import"./PdfViewerOutlineSidebar-BjOXpcrr.js";import"./PdfViewerSidebarHeader-WC9hTOmG.js";import"./useBaseUiId-W_-oecTL.js";import"./useControlled-545e9KB7.js";import"./CompositeRoot-BRD39g9O.js";import"./CompositeItem-DZTQE9oi.js";import"./ToolbarRootContext-DLbFMlLJ.js";import"./composite-NMWOeRk3.js";import"./svgIconContainer-CxWabZX-.js";import"./PdfViewerSearchBar-C7zL_RzS.js";import"./chevron-up-L8wD56y1.js";import"./chevron-down-Dj5P_Z4N.js";import"./cross-BJNvpKNm.js";import"./PdfViewerSidebar-BkbbY9LG.js";import"./index-Du_9BUOk.js";import"./index-BipBLK98.js";import"./index-e-n3pUpE.js";import"./PdfViewerToolbar-BN8JiSUa.js";import"./Button-CQ2rKaZE.js";import"./chevron-right-DKEsg96k.js";import"./Input-Cn6g7mcN.js";import"./search-BuVLYo6z.js";import"./spin-D40rSuEd.js";import"./error-BvyeXfc5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/4adcd3e4edd1b7b22e1bb4ad7a18c775a1dd4378/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
