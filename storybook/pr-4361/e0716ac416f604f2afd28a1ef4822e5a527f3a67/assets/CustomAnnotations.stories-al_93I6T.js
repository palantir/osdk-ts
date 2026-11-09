import{j as n}from"./iframe-BUHzazL7.js";import{B as e}from"./BasePdfViewer-CzXl2SC_.js";import"./preload-helper-7pS0gMeE.js";import"./index-DAbvms11.js";import"./BasePdfViewer.module.css-_APHTQji.js";import"./PdfViewerAnnotationLayer-x1Ui08Hd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEupebQE.js";import"./PdfViewerOutlineSidebar-CB16eZxU.js";import"./PdfViewerSidebarHeader-CS9JuolC.js";import"./useBaseUiId-C-XGHDUu.js";import"./useControlled-Bi-hDwUg.js";import"./CompositeRoot-D6qmuIsD.js";import"./CompositeItem-DKAPVnml.js";import"./ToolbarRootContext-CSl7A__z.js";import"./composite-CJH_Fsm0.js";import"./svgIconContainer-BXxi0rpR.js";import"./PdfViewerSearchBar-0tzSUxqJ.js";import"./chevron-up-BX1AyASN.js";import"./chevron-down-B-LRa2LO.js";import"./cross-7sgOHlSE.js";import"./PdfViewerSidebar-B7u8KC3b.js";import"./index-DO3hWjnR.js";import"./index-DxPhhuRZ.js";import"./index-4VpR6oTN.js";import"./PdfViewerToolbar-BxZciHHS.js";import"./Button-DSLJNPkR.js";import"./chevron-right-Dw-YlYEy.js";import"./Input-BfjcqwT4.js";import"./search-DMRlY3rF.js";import"./spin-D3VQPYPt.js";import"./error-yaL4IHLV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4361/e0716ac416f604f2afd28a1ef4822e5a527f3a67/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
