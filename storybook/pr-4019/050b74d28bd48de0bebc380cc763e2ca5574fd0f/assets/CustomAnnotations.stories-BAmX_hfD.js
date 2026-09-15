import{j as n}from"./iframe-oQpn4zur.js";import{B as e}from"./BasePdfViewer-DEszZZ_X.js";import"./preload-helper-Cmjd7BI4.js";import"./index-D2rifVxK.js";import"./BasePdfViewer.module.css-nhM1T9PL.js";import"./PdfViewerAnnotationLayer-DCO2R-Q3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-S4m7MLik.js";import"./PdfViewerOutlineSidebar-BekNqnBu.js";import"./PdfViewerSidebarHeader-Ci_nCqve.js";import"./useBaseUiId-pVATQNHL.js";import"./useControlled-DKwwdhXV.js";import"./CompositeRoot-D5KFrtct.js";import"./CompositeItem-M0o16Fhw.js";import"./ToolbarRootContext-C0a0ALA7.js";import"./composite-C_bfQ-PM.js";import"./svgIconContainer-CsxtAqM7.js";import"./PdfViewerSearchBar-CWbs7l1i.js";import"./chevron-up-BFObjuh_.js";import"./chevron-down-DhcH1mZx.js";import"./cross-xvCB5p22.js";import"./PdfViewerSidebar-CT1ot6Kz.js";import"./index-CP1r_S59.js";import"./index-BgH4UIQM.js";import"./index--_6_irpc.js";import"./PdfViewerToolbar-Ct6Wak7r.js";import"./Button-DcQk0Vz0.js";import"./chevron-right-CLbrwgmd.js";import"./Input-BTa_bWxE.js";import"./search-CwzMMbdj.js";import"./spin-C3Ogg_i0.js";import"./error-G32g_aWE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/050b74d28bd48de0bebc380cc763e2ca5574fd0f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
