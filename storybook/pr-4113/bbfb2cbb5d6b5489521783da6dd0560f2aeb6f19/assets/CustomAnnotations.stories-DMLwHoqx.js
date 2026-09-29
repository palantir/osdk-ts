import{j as n}from"./iframe-zPv4Qzqd.js";import{B as e}from"./BasePdfViewer-CfAsQTWJ.js";import"./preload-helper-PJxV9mQF.js";import"./index-CBKHTxLZ.js";import"./BasePdfViewer.module.css-C5W_vXdS.js";import"./PdfViewerAnnotationLayer-ulPDHDq4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ch2QbRSG.js";import"./PdfViewerOutlineSidebar-DQ7TyYpi.js";import"./PdfViewerSidebarHeader-CqMyM5Pl.js";import"./useBaseUiId-DVjOyWmw.js";import"./useControlled-0ViRdTwH.js";import"./CompositeRoot-BfSNPEGA.js";import"./CompositeItem-CdWRe_DK.js";import"./ToolbarRootContext-CKYx1umj.js";import"./composite-B2SBl57g.js";import"./svgIconContainer-vb3o1rNS.js";import"./PdfViewerSearchBar-DEIYkn_H.js";import"./chevron-up-CFXIk0Il.js";import"./chevron-down-Bq07BQjw.js";import"./cross--dxagHok.js";import"./PdfViewerSidebar-CFYr5LO-.js";import"./index-BFqEQ3NN.js";import"./index-LSfGN98D.js";import"./index-Dqw7fhLs.js";import"./PdfViewerToolbar-D5rsPTJ6.js";import"./Button-Bpg2U0NI.js";import"./chevron-right-Cfl2mPbj.js";import"./Input-BZ1hKq3S.js";import"./search-CQlxqsQe.js";import"./spin-DcXBhkmL.js";import"./error-DWSHpljN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4113/bbfb2cbb5d6b5489521783da6dd0560f2aeb6f19/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
