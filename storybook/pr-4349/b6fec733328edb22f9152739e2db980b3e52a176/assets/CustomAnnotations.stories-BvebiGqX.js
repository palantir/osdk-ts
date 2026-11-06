import{j as n}from"./iframe-6rmEYQ4q.js";import{B as e}from"./BasePdfViewer-JPBfqmlv.js";import"./preload-helper-CQFwNwom.js";import"./index-DHYmSSVn.js";import"./BasePdfViewer.module.css-DN5kEU0Y.js";import"./PdfViewerAnnotationLayer-Cm_m0udu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Btk5S2Zb.js";import"./PdfViewerOutlineSidebar-CScB4EZJ.js";import"./PdfViewerSidebarHeader-BwT2O6E-.js";import"./useBaseUiId-DutMLbwr.js";import"./useControlled-HeurI7_b.js";import"./CompositeRoot-gNHx4QdY.js";import"./CompositeItem-DuBtWhAd.js";import"./ToolbarRootContext-4ImLkhxO.js";import"./composite-6RMh68ZK.js";import"./svgIconContainer-BTOejcjp.js";import"./PdfViewerSearchBar-CRfY283W.js";import"./chevron-up-D9NgL-aI.js";import"./chevron-down-DJM0Z3o9.js";import"./cross-D-Hg8nzG.js";import"./PdfViewerSidebar-DBhq-Bin.js";import"./index-O1VLMwtD.js";import"./index-DTFmmgtm.js";import"./index--7GUs8pc.js";import"./PdfViewerToolbar-pM55WNmF.js";import"./Button-B5wqsid8.js";import"./chevron-right-DMzaZBoI.js";import"./Input-DHCuHilz.js";import"./search-BHn0KTJN.js";import"./spin-BrzpPv5V.js";import"./error-D2aG_W_b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4349/b6fec733328edb22f9152739e2db980b3e52a176/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
