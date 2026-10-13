import{j as n}from"./iframe-DWBCJ7r1.js";import{B as e}from"./BasePdfViewer-9Ejr5YQs.js";import"./preload-helper-BmktTq8T.js";import"./index-Bhg8EF8N.js";import"./BasePdfViewer.module.css-Bmp-j0xm.js";import"./PdfViewerAnnotationLayer-DKht6ckX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-eBDLX_.js";import"./PdfViewerOutlineSidebar-BXMnVgj1.js";import"./PdfViewerSidebarHeader-B6vZPKjH.js";import"./useBaseUiId-CJSadFy5.js";import"./useControlled-CgT0Br7i.js";import"./CompositeRoot-kn4mChAV.js";import"./CompositeItem-BxdZFWZc.js";import"./ToolbarRootContext-Bk6-lFFc.js";import"./composite-DVYVQNYP.js";import"./svgIconContainer-BKXE3QcR.js";import"./PdfViewerSearchBar-DbRIzjaO.js";import"./chevron-up-CDZpmDro.js";import"./chevron-down-CIAO6ol2.js";import"./cross-D7B_UIT5.js";import"./PdfViewerSidebar-C--V-zs3.js";import"./index-YbLBVrX6.js";import"./index-1w6N5pNx.js";import"./index-DxYGP2pA.js";import"./PdfViewerToolbar-PeUhN3kM.js";import"./Button-Dgs8-VaM.js";import"./chevron-right-C9ClpRfD.js";import"./Input-CZ8A1Blk.js";import"./search-DqkstfId.js";import"./spin-D2TYR-GH.js";import"./error-BEytdPL1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4083/72615b6767d8207c0755904fc1ab2388556b148b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
