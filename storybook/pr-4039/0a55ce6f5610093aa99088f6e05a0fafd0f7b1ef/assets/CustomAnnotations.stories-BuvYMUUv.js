import{j as n}from"./iframe-KFmuHpi6.js";import{B as e}from"./BasePdfViewer-DfSQWDU0.js";import"./preload-helper-DA3sodJk.js";import"./index-CBTTDR05.js";import"./BasePdfViewer.module.css-Da_ZWdm5.js";import"./PdfViewerAnnotationLayer-DS9UPdUS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_vu0iri.js";import"./PdfViewerOutlineSidebar-D3byc3mq.js";import"./PdfViewerSidebarHeader-CSpk1JqY.js";import"./useBaseUiId-CrXnmgW5.js";import"./useControlled-D9mNQgHG.js";import"./CompositeRoot-D5JUsLnP.js";import"./CompositeItem-BqmVxYgk.js";import"./ToolbarRootContext-DPZQ9O-r.js";import"./composite-Bv5M65D9.js";import"./svgIconContainer-D_AfyEve.js";import"./PdfViewerSearchBar-gK1E-06N.js";import"./chevron-up-DPcbr57D.js";import"./chevron-down-BDNkXUjZ.js";import"./cross-BxqJFApi.js";import"./PdfViewerSidebar-DriO-lSz.js";import"./index-tH9oz2kR.js";import"./index-BkMhET5E.js";import"./index-Di_4vTer.js";import"./PdfViewerToolbar-rrN1UZx-.js";import"./Button-CS75p-oM.js";import"./chevron-right-x5yoYf1-.js";import"./Input-B-ppJqtJ.js";import"./search-Bq4-27c_.js";import"./spin-CSWKqQPS.js";import"./error-BbvMlxw1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4039/0a55ce6f5610093aa99088f6e05a0fafd0f7b1ef/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
