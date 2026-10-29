import{j as n}from"./iframe-DuvqzVxr.js";import{B as e}from"./BasePdfViewer-TQxVuz2K.js";import"./preload-helper-B8Qd9CCZ.js";import"./index-CAuUDW48.js";import"./BasePdfViewer.module.css-CuDj74Ac.js";import"./PdfViewerAnnotationLayer-iZvtyZk2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqjnQFQU.js";import"./PdfViewerOutlineSidebar-CrFPpy2F.js";import"./PdfViewerSidebarHeader-WcIxy1NJ.js";import"./useBaseUiId-CfATFv1v.js";import"./useControlled-DqFDREqa.js";import"./CompositeRoot-PKxcOaKu.js";import"./CompositeItem-Dls_a94V.js";import"./ToolbarRootContext-BTKqEH_P.js";import"./composite-CdnuQNOj.js";import"./svgIconContainer-D3ZSKuHH.js";import"./PdfViewerSearchBar-DvsNsmWM.js";import"./chevron-up-C71Omjwi.js";import"./chevron-down-DD8mUth2.js";import"./cross-D-jw0QJK.js";import"./PdfViewerSidebar-D4VnBE8u.js";import"./index-fBn-5OyE.js";import"./index-Bs6MnhUR.js";import"./index-BfNHcsKt.js";import"./PdfViewerToolbar-CP6ybEwv.js";import"./Button-D-ya50CL.js";import"./chevron-right-DenyRtF8.js";import"./Input-Wm8tLy-0.js";import"./search-BeCT36MA.js";import"./spin-CA7ALgKx.js";import"./error-BIPDQryL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4282/1f4fa2874aaecd46fb2cbd0893310c50576bf02f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
