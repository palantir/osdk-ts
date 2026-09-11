import{j as n}from"./iframe-B-HGqiQv.js";import{B as e}from"./BasePdfViewer-BNCYyaI4.js";import"./preload-helper-f0nf4odL.js";import"./index-bxDwllqb.js";import"./BasePdfViewer.module.css-B3dEvuyM.js";import"./PdfViewerAnnotationLayer-Ca9q9wAG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9vZVNKf.js";import"./PdfViewerOutlineSidebar-BWr1J0F6.js";import"./PdfViewerSidebarHeader-BmAQLEIf.js";import"./useBaseUiId-SjVBW8d9.js";import"./useControlled-DE8TYXcZ.js";import"./CompositeRoot-BAOXPCu2.js";import"./CompositeItem-BdVijetn.js";import"./ToolbarRootContext-BLNyP9iz.js";import"./composite-Bss2rQnJ.js";import"./svgIconContainer-CcOwnLsJ.js";import"./PdfViewerSearchBar-DvVhG_iL.js";import"./chevron-up-nGRzPudY.js";import"./chevron-down-CPXc6U4P.js";import"./cross-EGyIlo5-.js";import"./PdfViewerSidebar-CLYl2SDP.js";import"./index-CdwYncCO.js";import"./index-BtG-qeps.js";import"./index-CEiCEyzQ.js";import"./PdfViewerToolbar-Cq6GAa6Y.js";import"./Button-DbLRaPaP.js";import"./chevron-right-C5Qtf454.js";import"./Input-DQz318CF.js";import"./search-2b7SykPm.js";import"./spin-BnP_UHMG.js";import"./error-BZh_GVh6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4004/551c064d098effa1152d148a31366419b3d0fd5b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
