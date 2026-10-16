import{j as n}from"./iframe-CaMctZhM.js";import{B as e}from"./BasePdfViewer-W8nWJsmk.js";import"./preload-helper-DNMYa0Vf.js";import"./index-CtdxRtEM.js";import"./BasePdfViewer.module.css-BJvT7ETu.js";import"./PdfViewerAnnotationLayer-C8s7CY1I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hhWm256l.js";import"./PdfViewerOutlineSidebar-BhJ4CqaV.js";import"./PdfViewerSidebarHeader-CqGYG7PJ.js";import"./useBaseUiId-DXXB_44i.js";import"./useControlled-BPVVUVXR.js";import"./CompositeRoot-Df6kb7OS.js";import"./CompositeItem-DUaU3yqi.js";import"./ToolbarRootContext-NuzyP_Z2.js";import"./composite-hogSzUb-.js";import"./svgIconContainer--PB46C3w.js";import"./PdfViewerSearchBar-BUZ-cFPb.js";import"./chevron-up-Cah1q7v0.js";import"./chevron-down-BTzBC5n8.js";import"./cross-BG3r1-a6.js";import"./PdfViewerSidebar-GAZ2H3Fv.js";import"./index-BNjCIBi_.js";import"./index-D9rKK3Jx.js";import"./index-ClymoC-g.js";import"./PdfViewerToolbar-BR90ddul.js";import"./Button-BDNmY4BX.js";import"./chevron-right-BheObvZq.js";import"./Input-BXSwuDSh.js";import"./search-jWF7X9or.js";import"./spin-OWdj7l-5.js";import"./error-Cuicm8UG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3985/5bf1c8d85f2b2276e11ca56b629dfb8ea57cd1cc/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
