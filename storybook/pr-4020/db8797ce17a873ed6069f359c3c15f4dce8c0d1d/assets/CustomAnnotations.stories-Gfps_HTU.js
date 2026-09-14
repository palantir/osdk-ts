import{j as n}from"./iframe-xaYq_0YR.js";import{B as e}from"./BasePdfViewer-DTxMo7fI.js";import"./preload-helper-CtEamZCu.js";import"./index-BAZUgVLK.js";import"./BasePdfViewer.module.css-yvuoOrZO.js";import"./PdfViewerAnnotationLayer-CM0RvKEL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFFU5hnG.js";import"./PdfViewerOutlineSidebar-CvYbqmKO.js";import"./PdfViewerSidebarHeader-B5lUK1GI.js";import"./useBaseUiId-CuYx4u3b.js";import"./useControlled-Dxi7lg4n.js";import"./CompositeRoot-DWktMQsZ.js";import"./CompositeItem-BRCxLN7a.js";import"./ToolbarRootContext-BsrWQvwk.js";import"./composite-CLd-Xsnk.js";import"./svgIconContainer-B7c-1n-U.js";import"./PdfViewerSearchBar-DSadrHWu.js";import"./chevron-up-DPpnrDxa.js";import"./chevron-down-C-g4LLea.js";import"./cross-BYWrVYOR.js";import"./PdfViewerSidebar-NzIrHxhE.js";import"./index-CnactCyz.js";import"./index-CyyrZFiN.js";import"./index-DF2Gn0NH.js";import"./PdfViewerToolbar-BrCLgd76.js";import"./Button-DeJ4BDKP.js";import"./chevron-right-D0UvM-kp.js";import"./Input-DH1br5He.js";import"./search-CSNqrmY1.js";import"./spin-Bx9MP4XR.js";import"./error-C61gPazY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/db8797ce17a873ed6069f359c3c15f4dce8c0d1d/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
