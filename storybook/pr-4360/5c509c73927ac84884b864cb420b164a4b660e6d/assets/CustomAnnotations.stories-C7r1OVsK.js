import{j as n}from"./iframe-BXxdMdy7.js";import{B as e}from"./BasePdfViewer-BrP7N7KI.js";import"./preload-helper-CzdKpJOA.js";import"./index-BD4H0T12.js";import"./BasePdfViewer.module.css-DjzDQjdh.js";import"./PdfViewerAnnotationLayer-D6cQBdkb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2lLyBjZ.js";import"./PdfViewerOutlineSidebar-tElHv9gX.js";import"./PdfViewerSidebarHeader-yDXPJoYW.js";import"./useBaseUiId-CWV-_dal.js";import"./useControlled-BP-Dvf9O.js";import"./CompositeRoot-D9V5NfAC.js";import"./CompositeItem-DWha1o73.js";import"./ToolbarRootContext-CIB517xc.js";import"./composite-D8jBtBX-.js";import"./svgIconContainer-Cxa1Q93_.js";import"./PdfViewerSearchBar-6Xkrz15Z.js";import"./chevron-up-a9EH8Scq.js";import"./chevron-down-CYALw_cH.js";import"./cross-IC7VDHMx.js";import"./PdfViewerSidebar-R04ILAzu.js";import"./index-DS2LC4Xn.js";import"./index-CHD8ML8j.js";import"./index-Bnop5Sxj.js";import"./PdfViewerToolbar-FxWQiohx.js";import"./Button--SPNZNsz.js";import"./chevron-right-Cs3c8GRK.js";import"./Input-CqSjd8ip.js";import"./search-BBZ4C5jZ.js";import"./spin-9DYMhz-g.js";import"./error-xwnNQugq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4360/5c509c73927ac84884b864cb420b164a4b660e6d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
