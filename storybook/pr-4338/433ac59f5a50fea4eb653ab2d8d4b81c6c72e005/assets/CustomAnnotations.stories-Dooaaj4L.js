import{j as n}from"./iframe-CeUrNeS8.js";import{B as e}from"./BasePdfViewer-CB1wmCvE.js";import"./preload-helper-kClf85ts.js";import"./index-CNUBLdqm.js";import"./BasePdfViewer.module.css-Coczaw2A.js";import"./PdfViewerAnnotationLayer-Bqt5dG6E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7WE6Fbo.js";import"./PdfViewerOutlineSidebar-BUbAtCFS.js";import"./PdfViewerSidebarHeader-CVdBfUNv.js";import"./useBaseUiId-B6MLv2cX.js";import"./useControlled-BdXF-8vf.js";import"./CompositeRoot-BQ6qOj-2.js";import"./CompositeItem-BTE8y1pl.js";import"./ToolbarRootContext-U-LssyxT.js";import"./composite-JSaF2J1s.js";import"./svgIconContainer-Zj5VM8lV.js";import"./PdfViewerSearchBar-DfimFwgg.js";import"./chevron-up-DE9YNH56.js";import"./chevron-down-DI7a3Uf5.js";import"./cross-DWoJVskS.js";import"./PdfViewerSidebar-DybcRBfO.js";import"./index-RhUwFwFJ.js";import"./index-CIe6uhG7.js";import"./index-UtGuVeZo.js";import"./PdfViewerToolbar-Bo-k_UYK.js";import"./Button-BKP5ADZQ.js";import"./chevron-right-tkb9_Bdr.js";import"./Input-C4TGes2g.js";import"./search-D1UF5EaJ.js";import"./spin-ncN1iS29.js";import"./error-BARMDzUn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4338/433ac59f5a50fea4eb653ab2d8d4b81c6c72e005/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
