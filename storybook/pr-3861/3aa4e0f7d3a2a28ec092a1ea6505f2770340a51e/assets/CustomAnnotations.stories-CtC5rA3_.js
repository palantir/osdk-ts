import{j as n}from"./iframe-JhP61fmQ.js";import{B as e}from"./BasePdfViewer-CfmunWJ-.js";import"./preload-helper-Dv4AHPyi.js";import"./index-BSmeSe50.js";import"./BasePdfViewer.module.css-DhGAIrCj.js";import"./PdfViewerAnnotationLayer-5g7pDHxq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcD3YOJq.js";import"./PdfViewerOutlineSidebar-oFeP3xQ_.js";import"./PdfViewerSidebarHeader-DbOcdYHj.js";import"./useBaseUiId-CA99nDKM.js";import"./useControlled-CmxJ51VA.js";import"./CompositeRoot-B5L22UnF.js";import"./CompositeItem-9QryHf4D.js";import"./ToolbarRootContext-D0sVvk8L.js";import"./composite-BB4dZRYR.js";import"./svgIconContainer-DKp8J6V9.js";import"./PdfViewerSearchBar-DYc2SCtT.js";import"./chevron-up-zn51GN14.js";import"./chevron-down-B0H-_dR_.js";import"./cross-Dsbhsz94.js";import"./PdfViewerSidebar-bHqrbzVl.js";import"./index-DkeojneP.js";import"./index-D3ENcNCA.js";import"./index-hdo2lGgd.js";import"./PdfViewerToolbar-BgK0yQLY.js";import"./Button-CndCZNKo.js";import"./chevron-right-DL1mbFuk.js";import"./Input-CRfOnocM.js";import"./search-CT7W-ise.js";import"./spin-CWbZhu4P.js";import"./error-Cz6c6olR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/3aa4e0f7d3a2a28ec092a1ea6505f2770340a51e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
