import{j as n}from"./iframe-DNB7pKwx.js";import{B as e}from"./BasePdfViewer-BTw7cmvu.js";import"./preload-helper-zsyjqppt.js";import"./index-CO8W_kBY.js";import"./BasePdfViewer.module.css-DDs2Flbe.js";import"./PdfViewerAnnotationLayer-Dtg3fcf0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmvvQGLP.js";import"./PdfViewerOutlineSidebar-DHS6bDcn.js";import"./PdfViewerSidebarHeader-DB6Xgchs.js";import"./useBaseUiId-CFk2utP-.js";import"./useControlled-CZirorca.js";import"./CompositeRoot-Bby4hQdF.js";import"./CompositeItem-DZ0O8IVJ.js";import"./ToolbarRootContext-Bsj6zD7P.js";import"./composite-Bsz5rAKx.js";import"./svgIconContainer-C0yR1K-j.js";import"./PdfViewerSearchBar-C_Qllt7U.js";import"./chevron-up-BlSwyyPp.js";import"./chevron-down-DkSb3Fq2.js";import"./cross-Z_Cymmuf.js";import"./PdfViewerSidebar-FlaK-F-a.js";import"./index-B7VbqBWX.js";import"./index-Cw7J0xRI.js";import"./index-BWzAq-lx.js";import"./PdfViewerToolbar-De1eaq11.js";import"./Button-HIyOMk5a.js";import"./chevron-right-B2jtW0n6.js";import"./Input-D7pQEHrn.js";import"./search-B9wO7VDL.js";import"./spin-DMR9LJAG.js";import"./error-DTTI1i1g.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4030/13e0c0b5bbb5345cfe86bbe9407fd790f9053ada/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
