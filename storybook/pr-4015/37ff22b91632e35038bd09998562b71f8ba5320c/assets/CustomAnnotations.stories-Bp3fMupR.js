import{j as n}from"./iframe-DuKb9b-g.js";import{B as e}from"./BasePdfViewer-MmFnUZVK.js";import"./preload-helper-CmBjm-d1.js";import"./index-CBTF18Y_.js";import"./BasePdfViewer.module.css-y3RTnGfa.js";import"./PdfViewerAnnotationLayer-HaWbeQIB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_z5bC4w.js";import"./PdfViewerOutlineSidebar-Dk3Ghgyy.js";import"./PdfViewerSidebarHeader-DxG0n6qo.js";import"./useBaseUiId-NQWDjIJs.js";import"./useControlled-Cq3GxJKq.js";import"./CompositeRoot-BpV2z7hj.js";import"./CompositeItem-nEfjeVhf.js";import"./ToolbarRootContext-B06gfqsL.js";import"./composite-DGpno2Zs.js";import"./svgIconContainer-D2G78cDZ.js";import"./PdfViewerSearchBar-Csc76ePm.js";import"./chevron-up-BbZJaETR.js";import"./chevron-down-Cn1BrU6q.js";import"./cross-BuyNDB8o.js";import"./PdfViewerSidebar-Djvr1z3H.js";import"./index-DYJuDcIp.js";import"./index-COA_z0C-.js";import"./index-rSrw9_A6.js";import"./PdfViewerToolbar-BIGoPLkL.js";import"./Button--z0-7-P6.js";import"./chevron-right-CgmzZFDC.js";import"./Input-Cn1-EvYg.js";import"./search-DorovZ71.js";import"./spin-BRAmWsJR.js";import"./error-F4sFwWip.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/37ff22b91632e35038bd09998562b71f8ba5320c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
