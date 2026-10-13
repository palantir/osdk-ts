import{j as n}from"./iframe-DQyXgQjF.js";import{B as e}from"./BasePdfViewer-UfTOrYQM.js";import"./preload-helper-BwATEbbW.js";import"./index-zxLoORa7.js";import"./BasePdfViewer.module.css-BJEwW0ns.js";import"./PdfViewerAnnotationLayer-vyHvqJOE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CM1yDHp3.js";import"./PdfViewerOutlineSidebar-Eo74vnLB.js";import"./PdfViewerSidebarHeader-BYHsDhHM.js";import"./useBaseUiId-3phzK7j-.js";import"./useControlled-D7uKPK_J.js";import"./CompositeRoot-D49dfhJt.js";import"./CompositeItem-RFl7h3zH.js";import"./ToolbarRootContext-BfCsQAap.js";import"./composite-CU43rjMu.js";import"./svgIconContainer-CWf268Wa.js";import"./PdfViewerSearchBar-KMDTfSJ9.js";import"./chevron-up-CMwa2FSb.js";import"./chevron-down-B7bppAwZ.js";import"./cross-DYm99n8j.js";import"./PdfViewerSidebar-CiMKFRIF.js";import"./index-Dvo2_Daj.js";import"./index-YSBI5FA8.js";import"./index-L_6XzX0S.js";import"./PdfViewerToolbar-D4-EzZPe.js";import"./Button-7Yv-s8d8.js";import"./chevron-right-Cu5vS6wI.js";import"./Input-DiCaaolk.js";import"./search-BmUdzc_y.js";import"./spin-DOTGjr1K.js";import"./error-F90l69c5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3781/c558e72980302074a9db3ebb57daf2c6e7605212/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
