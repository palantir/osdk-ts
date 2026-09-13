import{j as n}from"./iframe-DBDT7cai.js";import{B as e}from"./BasePdfViewer-Bl2kGDKJ.js";import"./preload-helper-CZUIUplp.js";import"./index-DNPTs4g2.js";import"./BasePdfViewer.module.css-CzS1R_zn.js";import"./PdfViewerAnnotationLayer-DSA0vRz_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uBQ5kQh2.js";import"./PdfViewerOutlineSidebar-DkXxoBV0.js";import"./PdfViewerSidebarHeader-CcftiD0N.js";import"./useBaseUiId-PRKCGqGz.js";import"./useControlled-BkrcSri5.js";import"./CompositeRoot-COrMMVoC.js";import"./CompositeItem-LxcE4aIz.js";import"./ToolbarRootContext-CsenKUBi.js";import"./composite-L0L9oW-4.js";import"./svgIconContainer-DGCHmuI4.js";import"./PdfViewerSearchBar-CBNQWGu6.js";import"./chevron-up-C3mNsh_9.js";import"./chevron-down-BPXQkSQg.js";import"./cross-DXxcDe7j.js";import"./PdfViewerSidebar-CYqxTMN-.js";import"./index-CBFMIrtK.js";import"./index-BsC2sM8x.js";import"./index-kRLOqZpZ.js";import"./PdfViewerToolbar-D4SsfpAa.js";import"./Button-DP4lNjcp.js";import"./chevron-right-DJNF187T.js";import"./Input-CitZWzLR.js";import"./search-CWHw7Uqg.js";import"./spin-BN8C2zey.js";import"./error-OvuTWF-e.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1922/b87553e4e3dc907aeb0b1c8956158d5ea69ff735/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
