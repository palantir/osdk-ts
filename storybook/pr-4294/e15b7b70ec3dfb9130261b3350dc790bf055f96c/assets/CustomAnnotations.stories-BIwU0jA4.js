import{j as n}from"./iframe-DvwH42FA.js";import{B as e}from"./BasePdfViewer-B7bi0_cZ.js";import"./preload-helper-DEybsrDJ.js";import"./index-J26QqFGl.js";import"./BasePdfViewer.module.css-CEWEUkFU.js";import"./PdfViewerAnnotationLayer-y34A2W4e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kdeoEHhB.js";import"./PdfViewerOutlineSidebar-pqUcmRdt.js";import"./PdfViewerSidebarHeader-DrqyOgSq.js";import"./useBaseUiId-tOAOUQiJ.js";import"./useControlled-BhMAv1ps.js";import"./CompositeRoot-CC4Zn8iN.js";import"./CompositeItem-DeFaZgPZ.js";import"./ToolbarRootContext-BV3Ciak4.js";import"./composite-D2TyNObR.js";import"./svgIconContainer-BNUkj3Pd.js";import"./PdfViewerSearchBar-BFo6AIHR.js";import"./chevron-up-DW0uuBQK.js";import"./chevron-down-DclS5GqO.js";import"./cross-BN0lcpY0.js";import"./PdfViewerSidebar-B1OSQY-W.js";import"./index-BuEbl4ZZ.js";import"./index-BdNMK7Gf.js";import"./index-B7x2aIOS.js";import"./PdfViewerToolbar-KoW-14x9.js";import"./Button-C8MB2pGs.js";import"./chevron-right-BGUzGFTJ.js";import"./Input-CtJ7UKD6.js";import"./search-Cl4hDVdp.js";import"./spin-ZfWOqI3c.js";import"./error-yeSVRC55.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4294/e15b7b70ec3dfb9130261b3350dc790bf055f96c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
