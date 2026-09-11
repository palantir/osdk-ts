import{j as n}from"./iframe-C4E-g_Np.js";import{B as e}from"./BasePdfViewer-DGnjWvkP.js";import"./preload-helper-rW2p5jqX.js";import"./index-CzqkLMMI.js";import"./BasePdfViewer.module.css-CwTYn70_.js";import"./PdfViewerAnnotationLayer-BYDK9FBC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cx6CWEn3.js";import"./PdfViewerOutlineSidebar-v7_k5ABR.js";import"./PdfViewerSidebarHeader-BDV3Tx_N.js";import"./useBaseUiId-B-PzIYIN.js";import"./useControlled-CQT-2p8e.js";import"./CompositeRoot-Cnqg15jt.js";import"./CompositeItem-DpdLDIC_.js";import"./ToolbarRootContext-DAbASYAb.js";import"./composite-BnlE1__B.js";import"./svgIconContainer-i3Vzui20.js";import"./PdfViewerSearchBar-CNfMqbfQ.js";import"./chevron-up-BwfaiWeE.js";import"./chevron-down-CUSU7y7B.js";import"./cross-6-c7L2_r.js";import"./PdfViewerSidebar-DVfbrUW5.js";import"./index-4qPHZMUz.js";import"./index-D1JR9Ik6.js";import"./index-BMt0vC51.js";import"./PdfViewerToolbar-DZMzbSPE.js";import"./Button-kJtgGGYx.js";import"./chevron-right-Bk_fe5Dc.js";import"./Input-BPR-03z-.js";import"./search-CfqJuXpO.js";import"./spin-Be8YbP27.js";import"./error-2WKWP45F.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4027/c01bceab37d5a1248c535cb7c415d909718a9ccd/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
