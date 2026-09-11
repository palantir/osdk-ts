import{j as n}from"./iframe-DkbM6O-Q.js";import{B as e}from"./BasePdfViewer-DY0Ejb8j.js";import"./preload-helper-DC9LUrcb.js";import"./index-5Xb7iy_v.js";import"./BasePdfViewer.module.css-C1m-UNR_.js";import"./PdfViewerAnnotationLayer-B0dxK3o5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVuiqhJL.js";import"./PdfViewerOutlineSidebar-B73KUutS.js";import"./PdfViewerSidebarHeader-CT5DUiDa.js";import"./useBaseUiId-CbWoUVda.js";import"./useControlled-TBJYjn-n.js";import"./CompositeRoot-XW1VV55v.js";import"./CompositeItem-CIMhmz-B.js";import"./ToolbarRootContext-B5sg7AjV.js";import"./composite-CSTh2sUL.js";import"./svgIconContainer-aUCWMueJ.js";import"./PdfViewerSearchBar-Cwl-uTOR.js";import"./chevron-up-Tuqv7cnq.js";import"./chevron-down-DwM4wuWt.js";import"./cross-Bgds_EJl.js";import"./PdfViewerSidebar-BrFmG7VB.js";import"./index-Cp7hW4d_.js";import"./index-DjV9sMAb.js";import"./index-CS7XaPdo.js";import"./PdfViewerToolbar-CdOBhO2g.js";import"./Button-DDqxd8Ee.js";import"./chevron-right-BKJdsRVB.js";import"./Input-BHgKvDQ1.js";import"./search-eJ_oBGNG.js";import"./spin-CfrApU-M.js";import"./error-Dg6O-1zt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/03fd036764f6658df8598db927fb06ddb09ffe4f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
