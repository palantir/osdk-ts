import{j as n}from"./iframe-DiEonpI4.js";import{B as e}from"./BasePdfViewer-BfbbWIQa.js";import"./preload-helper-CK-k_2Vt.js";import"./index-emI1jrST.js";import"./BasePdfViewer.module.css-BQT-XRwc.js";import"./PdfViewerAnnotationLayer-QUcdYEa0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBERQeAC.js";import"./PdfViewerOutlineSidebar-C7CgIbKV.js";import"./PdfViewerSidebarHeader-D5Y3XgZE.js";import"./useBaseUiId-vTxFcR1B.js";import"./useControlled-BXxbQ2_H.js";import"./CompositeRoot-DGseI8pu.js";import"./CompositeItem-Cogr6rzU.js";import"./ToolbarRootContext-D-kjOzEz.js";import"./composite-CGrPsAxE.js";import"./svgIconContainer-HP-rjnIi.js";import"./PdfViewerSearchBar-CkDdtU0N.js";import"./chevron-up-BaNE1fiu.js";import"./chevron-down-C-r7fv-U.js";import"./cross-Dk3kDcDy.js";import"./PdfViewerSidebar-CW9f_rpx.js";import"./index-DL9fAFGC.js";import"./index-CLd9qPG2.js";import"./index-Ds0MF9yD.js";import"./PdfViewerToolbar-CCpbMrqw.js";import"./Button-DUYCFQGz.js";import"./chevron-right-qoy3gT1g.js";import"./Input-DeBBkK_j.js";import"./search-BguN7d-l.js";import"./spin-Du-s2C-g.js";import"./error-DiLLCp_W.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4047/897a2fbd319bb6a3db0ae54a81428beaa8988473/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
