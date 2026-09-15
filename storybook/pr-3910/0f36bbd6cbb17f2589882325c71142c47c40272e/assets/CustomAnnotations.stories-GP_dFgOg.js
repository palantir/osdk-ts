import{j as n}from"./iframe-BJHQLm8B.js";import{B as e}from"./BasePdfViewer-C_Bw5Z7U.js";import"./preload-helper-DNJi6hnI.js";import"./index-BUqmovkS.js";import"./BasePdfViewer.module.css-DHpb-OSd.js";import"./PdfViewerAnnotationLayer---UsaEK6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkmUC0ts.js";import"./PdfViewerOutlineSidebar-Dm77B5n8.js";import"./PdfViewerSidebarHeader-BrVKzhLV.js";import"./useBaseUiId-DFBTpUkK.js";import"./useControlled-91vTGa_9.js";import"./CompositeRoot-BoAD_eAE.js";import"./CompositeItem-BhxoDlh7.js";import"./ToolbarRootContext-0Z3xHtAl.js";import"./composite-BjkOmkjK.js";import"./svgIconContainer-CExwBPXa.js";import"./PdfViewerSearchBar-Cu62Shv0.js";import"./chevron-up-CxnX8a3a.js";import"./chevron-down-DOmpjpbt.js";import"./cross-DyhJ0eVv.js";import"./PdfViewerSidebar-CgdtLxDa.js";import"./index-mWeNCZ3t.js";import"./index-CY3jAq3i.js";import"./index-BXhIsTqo.js";import"./PdfViewerToolbar-JwnsC_zq.js";import"./Button-hiBWk-nL.js";import"./chevron-right-Ex1mTEus.js";import"./Input--rxzAq78.js";import"./search-CBF8qcQD.js";import"./spin-DMiRf5Xc.js";import"./error-msvagv_9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3910/0f36bbd6cbb17f2589882325c71142c47c40272e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
