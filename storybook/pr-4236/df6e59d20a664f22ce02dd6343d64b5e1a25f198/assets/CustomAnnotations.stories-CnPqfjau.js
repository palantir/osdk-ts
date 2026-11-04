import{j as n}from"./iframe-DrF4uDXw.js";import{B as e}from"./BasePdfViewer-BJ7anEB7.js";import"./preload-helper-u_zBXynr.js";import"./index-CVI5kV9I.js";import"./BasePdfViewer.module.css-DKe5cF4H.js";import"./PdfViewerAnnotationLayer-BAQqWAGP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCJWjG_J.js";import"./PdfViewerOutlineSidebar-Ct6owV_R.js";import"./PdfViewerSidebarHeader-BJ_uIWov.js";import"./useBaseUiId-C9RyiOK8.js";import"./useControlled-CZU-WiQ8.js";import"./CompositeRoot-DEfZtucj.js";import"./CompositeItem-D46vdXYg.js";import"./ToolbarRootContext-C8VOBVuh.js";import"./composite-Bq13iBNY.js";import"./svgIconContainer-DTs7PmKd.js";import"./PdfViewerSearchBar-CrFgkCQ0.js";import"./chevron-up-Dq83_18J.js";import"./chevron-down-DrKAguLe.js";import"./cross-CpHoxb52.js";import"./PdfViewerSidebar-CzlrdncM.js";import"./index-DyhoC8yA.js";import"./index-BDX0ToeT.js";import"./index-CGWCVoH4.js";import"./PdfViewerToolbar-CU4Annr4.js";import"./Button-YLbQ9ZAy.js";import"./chevron-right-w8lcgRd_.js";import"./Input-CdEHyPrX.js";import"./search-CELVamy6.js";import"./spin-CMdKw_n8.js";import"./error-LoVtbcsO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4236/df6e59d20a664f22ce02dd6343d64b5e1a25f198/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
