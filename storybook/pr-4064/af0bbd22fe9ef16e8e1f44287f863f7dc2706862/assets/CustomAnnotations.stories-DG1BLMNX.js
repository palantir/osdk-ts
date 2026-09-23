import{j as n}from"./iframe-ChtCM8dE.js";import{B as e}from"./BasePdfViewer-WnK4gaRJ.js";import"./preload-helper-Cmiw_6tL.js";import"./index-uT5HIxUp.js";import"./BasePdfViewer.module.css-BhRKNhRe.js";import"./PdfViewerAnnotationLayer-q4Z0cXp2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHQFBrIx.js";import"./PdfViewerOutlineSidebar-IZEC_tOE.js";import"./PdfViewerSidebarHeader-DcIoZ5Ws.js";import"./useBaseUiId-BlvSRiC6.js";import"./useControlled-hlF0PwpK.js";import"./CompositeRoot-BGFsyASZ.js";import"./CompositeItem-DamdrYTg.js";import"./ToolbarRootContext-D57ExyiR.js";import"./composite-B9COiNPT.js";import"./svgIconContainer-B0Hb1RBl.js";import"./PdfViewerSearchBar-CsfpJ5FR.js";import"./chevron-up-DqI-k4m8.js";import"./chevron-down-9ZFNeU84.js";import"./cross-Cx7UUYd1.js";import"./PdfViewerSidebar-D_UNzSVw.js";import"./index-BcIK4VrX.js";import"./index-Pe_luz3n.js";import"./index-B31cE8Rp.js";import"./PdfViewerToolbar-Bn66q-Dq.js";import"./Button-CY6Mleoh.js";import"./chevron-right-Y45tuyrn.js";import"./Input-CiDCxeu9.js";import"./search-NDA-MaEJ.js";import"./spin-BN0CT1ya.js";import"./error-C3rrhmyZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4064/af0bbd22fe9ef16e8e1f44287f863f7dc2706862/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
