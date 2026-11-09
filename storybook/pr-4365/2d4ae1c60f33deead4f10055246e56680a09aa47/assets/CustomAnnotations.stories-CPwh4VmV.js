import{j as n}from"./iframe-CwoOGB90.js";import{B as e}from"./BasePdfViewer-EUKRUKn4.js";import"./preload-helper-zjr9DTNv.js";import"./index-CZrnOEge.js";import"./BasePdfViewer.module.css-Cl5AXmGC.js";import"./PdfViewerAnnotationLayer-lZgeNNGl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtZQl8-O.js";import"./PdfViewerOutlineSidebar-PigSJH7X.js";import"./PdfViewerSidebarHeader-Dkg6fvE7.js";import"./useBaseUiId-CG_HMXOZ.js";import"./useControlled-CyV_xO7n.js";import"./CompositeRoot-B0xHKeUX.js";import"./CompositeItem-uLTqCAuJ.js";import"./ToolbarRootContext-BHlqCq8I.js";import"./composite-CQ1lSzH1.js";import"./svgIconContainer-vpSdtZHg.js";import"./PdfViewerSearchBar-DsAoP_VR.js";import"./chevron-up-CqANW7ml.js";import"./chevron-down-CzfXAkFG.js";import"./cross-84LZ_c3o.js";import"./PdfViewerSidebar-VtvVPL-y.js";import"./index-DRO4fLjt.js";import"./index-BP83VGlc.js";import"./index-CtieK9tm.js";import"./PdfViewerToolbar-DDk12H0J.js";import"./Button-CzS_tZvQ.js";import"./chevron-right-cogNMC6o.js";import"./Input-Bfvllh0J.js";import"./search-B4Rhn5WX.js";import"./spin-CnMMIvao.js";import"./error-D1I108xZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4365/2d4ae1c60f33deead4f10055246e56680a09aa47/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
