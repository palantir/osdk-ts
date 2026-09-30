import{j as n}from"./iframe-DRNk89ZH.js";import{B as e}from"./BasePdfViewer-C_xqcC6u.js";import"./preload-helper-CL4j9Mgj.js";import"./index-CS7yPxi2.js";import"./BasePdfViewer.module.css-DMQcBg_k.js";import"./PdfViewerAnnotationLayer-CVK1pxjW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CH2zpf9s.js";import"./PdfViewerOutlineSidebar-B54pDTiH.js";import"./PdfViewerSidebarHeader-wFIdG2ZE.js";import"./useBaseUiId-DA__XCsT.js";import"./useControlled-CE505VKa.js";import"./CompositeRoot-l49tAaAH.js";import"./CompositeItem-DF-AHu7i.js";import"./ToolbarRootContext-BDHJtdhK.js";import"./composite-8utJ-QhI.js";import"./svgIconContainer-BYMe6jPQ.js";import"./PdfViewerSearchBar-BKRUJfUt.js";import"./chevron-up-Cc-nqik3.js";import"./chevron-down-CphPepB3.js";import"./cross-CdajDpt0.js";import"./PdfViewerSidebar-CcSwzjBS.js";import"./index-CMtFadZ1.js";import"./index-DZWIzD1L.js";import"./index-Du8pqTKc.js";import"./PdfViewerToolbar-DQhpaxAG.js";import"./Button-Br4k3ffi.js";import"./chevron-right-BHGFlhB-.js";import"./Input-DehlDyjB.js";import"./search-Cy6sHHpP.js";import"./spin-Dxm1yMxQ.js";import"./error-B_EjGR4-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4117/ec1ebb04d8bd87c8286bf53a2b6dba2a0cc9cf96/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
