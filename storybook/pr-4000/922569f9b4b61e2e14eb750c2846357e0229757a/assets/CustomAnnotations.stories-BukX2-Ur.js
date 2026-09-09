import{j as n}from"./iframe-BBZCzStV.js";import{B as e}from"./BasePdfViewer-BhFGIiRv.js";import"./preload-helper-5SQDyWdl.js";import"./index-B0mBcXI4.js";import"./BasePdfViewer.module.css-Dh9mRXQP.js";import"./PdfViewerAnnotationLayer-Bnbe9fPX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CH1w2Ooq.js";import"./PdfViewerOutlineSidebar-DM76Ikc1.js";import"./PdfViewerSidebarHeader-Da2NYmxb.js";import"./useBaseUiId-B2Dwi3UQ.js";import"./useControlled-DoPklQtk.js";import"./CompositeRoot-BYRK20jY.js";import"./CompositeItem-DCNZBIgo.js";import"./ToolbarRootContext-BJ5gq2Ug.js";import"./composite-CFasADcm.js";import"./svgIconContainer-DfBgJD9-.js";import"./PdfViewerSearchBar-BfNy5oCH.js";import"./chevron-up-BZkwAn-s.js";import"./chevron-down-CMFHrqJp.js";import"./cross-CPvMVENn.js";import"./PdfViewerSidebar-BVwcTkuS.js";import"./index-DbFsgQOw.js";import"./index-Cj4Q5m-x.js";import"./index-V3B_uiL2.js";import"./PdfViewerToolbar-IND3EP0G.js";import"./Button-CfbDmY7F.js";import"./chevron-right-DcA8KPgu.js";import"./Input-CSnQRyFu.js";import"./search-vc9aoGpm.js";import"./spin-Bz7g2JDD.js";import"./error-DTmGvXOz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4000/922569f9b4b61e2e14eb750c2846357e0229757a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
