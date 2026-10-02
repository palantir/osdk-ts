import{j as n}from"./iframe-Btqvg51n.js";import{B as e}from"./BasePdfViewer-D24Sxv7N.js";import"./preload-helper-syhdZDkE.js";import"./index-BD28I-pc.js";import"./BasePdfViewer.module.css-B_-7zOVN.js";import"./PdfViewerAnnotationLayer-BAP2xmkR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDYbHiX9.js";import"./PdfViewerOutlineSidebar-DiHlnM9T.js";import"./PdfViewerSidebarHeader-BPM8HH5c.js";import"./useBaseUiId-BkjQeUzK.js";import"./useControlled-sKyg4XQp.js";import"./CompositeRoot-D6Trz0k9.js";import"./CompositeItem-QpGH5PhM.js";import"./ToolbarRootContext-AyD5CGSz.js";import"./composite-DISAoOje.js";import"./svgIconContainer-DO6E7UDs.js";import"./PdfViewerSearchBar-BskYYvhg.js";import"./chevron-up-DLypuey8.js";import"./chevron-down-HGlEUxE6.js";import"./cross-4sLVfr-a.js";import"./PdfViewerSidebar-Cf7tzGo9.js";import"./index-DFfg-m3O.js";import"./index-C-bm7M0d.js";import"./index-DI6u9RXJ.js";import"./PdfViewerToolbar-WVneBPoy.js";import"./Button-Cjefz3Ec.js";import"./chevron-right-C2cRxbtS.js";import"./Input-DshYp2Vv.js";import"./search-CS3jZQxq.js";import"./spin-CRztlgxc.js";import"./error-BHl0yOWM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4084/696a6c8f67d7a10b5c67db52230333d69089f876/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
