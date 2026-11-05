import{j as n}from"./iframe-wedJSnud.js";import{B as e}from"./BasePdfViewer-BlEns6UD.js";import"./preload-helper-DcVHnV_i.js";import"./index-BsI8HLJz.js";import"./BasePdfViewer.module.css-BmHQgRZT.js";import"./PdfViewerAnnotationLayer-BzF-vf7g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwXD7kTR.js";import"./PdfViewerOutlineSidebar-40GgI1bf.js";import"./PdfViewerSidebarHeader-DN6pJeFS.js";import"./useBaseUiId-BGqSil3r.js";import"./useControlled-RZ5VMgMB.js";import"./CompositeRoot-BiB9jmmP.js";import"./CompositeItem-DUPpieEN.js";import"./ToolbarRootContext-Bs5SB0fX.js";import"./composite-CGFDwdnq.js";import"./svgIconContainer-CJJHSkNv.js";import"./PdfViewerSearchBar-BWYt__ME.js";import"./chevron-up-C_Mmr20i.js";import"./chevron-down-DkT3Qzaa.js";import"./cross-CxbFlbaI.js";import"./PdfViewerSidebar-Bo8cbeia.js";import"./index-DWYfh9fQ.js";import"./index-Nf3FTUKP.js";import"./index-BCNEaR-3.js";import"./PdfViewerToolbar-CrbUxGf-.js";import"./Button-UisMFP1d.js";import"./chevron-right-DCSWp4TG.js";import"./Input-Z8OuidlN.js";import"./search-B0U_YWQT.js";import"./spin-DmOUjvKt.js";import"./error-BFWppJ2G.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4348/29aedf3998e8b77ff8515d232d80094c4ae1b470/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
