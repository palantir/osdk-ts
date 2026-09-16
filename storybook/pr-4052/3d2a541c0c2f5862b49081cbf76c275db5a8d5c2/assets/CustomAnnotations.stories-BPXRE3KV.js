import{j as n}from"./iframe-Ca2h9Cb_.js";import{B as e}from"./BasePdfViewer-CgGfxIuC.js";import"./preload-helper-DAf9eX-V.js";import"./index-DWThxo2f.js";import"./BasePdfViewer.module.css-AXz1d2Pv.js";import"./PdfViewerAnnotationLayer-BUAiGBNE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEcJ5HcV.js";import"./PdfViewerOutlineSidebar-CpMCLfEN.js";import"./PdfViewerSidebarHeader-DaMcpSd9.js";import"./useBaseUiId-BeaWeUqC.js";import"./useControlled-DgBClk7b.js";import"./CompositeRoot-Cdk3lUd_.js";import"./CompositeItem-Bm7sSUUb.js";import"./ToolbarRootContext-Dw75y5NP.js";import"./composite-BHDhYMvG.js";import"./svgIconContainer-Bn-48Fxt.js";import"./PdfViewerSearchBar-Bgm8WYsB.js";import"./chevron-up-oGk9h3X6.js";import"./chevron-down-BbQxi628.js";import"./cross-kbTjrbem.js";import"./PdfViewerSidebar-Dp783_V3.js";import"./index-HOlceD77.js";import"./index-khJGmqWk.js";import"./index-BQgpEwzp.js";import"./PdfViewerToolbar-BKttRL4O.js";import"./Button-DuNKOwnz.js";import"./chevron-right-DygmTvSu.js";import"./Input-DJ7coF_2.js";import"./search-CuSTqVc7.js";import"./spin-tfiRhGBS.js";import"./error-JTYK1w6o.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4052/3d2a541c0c2f5862b49081cbf76c275db5a8d5c2/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
