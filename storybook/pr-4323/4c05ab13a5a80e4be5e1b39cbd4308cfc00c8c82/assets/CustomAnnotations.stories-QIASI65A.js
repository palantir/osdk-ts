import{j as n}from"./iframe-KzP54st8.js";import{B as e}from"./BasePdfViewer-BcoF5F3E.js";import"./preload-helper-CZ0_peag.js";import"./index-B5nqBBWp.js";import"./BasePdfViewer.module.css-BgYeE_Q7.js";import"./PdfViewerAnnotationLayer-RKHi9tUp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwZHtxEe.js";import"./PdfViewerOutlineSidebar-DeEjHJty.js";import"./PdfViewerSidebarHeader-CDC6jPY9.js";import"./useBaseUiId-BA1-4W3F.js";import"./useControlled-DYaDm29f.js";import"./CompositeRoot-DBRO5K0z.js";import"./CompositeItem-5AIUt4bR.js";import"./ToolbarRootContext-xfunMS_N.js";import"./composite-CfrzbkGj.js";import"./svgIconContainer-B_IEjFSj.js";import"./PdfViewerSearchBar-Bi_8cLQM.js";import"./chevron-up-BJLKBzHn.js";import"./chevron-down-C83fmB_G.js";import"./cross-lnMk7dXt.js";import"./PdfViewerSidebar-CcVE_xx9.js";import"./index-BRJV35Oa.js";import"./index-Br5P7C2V.js";import"./index-BMXD2udq.js";import"./PdfViewerToolbar-BN1GL862.js";import"./Button-DwGnaIDL.js";import"./chevron-right-Dm5O3QCc.js";import"./Input-C6qaftyN.js";import"./search-Cb-crZIr.js";import"./spin-BjsZ--Nj.js";import"./error-CnxGfdHo.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/4c05ab13a5a80e4be5e1b39cbd4308cfc00c8c82/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
