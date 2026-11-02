import{j as n}from"./iframe-DyyhsHPN.js";import{B as e}from"./BasePdfViewer-B5x38vb_.js";import"./preload-helper-TecF9w53.js";import"./index-CvvBsxWW.js";import"./BasePdfViewer.module.css-Cv6RYHvx.js";import"./PdfViewerAnnotationLayer-D98O4aXQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcPTgMoA.js";import"./PdfViewerOutlineSidebar-B94LyE8T.js";import"./PdfViewerSidebarHeader-BPdNMQcu.js";import"./useBaseUiId-BJ6PIN04.js";import"./useControlled-u76uhEJm.js";import"./CompositeRoot-DBGQOlpG.js";import"./CompositeItem-COlnvMhp.js";import"./ToolbarRootContext-DTFkxjo1.js";import"./composite-Bsp9V2TC.js";import"./svgIconContainer-g2nhA_co.js";import"./PdfViewerSearchBar-CCQTY43m.js";import"./chevron-up-DZKDbO-O.js";import"./chevron-down-7VC2t8Hz.js";import"./cross-DpLnPIVs.js";import"./PdfViewerSidebar-CpoYqVGR.js";import"./index-Bb3R8qQ9.js";import"./index-BbJuL6dd.js";import"./index-CGUIbyJe.js";import"./PdfViewerToolbar-WGA_hwWS.js";import"./Button-xW-9IrmO.js";import"./chevron-right-BFQs2aD3.js";import"./Input-DLcXZfv5.js";import"./search-CPGUiXny.js";import"./spin-C9K0KF9l.js";import"./error-CHS0y63D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4311/b2bf5389613b1a9392699a2fa4587760cb7ae8bc/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
