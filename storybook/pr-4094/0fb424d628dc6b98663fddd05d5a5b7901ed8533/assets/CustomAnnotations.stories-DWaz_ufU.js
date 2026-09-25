import{j as n}from"./iframe-DvmPM8XM.js";import{B as e}from"./BasePdfViewer-ATgM-m_0.js";import"./preload-helper-CWXBbGOK.js";import"./index-Ckyxf5ES.js";import"./BasePdfViewer.module.css-DbyykB-M.js";import"./PdfViewerAnnotationLayer-BYYy1K8b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSOS15gg.js";import"./PdfViewerOutlineSidebar-BY6BHcPg.js";import"./PdfViewerSidebarHeader-DbuqdW3p.js";import"./useBaseUiId-BK6rm_vX.js";import"./useControlled-BlFMc0zn.js";import"./CompositeRoot-C6lBSlqt.js";import"./CompositeItem-kRLneeY3.js";import"./ToolbarRootContext-E7hSXQbh.js";import"./composite-BtMZy7bH.js";import"./svgIconContainer-CKvBglfs.js";import"./PdfViewerSearchBar-DfExe0mw.js";import"./chevron-up-DdNMRTR2.js";import"./chevron-down-BE3Vkzfj.js";import"./cross-CWK_3iX0.js";import"./PdfViewerSidebar-DK9nMTXr.js";import"./index-DPz56gTU.js";import"./index-DxRIPJNB.js";import"./index-DFwggDQF.js";import"./PdfViewerToolbar-C7AMFYJd.js";import"./Button-CdgEMVNK.js";import"./chevron-right-Bn8b5btK.js";import"./Input-DAJjBhoV.js";import"./search-TBI5J1QZ.js";import"./spin-Dglv-MOm.js";import"./error-C_RDaNST.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4094/0fb424d628dc6b98663fddd05d5a5b7901ed8533/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
