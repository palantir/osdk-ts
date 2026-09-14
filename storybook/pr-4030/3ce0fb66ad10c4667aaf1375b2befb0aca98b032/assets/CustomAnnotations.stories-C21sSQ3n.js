import{j as n}from"./iframe-BpUcg2zG.js";import{B as e}from"./BasePdfViewer-v3WYOYLN.js";import"./preload-helper-B2UTcXFP.js";import"./index-7N6MUyxI.js";import"./BasePdfViewer.module.css-Cydyucur.js";import"./PdfViewerAnnotationLayer-CTNG6QY_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-NrJKiDfU.js";import"./PdfViewerOutlineSidebar-Ci-dbmOq.js";import"./PdfViewerSidebarHeader-CnMjKSrv.js";import"./useBaseUiId-Bv3X91q5.js";import"./useControlled-DdOa4Phy.js";import"./CompositeRoot-B9uqyKHl.js";import"./CompositeItem-C2o4b7lZ.js";import"./ToolbarRootContext-J_sWFt16.js";import"./composite-CFjjm5Bq.js";import"./svgIconContainer-g6F9ILDM.js";import"./PdfViewerSearchBar-B-RD01W2.js";import"./chevron-up-8DTQKUOU.js";import"./chevron-down-C_xyEVbG.js";import"./cross-Qiz9Cl6T.js";import"./PdfViewerSidebar-CS-2iGaw.js";import"./index-jSPKquLn.js";import"./index-DI63_yx7.js";import"./index-CvEJHu1s.js";import"./PdfViewerToolbar-DpXVa2zI.js";import"./Button-DFuiuLIT.js";import"./chevron-right-DBVR7KMq.js";import"./Input-DaPfruQG.js";import"./search-BLWHV2Ka.js";import"./spin-BY7G0iGE.js";import"./error-DVz4lqLc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4030/3ce0fb66ad10c4667aaf1375b2befb0aca98b032/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
