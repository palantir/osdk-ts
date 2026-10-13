import{j as n}from"./iframe-CBRNe0Dg.js";import{B as e}from"./BasePdfViewer-04g7vQiD.js";import"./preload-helper-DJi7bbUl.js";import"./index-BSRDLVEM.js";import"./BasePdfViewer.module.css-DPpHIgJX.js";import"./PdfViewerAnnotationLayer-DFqZrsJ0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHuYHA7N.js";import"./PdfViewerOutlineSidebar-B6ONdN3t.js";import"./PdfViewerSidebarHeader-DOc2L7XY.js";import"./useBaseUiId-D_HMOfD5.js";import"./useControlled-DvLu4sEA.js";import"./CompositeRoot-C920c645.js";import"./CompositeItem-Di3J0NmB.js";import"./ToolbarRootContext-DULN64W3.js";import"./composite-BuD5KbGT.js";import"./svgIconContainer-BBVFHmV2.js";import"./PdfViewerSearchBar-DlLXRQeF.js";import"./chevron-up-Cv2oPjUI.js";import"./chevron-down-B0oPEK-O.js";import"./cross-DAsoWhzO.js";import"./PdfViewerSidebar-CA9V5cvp.js";import"./index-BZ5chbDc.js";import"./index-DyLUaQFL.js";import"./index-BL4-PH8Q.js";import"./PdfViewerToolbar-Ccsr0-5H.js";import"./Button-BwFbzqgO.js";import"./chevron-right-IAhUlUF1.js";import"./Input-DE2kadHj.js";import"./search-vRSw7SVB.js";import"./spin-DpOy9Ptu.js";import"./error-BdLYnG0k.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4223/d80e0a18caddc4f7c8703adc31c32bc892865c5c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
