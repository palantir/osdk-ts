import{j as n}from"./iframe-CSosjOmv.js";import{B as e}from"./BasePdfViewer-BEOAckSq.js";import"./preload-helper-C-gjDSXJ.js";import"./index-DzdecULf.js";import"./BasePdfViewer.module.css-CqtX9bBu.js";import"./PdfViewerAnnotationLayer-HZ9n3IOy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_VyRDoi.js";import"./PdfViewerOutlineSidebar-Cdi0YcO8.js";import"./PdfViewerSidebarHeader-Dw-sTMb6.js";import"./useBaseUiId-B_aLw92E.js";import"./useControlled-DcuHztpz.js";import"./CompositeRoot-D7F0oeRQ.js";import"./CompositeItem-CDrUmRrI.js";import"./ToolbarRootContext-DYXzz-gp.js";import"./composite-CFm1NNj3.js";import"./svgIconContainer-C8vg2tag.js";import"./PdfViewerSearchBar-CQC8kfgp.js";import"./chevron-up-CVLg-Wwv.js";import"./chevron-down-C05xfaFU.js";import"./cross-CBsOArVe.js";import"./PdfViewerSidebar-CL1DahWV.js";import"./index-qg2om6Py.js";import"./index-BvXFeSY8.js";import"./index-C7NVW3nO.js";import"./PdfViewerToolbar-CKf2fpv4.js";import"./Button-CXkasH7A.js";import"./chevron-right-DCibbuxG.js";import"./Input-BYDbWdB8.js";import"./search-1vXjOjjG.js";import"./spin-DBbTL3aq.js";import"./error-C8uWSFuO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4337/a033e7d034faecd5e0abd525ccce4a957f13bff6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
