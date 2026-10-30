import{j as n}from"./iframe-C8YzkEKz.js";import{B as e}from"./BasePdfViewer-CkaKjpac.js";import"./preload-helper-B8sJgEbx.js";import"./index-C-Vxog0Y.js";import"./BasePdfViewer.module.css-BA7A_9BY.js";import"./PdfViewerAnnotationLayer-CH3IuAdm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXFCnmgY.js";import"./PdfViewerOutlineSidebar-C-tNA03D.js";import"./PdfViewerSidebarHeader-D6K4wr_k.js";import"./useBaseUiId-4XXFTLSd.js";import"./useControlled-CCblLEGd.js";import"./CompositeRoot-BDdZPLcg.js";import"./CompositeItem-CygnWs4n.js";import"./ToolbarRootContext-B7rZx-C2.js";import"./composite-DSkWtwuy.js";import"./svgIconContainer-_UKoevk1.js";import"./PdfViewerSearchBar-oSpgjkVf.js";import"./chevron-up-B3GxVzPg.js";import"./chevron-down-DAumFw1T.js";import"./cross-CSu4FEcq.js";import"./PdfViewerSidebar-CvCDNR6Y.js";import"./index-DH0qhbVu.js";import"./index-Sammz_NI.js";import"./index-DWcboD_p.js";import"./PdfViewerToolbar-D9a1LluE.js";import"./Button-XJjUiBNX.js";import"./chevron-right-Bw3FZhoR.js";import"./Input-XPv58Dmh.js";import"./search-0pSkbv3G.js";import"./spin-Cs6Qienv.js";import"./error-C6Q2i6Lc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4297/9e3bd239df74ce717a630f6b50e2ce660c9c9988/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
