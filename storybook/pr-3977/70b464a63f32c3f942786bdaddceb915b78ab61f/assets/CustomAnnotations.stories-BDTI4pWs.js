import{j as n}from"./iframe-Dnd58nRU.js";import{B as e}from"./BasePdfViewer-Bd756wRe.js";import"./preload-helper-Bacdch3y.js";import"./index-hYlZ2w7K.js";import"./BasePdfViewer.module.css-D9owyjOo.js";import"./PdfViewerAnnotationLayer-C1kCM6EB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bk8KzWQE.js";import"./PdfViewerOutlineSidebar-DzTigfUF.js";import"./PdfViewerSidebarHeader-D97RwzZD.js";import"./useBaseUiId-QDvzqdbv.js";import"./useControlled-DMuhh4MF.js";import"./CompositeRoot-DnLXbaAd.js";import"./CompositeItem-CHl5HG0C.js";import"./ToolbarRootContext-DfzKIhjA.js";import"./composite-Cv9S1-0v.js";import"./svgIconContainer-BHVYL7Dt.js";import"./PdfViewerSearchBar-DI5HM6Ek.js";import"./chevron-up-9fg6IA4z.js";import"./chevron-down-BXQTBdLk.js";import"./cross-DMNj6xwh.js";import"./PdfViewerSidebar-sO2IaMm-.js";import"./index-DIWs-l-i.js";import"./index-DlC_w9JR.js";import"./index-DuJ2F_r3.js";import"./PdfViewerToolbar-BkcVKXDP.js";import"./Button-DKxF8-HR.js";import"./chevron-right-u5iuH35h.js";import"./Input-C8T687yb.js";import"./search-CbjmGrOZ.js";import"./spin-DxMOTRN7.js";import"./error-BmtsW4Hj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3977/70b464a63f32c3f942786bdaddceb915b78ab61f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
