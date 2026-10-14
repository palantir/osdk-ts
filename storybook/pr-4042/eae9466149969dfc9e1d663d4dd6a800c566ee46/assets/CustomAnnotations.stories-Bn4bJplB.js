import{j as n}from"./iframe-DxocSyIf.js";import{B as e}from"./BasePdfViewer-DpnbjFod.js";import"./preload-helper-D56zqST7.js";import"./index-DfYEtxmC.js";import"./BasePdfViewer.module.css-JXYNR7ak.js";import"./PdfViewerAnnotationLayer-DagPR5yc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Baqxu7ts.js";import"./PdfViewerOutlineSidebar-DOnBRxg0.js";import"./PdfViewerSidebarHeader-Dm_zaxN0.js";import"./useBaseUiId--lgIG0_P.js";import"./useControlled-BTWGqHDE.js";import"./CompositeRoot-Bh71PsqW.js";import"./CompositeItem-idLXSPQh.js";import"./ToolbarRootContext-B-Vz0eah.js";import"./composite-Cghpi3uk.js";import"./svgIconContainer-Bj1sIzvv.js";import"./PdfViewerSearchBar-Cac4k3Xi.js";import"./chevron-up-BSkLi7Xh.js";import"./chevron-down-myOLqEz6.js";import"./cross-CVx988bJ.js";import"./PdfViewerSidebar-DsRryVdo.js";import"./index-DNErSg1e.js";import"./index-02gWXqYk.js";import"./index-_cAiPY8y.js";import"./PdfViewerToolbar-Bculs23X.js";import"./Button-wSc2Yx62.js";import"./chevron-right-oGfeYakA.js";import"./Input-Bw3XbqGk.js";import"./search-CQuVvSo7.js";import"./spin-DHDFV3Jy.js";import"./error-CCnxuUsF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4042/eae9466149969dfc9e1d663d4dd6a800c566ee46/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
