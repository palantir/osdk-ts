import{j as n}from"./iframe-CpvsyndC.js";import{B as e}from"./BasePdfViewer-CSETVA0j.js";import"./preload-helper-v1ULc-zT.js";import"./index-OXZTet4E.js";import"./BasePdfViewer.module.css-Ql0ONumy.js";import"./PdfViewerAnnotationLayer-3iBDPV9N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BgCB9UOe.js";import"./PdfViewerOutlineSidebar-0oyDGWsB.js";import"./PdfViewerSidebarHeader-CRPN0Fa3.js";import"./useBaseUiId-CYqXXgOS.js";import"./useControlled-D-CxRUi2.js";import"./CompositeRoot-CK5ssIQ3.js";import"./CompositeItem-DpS-WC5l.js";import"./ToolbarRootContext-Bn57AYug.js";import"./composite-Bs9G8wyi.js";import"./svgIconContainer-Msyl1KBc.js";import"./PdfViewerSearchBar-B-gOH9SB.js";import"./chevron-up-D65VTpAR.js";import"./chevron-down-AhYvmllp.js";import"./cross-Bcfh6JZM.js";import"./PdfViewerSidebar-BdIRWDof.js";import"./index-4rhUuJvO.js";import"./index-BYz18T7P.js";import"./index-BQoSmoXa.js";import"./PdfViewerToolbar-DGaHrYVD.js";import"./Button-CCew8i_i.js";import"./chevron-right-DIK_VGJu.js";import"./Input-D6DNjjz9.js";import"./search-CKGbca0G.js";import"./spin-CYTQpRI6.js";import"./error-o4jN_MzE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4037/b9f6d13dc5d8f41cf1dffb727337fba828c36a3b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
