import{j as n}from"./iframe-bRpqvs55.js";import{B as e}from"./BasePdfViewer-D7gojIpW.js";import"./preload-helper-C6x1Ezwe.js";import"./index-BIhwktUh.js";import"./BasePdfViewer.module.css-C_PlccuL.js";import"./PdfViewerAnnotationLayer-3uSTF_yz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CE11E-rv.js";import"./PdfViewerOutlineSidebar-bIAyrzfO.js";import"./PdfViewerSidebarHeader-sniKAxPf.js";import"./useBaseUiId-DlF45aum.js";import"./useControlled-Bp_OFH7Y.js";import"./CompositeRoot-Ci2IE8La.js";import"./CompositeItem-Cz1caG-o.js";import"./ToolbarRootContext-BWkwcBK1.js";import"./composite-eCHjWiuj.js";import"./svgIconContainer-Bb8sMP7z.js";import"./PdfViewerSearchBar-Z17QHkGe.js";import"./chevron-up-BRTZt5KK.js";import"./chevron-down-hYv0Ya8W.js";import"./cross-W-3E-IIi.js";import"./PdfViewerSidebar-DGltmeOh.js";import"./index-sU6oAp9b.js";import"./index-D6zU7-mJ.js";import"./index-D5Q_aXSH.js";import"./PdfViewerToolbar-BUwvXhey.js";import"./Button-0l6_p_5m.js";import"./chevron-right-BCnZwXd9.js";import"./Input-prVuRYoh.js";import"./search-CyiikVap.js";import"./spin-DsGZYMOO.js";import"./error-DYIwcxmR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4039/94ec470f0f80642563640cddf28a3cc0b65e0185/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
