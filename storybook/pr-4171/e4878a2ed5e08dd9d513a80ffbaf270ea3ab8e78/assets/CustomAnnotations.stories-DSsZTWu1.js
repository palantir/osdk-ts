import{j as n}from"./iframe-5lzZwYPj.js";import{B as e}from"./BasePdfViewer-B0beJ41b.js";import"./preload-helper-WKlZEuzV.js";import"./index-DmpQA2dp.js";import"./BasePdfViewer.module.css-DoEtOZFl.js";import"./PdfViewerAnnotationLayer-s5Lbu9fq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cm58ahGV.js";import"./PdfViewerOutlineSidebar-1Y6siF3Z.js";import"./PdfViewerSidebarHeader-BdwPWdiT.js";import"./useBaseUiId-DfIUF55c.js";import"./useControlled-DHTN_Qw2.js";import"./CompositeRoot-BOASmM8_.js";import"./CompositeItem-DJOIGuOW.js";import"./ToolbarRootContext-BU433tXf.js";import"./composite-PZIUxoU6.js";import"./svgIconContainer-gxAyVnRe.js";import"./PdfViewerSearchBar-s6wSiYXz.js";import"./chevron-up-DWfPBGf0.js";import"./chevron-down-Djuiqxwk.js";import"./cross-Be5djBeG.js";import"./PdfViewerSidebar-Dtq2QNv5.js";import"./index-Dle2g3lV.js";import"./index-D7xhtA4Z.js";import"./index-CSotxX4i.js";import"./PdfViewerToolbar-BBSmra5v.js";import"./Button-bfW4GHY6.js";import"./chevron-right-LzilNgJA.js";import"./Input-DcJ3J1h2.js";import"./search-XZcqoY-Q.js";import"./spin-CTOSBvDx.js";import"./error-BAoHpMsF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4171/e4878a2ed5e08dd9d513a80ffbaf270ea3ab8e78/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
