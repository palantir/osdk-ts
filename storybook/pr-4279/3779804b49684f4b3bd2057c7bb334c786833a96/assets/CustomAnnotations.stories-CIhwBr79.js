import{j as n}from"./iframe-Cs9u2FNJ.js";import{B as e}from"./BasePdfViewer-CP_NenI_.js";import"./preload-helper-DEnCUJIu.js";import"./index-DWrTTHxb.js";import"./BasePdfViewer.module.css-CMotn3LB.js";import"./PdfViewerAnnotationLayer-C2rv0sPR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C77q0Sgl.js";import"./PdfViewerOutlineSidebar-DwSQBnOJ.js";import"./PdfViewerSidebarHeader-CJa6_SUy.js";import"./useBaseUiId-B04InLuC.js";import"./useControlled-DWa2oiP8.js";import"./CompositeRoot-CvQyq0eu.js";import"./CompositeItem-D6sZhCIa.js";import"./ToolbarRootContext-BXn8yWld.js";import"./composite-DoMN_SNj.js";import"./svgIconContainer-bmBt8PNs.js";import"./PdfViewerSearchBar-DDO5DhkJ.js";import"./chevron-up-DoSMFkZ5.js";import"./chevron-down-D0MyTtqt.js";import"./cross-Jki0Zf7X.js";import"./PdfViewerSidebar-qd3JoT-p.js";import"./index-C2_rmR-A.js";import"./index-B9LdyWis.js";import"./index-DSEOcFQR.js";import"./PdfViewerToolbar-HhvvfMKE.js";import"./Button-_OIC0QgO.js";import"./chevron-right-Bhg7MGe5.js";import"./Input-BxHTTwfQ.js";import"./search-QgkUbhew.js";import"./spin-y56LYZg6.js";import"./error-92AiuNPh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4279/3779804b49684f4b3bd2057c7bb334c786833a96/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
