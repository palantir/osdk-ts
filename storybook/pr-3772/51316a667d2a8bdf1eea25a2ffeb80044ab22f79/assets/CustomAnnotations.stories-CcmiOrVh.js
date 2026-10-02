import{j as n}from"./iframe-CdV0oMQK.js";import{B as e}from"./BasePdfViewer-_YUkL8Ip.js";import"./preload-helper-DYnb1G2Z.js";import"./index-CDOi726F.js";import"./BasePdfViewer.module.css-1R8mPqgO.js";import"./PdfViewerAnnotationLayer-4jpR5FVz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kwlfEsmr.js";import"./PdfViewerOutlineSidebar-QS-hyzlS.js";import"./PdfViewerSidebarHeader-CmdP3J5z.js";import"./useBaseUiId-qoWBNaJE.js";import"./useControlled-DmnLTdeY.js";import"./CompositeRoot-rbFLBB4H.js";import"./CompositeItem-BGsDUgBO.js";import"./ToolbarRootContext-sN3AAwIa.js";import"./composite-B01ubv1I.js";import"./svgIconContainer-Db8D1oyf.js";import"./PdfViewerSearchBar-B6bEhhbm.js";import"./chevron-up-D67n3SMa.js";import"./chevron-down-CAimFdfR.js";import"./cross-DjfMhKqA.js";import"./PdfViewerSidebar-BDDKVltQ.js";import"./index-C2SvAwVc.js";import"./index-DgVn8Y3N.js";import"./index-CtEXs2m1.js";import"./PdfViewerToolbar-JUmuqYNY.js";import"./Button-PcrXfoGH.js";import"./chevron-right-BCYkaIt3.js";import"./Input-DcsAtJ_5.js";import"./search-KAXH_KdC.js";import"./spin-D9MBwagb.js";import"./error-DatCfw_J.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3772/51316a667d2a8bdf1eea25a2ffeb80044ab22f79/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
