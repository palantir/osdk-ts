import{j as n}from"./iframe-C-vShDHk.js";import{B as e}from"./BasePdfViewer-3byJIIpm.js";import"./preload-helper-B2rWRkvC.js";import"./index-Cx2OgQ-2.js";import"./BasePdfViewer.module.css-HUa4zU9s.js";import"./PdfViewerAnnotationLayer-CVMHfQpG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAbKtnvN.js";import"./PdfViewerOutlineSidebar-CFr2H5qs.js";import"./PdfViewerSidebarHeader-C5tCduSq.js";import"./useBaseUiId-CVgLKRhh.js";import"./useControlled-TStxGFbD.js";import"./CompositeRoot-Do48ivJ8.js";import"./CompositeItem-DCzVtAix.js";import"./ToolbarRootContext-JfRNTAAS.js";import"./composite-BHa_u3nf.js";import"./svgIconContainer-BXOzj86j.js";import"./PdfViewerSearchBar-D-25CVDZ.js";import"./chevron-up-jfJEWVzR.js";import"./chevron-down-BslLGd1l.js";import"./cross-CPOUhrWH.js";import"./PdfViewerSidebar-BlKNGtwh.js";import"./index-B5-Rp7Tt.js";import"./index-D6DLWMjA.js";import"./index-MAhWZ1KQ.js";import"./PdfViewerToolbar-DsOr9Fnr.js";import"./Button-LZsipjsn.js";import"./chevron-right-CkqRgaHD.js";import"./Input-ChQ78XH9.js";import"./search-D9klcMPO.js";import"./spin-Bjjw0nAc.js";import"./error-Dym_fJRU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4073/3f93b82dc94ecd61be1cd4b9517e21c1401ed927/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
