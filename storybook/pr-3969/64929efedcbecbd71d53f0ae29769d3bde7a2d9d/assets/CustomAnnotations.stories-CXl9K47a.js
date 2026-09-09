import{j as n}from"./iframe-Cha5bzcQ.js";import{B as e}from"./BasePdfViewer-BLlzkA3u.js";import"./preload-helper-DTIBEWF3.js";import"./index-Bm3NhGlH.js";import"./BasePdfViewer.module.css-Cmp3b-pn.js";import"./PdfViewerAnnotationLayer-CUAmrbvd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRlLjmvx.js";import"./PdfViewerOutlineSidebar-CwaARCbl.js";import"./PdfViewerSidebarHeader-CggG6kXl.js";import"./useBaseUiId-CoAf4zJ1.js";import"./useControlled-BsFUux1R.js";import"./CompositeRoot-BBj7b1_y.js";import"./CompositeItem-CI63tMYo.js";import"./ToolbarRootContext-BCJzUdOe.js";import"./composite-DwMGYBdi.js";import"./svgIconContainer-DA_Ed81f.js";import"./PdfViewerSearchBar-DUI0TuBf.js";import"./chevron-up-8p9sc37z.js";import"./chevron-down-BImkdPvb.js";import"./cross-sYD9GiNz.js";import"./PdfViewerSidebar-Nl_lzj4C.js";import"./index-Wr7-HV8X.js";import"./index-BuHsw6tX.js";import"./index-CRCMyzG5.js";import"./PdfViewerToolbar-DU7HxgQb.js";import"./Button-KiGmPYx_.js";import"./chevron-right-DH633oAQ.js";import"./Input-CS3x1fIq.js";import"./search-LEzBZeqH.js";import"./spin-D_XGl-_h.js";import"./error-JfmuoEvN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3969/64929efedcbecbd71d53f0ae29769d3bde7a2d9d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
