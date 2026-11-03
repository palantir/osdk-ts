import{j as n}from"./iframe-DdFNuve9.js";import{B as e}from"./BasePdfViewer-70rdZ9vX.js";import"./preload-helper-BF0zHEQ9.js";import"./index-COFBYoj0.js";import"./BasePdfViewer.module.css-CI7jKls-.js";import"./PdfViewerAnnotationLayer-Bmz7V9Ie.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFPrKPt7.js";import"./PdfViewerOutlineSidebar-D3MN3p5y.js";import"./PdfViewerSidebarHeader-Bh4Sq7t-.js";import"./useBaseUiId-DrBZRYC3.js";import"./useControlled-S1lUya7y.js";import"./CompositeRoot-2utz8fnL.js";import"./CompositeItem-D3i9R6e9.js";import"./ToolbarRootContext-lq7yZP_w.js";import"./composite-C6KVf4LM.js";import"./svgIconContainer-BqEjzz1q.js";import"./PdfViewerSearchBar-DQzA03CA.js";import"./chevron-up-Cv6kqjc1.js";import"./chevron-down-BQgLyWBH.js";import"./cross-B7UPksVb.js";import"./PdfViewerSidebar-C78XO6wV.js";import"./index-CWvJ-sqM.js";import"./index-CoKG21UB.js";import"./index-LHJitHOy.js";import"./PdfViewerToolbar-BS4Uz9QE.js";import"./Button-iraM8Bjb.js";import"./chevron-right-DtmB02li.js";import"./Input-CnU8KDdl.js";import"./search-CL3Pgcnj.js";import"./spin-DSNh-lPi.js";import"./error-BFEjzhDR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-2570/4c3e7d07ae81332e7fcf1f772039f404acb633eb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
