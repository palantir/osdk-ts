import{j as n}from"./iframe-DUqIITxH.js";import{B as e}from"./BasePdfViewer-gIAh5FqB.js";import"./preload-helper-DRNNkrJi.js";import"./index-CfKxCZr0.js";import"./BasePdfViewer.module.css-n5Cnl6cJ.js";import"./PdfViewerAnnotationLayer-D4XGeHAk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9GpTbwc.js";import"./PdfViewerOutlineSidebar-2h33ddJ1.js";import"./PdfViewerSidebarHeader-SbywsTiT.js";import"./useBaseUiId-kMUnh5gd.js";import"./useControlled-DnwEhQGz.js";import"./CompositeRoot-D8brjfqv.js";import"./CompositeItem-DA_aeyOT.js";import"./ToolbarRootContext-B4KY25qe.js";import"./composite-DJRtaiwf.js";import"./svgIconContainer-6SFRCpjB.js";import"./PdfViewerSearchBar-Dcxqa47Q.js";import"./chevron-up-D34ATitk.js";import"./chevron-down-5LJm5ghw.js";import"./cross-CNr5tSf5.js";import"./PdfViewerSidebar-DpwA9Y1z.js";import"./index-CSve1EYF.js";import"./index-Dsym8n4N.js";import"./index-GkXmmaX0.js";import"./PdfViewerToolbar-C49ptSCy.js";import"./Button-DxPOU_Mc.js";import"./chevron-right-ZVvoedug.js";import"./Input-Ck3038DH.js";import"./search-BZkb1jfI.js";import"./spin-BWdHFI0N.js";import"./error-BA5REKvs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4292/bae12cad6149bd846060663d28ca26abb35e4236/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
