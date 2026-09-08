import{j as n}from"./iframe-gHIh_ABY.js";import{B as e}from"./BasePdfViewer-CPn4-Zv1.js";import"./preload-helper-C--wqxNR.js";import"./index-DyPMxe-T.js";import"./BasePdfViewer.module.css-Dz4r9Wl8.js";import"./PdfViewerAnnotationLayer-BEFq6-ZS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUYnTjGF.js";import"./PdfViewerOutlineSidebar-CDhq4KAO.js";import"./PdfViewerSidebarHeader-B3YPr1NP.js";import"./useBaseUiId-dqf5kUOq.js";import"./useControlled-C8OoR1Ph.js";import"./CompositeRoot-BfFT4DLO.js";import"./CompositeItem-ChBkH7yO.js";import"./ToolbarRootContext-BaCzfuCb.js";import"./composite-G9H6ILMG.js";import"./svgIconContainer-BsQinfdF.js";import"./PdfViewerSearchBar-CMWp_BKN.js";import"./chevron-up-2ZPJJ6TC.js";import"./chevron-down-C9sYZ9oi.js";import"./cross-DecwR9UF.js";import"./PdfViewerSidebar-Cyfz_y0h.js";import"./index-DPBLKrFq.js";import"./index-CWxda7K-.js";import"./index-D1LhnjWM.js";import"./PdfViewerToolbar-HENPbmG6.js";import"./Button-bbhva_Wr.js";import"./chevron-right-DhqUlDOj.js";import"./Input-CphmVuHr.js";import"./search-Blg9RF01.js";import"./spin-DswvesZM.js";import"./error-Bs-UYVj5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3860/3241a7aa4263eb00214340a94ac0ea394eb9d6a1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
