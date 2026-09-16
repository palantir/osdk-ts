import{j as n}from"./iframe-CrxwL2-E.js";import{B as e}from"./BasePdfViewer-YlbaJvnw.js";import"./preload-helper-D8KRM-Lu.js";import"./index-CnRzHgPn.js";import"./BasePdfViewer.module.css-wYXOFxnf.js";import"./PdfViewerAnnotationLayer-C6rr1Aub.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mb2Yj-91.js";import"./PdfViewerOutlineSidebar-CRigrY3N.js";import"./PdfViewerSidebarHeader-CHk4JsY-.js";import"./useBaseUiId-CHWsF01c.js";import"./useControlled-CMyIOoxO.js";import"./CompositeRoot-C-JCyI2S.js";import"./CompositeItem-DXFhogU1.js";import"./ToolbarRootContext-Bp3YN5W7.js";import"./composite-D_Dq2ROx.js";import"./svgIconContainer-BZaQ0M_F.js";import"./PdfViewerSearchBar-BkVEs7Lw.js";import"./chevron-up-D0Czmpz5.js";import"./chevron-down-DTO6IXlJ.js";import"./cross-tJCZU9dn.js";import"./PdfViewerSidebar-DnOdKud1.js";import"./index-BrHupWVl.js";import"./index-Bk2-PvCo.js";import"./index-C9NLr5O0.js";import"./PdfViewerToolbar-DD1bkkxn.js";import"./Button-BPy55ub1.js";import"./chevron-right-DUGFfGd_.js";import"./Input-WST8cByM.js";import"./search-KIDsIAAK.js";import"./spin-DGX_kMTT.js";import"./error-CIWz4OVj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4053/862ad89c75ec980612c56a854beb40f4aa3a1bac/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
