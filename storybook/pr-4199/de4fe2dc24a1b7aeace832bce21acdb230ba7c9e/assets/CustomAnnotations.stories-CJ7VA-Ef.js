import{j as n}from"./iframe-gl1D0cYu.js";import{B as e}from"./BasePdfViewer-DkljgqiB.js";import"./preload-helper-DqgH6sT8.js";import"./index-D5PLyZrU.js";import"./BasePdfViewer.module.css-CO0vmsb6.js";import"./PdfViewerAnnotationLayer-ybX3hA4R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEyizLfm.js";import"./PdfViewerOutlineSidebar-bwwFIqoo.js";import"./PdfViewerSidebarHeader-D5sHIPX4.js";import"./useBaseUiId-DaNXLH9o.js";import"./useControlled-D-vu1Iu-.js";import"./CompositeRoot-Clqxj38a.js";import"./CompositeItem-hGM9YKcr.js";import"./ToolbarRootContext-DUK6v5QM.js";import"./composite-mmowW-5S.js";import"./svgIconContainer-D2ylg-hx.js";import"./PdfViewerSearchBar-B1hpUShF.js";import"./chevron-up-D5XUevhq.js";import"./chevron-down-B--bqcM3.js";import"./cross-nvwlJ43b.js";import"./PdfViewerSidebar-811F-tXP.js";import"./index-Cevn-2DA.js";import"./index-DZJG8XPS.js";import"./index-DYOboT0w.js";import"./PdfViewerToolbar-D1bTeQH2.js";import"./Button-Dyc2i6Ov.js";import"./chevron-right-Tn7vEVRZ.js";import"./Input-DikxtY8U.js";import"./search-DuJOx_mq.js";import"./spin-oGwjDkn0.js";import"./error-CF31ifZ8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4199/de4fe2dc24a1b7aeace832bce21acdb230ba7c9e/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
