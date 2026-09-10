import{j as n}from"./iframe-CJdhljqY.js";import{B as e}from"./BasePdfViewer-1NGhDUWH.js";import"./preload-helper-Dt50QPrM.js";import"./index-C_XWhVsk.js";import"./BasePdfViewer.module.css-Ct3t6DCZ.js";import"./PdfViewerAnnotationLayer-Bedp6CcU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnYHQZTk.js";import"./PdfViewerOutlineSidebar-BrvBrRU0.js";import"./PdfViewerSidebarHeader-CXhDvSV3.js";import"./useBaseUiId-DhLXeG5Q.js";import"./useControlled-DxG1_BRX.js";import"./CompositeRoot-BAJ3naX0.js";import"./CompositeItem-D1aj4ASS.js";import"./ToolbarRootContext-BUjzSc7s.js";import"./composite-CMxCP_fe.js";import"./svgIconContainer-DfUk_uW1.js";import"./PdfViewerSearchBar-DQQmDUZd.js";import"./chevron-up-C-egzvGQ.js";import"./chevron-down-HDas2nyI.js";import"./cross-xpJwG0PM.js";import"./PdfViewerSidebar-t5UYINmO.js";import"./index-JTXg-Z1T.js";import"./index-CiaROGr7.js";import"./index-PvN9PIAf.js";import"./PdfViewerToolbar-BCoSjyie.js";import"./Button-BW0xuowo.js";import"./chevron-right-DszgFpl5.js";import"./Input-MNhthrzu.js";import"./search-KsJ5YUkQ.js";import"./spin-DEdFVklQ.js";import"./error-De8eomlR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4007/6cb9820d6b90b9a24e244389c6a10c445de38152/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
