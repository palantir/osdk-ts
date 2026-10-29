import{j as n}from"./iframe-BX7t1m7X.js";import{B as e}from"./BasePdfViewer-C9hiOjp-.js";import"./preload-helper-vs1LH6RG.js";import"./index-CWnEVrcD.js";import"./BasePdfViewer.module.css-DT6LT3zi.js";import"./PdfViewerAnnotationLayer-DRw058MQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-t7m8yv0g.js";import"./PdfViewerOutlineSidebar-Ct8RVlk3.js";import"./PdfViewerSidebarHeader-BpenkkuT.js";import"./useBaseUiId-Bmd4FcfN.js";import"./useControlled-CIYqr8vl.js";import"./CompositeRoot-zGI4VsJ4.js";import"./CompositeItem-DzuKssIv.js";import"./ToolbarRootContext-D-cnH9Zf.js";import"./composite-quGdXDs4.js";import"./svgIconContainer-B1_oouOg.js";import"./PdfViewerSearchBar-CxOVHWpm.js";import"./chevron-up-B_BYF8A4.js";import"./chevron-down-Bo5JkLwj.js";import"./cross-DHmTrIXq.js";import"./PdfViewerSidebar-Cv6B0qRU.js";import"./index-BjcqwpJd.js";import"./index-CKebcxwg.js";import"./index--sVV4r8-.js";import"./PdfViewerToolbar-C9afpQ-R.js";import"./Button-HBtTsXNU.js";import"./chevron-right-BDmrxXQe.js";import"./Input-ffGk1Cv0.js";import"./search-BOoacuk7.js";import"./spin-Du50ZcRd.js";import"./error-CwXOiZUY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/228f87a56c09b2c7adc2055e3979192228f1e712/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
