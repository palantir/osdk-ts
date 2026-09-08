import{j as n}from"./iframe-Ba48eLUQ.js";import{B as e}from"./BasePdfViewer-CF49o_5B.js";import"./preload-helper-BcQJohn9.js";import"./index-Biav_Ly4.js";import"./BasePdfViewer.module.css-JABsFHPv.js";import"./PdfViewerAnnotationLayer-BpIGgKs3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ivCpGV_4.js";import"./PdfViewerOutlineSidebar-BT-ACsiY.js";import"./PdfViewerSidebarHeader-kovSxmz_.js";import"./useBaseUiId-BqKeDKog.js";import"./useControlled-Ci9ghEUN.js";import"./CompositeRoot-Dz7XVg-w.js";import"./CompositeItem-vF0jzrVV.js";import"./ToolbarRootContext-yUsbv0N5.js";import"./composite--55ShNCx.js";import"./svgIconContainer-Dsy6R3Hn.js";import"./PdfViewerSearchBar-DKsP3wnD.js";import"./chevron-up-oFC622XZ.js";import"./chevron-down-Dcg5i-52.js";import"./cross-CZ3u7Zqk.js";import"./PdfViewerSidebar-C4q2TjFc.js";import"./index-D7LGUR6n.js";import"./index-mue2Ao73.js";import"./index-D49E4xW3.js";import"./PdfViewerToolbar-DI9giwoS.js";import"./Button-DS_jYoZ2.js";import"./chevron-right-DMVk3QS3.js";import"./Input-J_HicyGE.js";import"./search-6WIx7b7M.js";import"./spin-BuCUKevU.js";import"./error-BM0l7F7K.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3979/8002d92c454748745f85b85e6afb4e81cd074973/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
