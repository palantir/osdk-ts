import{j as n}from"./iframe-CvJ7R438.js";import{B as e}from"./BasePdfViewer-DZwjn6p8.js";import"./preload-helper-DIeUWadq.js";import"./index-Yp0JQF0Q.js";import"./BasePdfViewer.module.css-zb6pr8fM.js";import"./PdfViewerAnnotationLayer-BB-6LmmJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYb46tfb.js";import"./PdfViewerOutlineSidebar-xn-SIQgk.js";import"./PdfViewerSidebarHeader-BsGvHDSl.js";import"./useBaseUiId-DvuukT3m.js";import"./useControlled-CupkKwbr.js";import"./CompositeRoot-BBH4x_Nn.js";import"./CompositeItem-DpqRoFwU.js";import"./ToolbarRootContext-pG56Avmq.js";import"./composite-DfVEv5DW.js";import"./svgIconContainer-Do6jakIy.js";import"./PdfViewerSearchBar-DpY1OmaJ.js";import"./chevron-up-DbnK0pFa.js";import"./chevron-down-B1-Mj5AF.js";import"./cross-Bghy2D6j.js";import"./PdfViewerSidebar-DFViwja1.js";import"./index-g6hJSz-5.js";import"./index-BYKE8oqY.js";import"./index-C9e5xM7h.js";import"./PdfViewerToolbar-CUchPAP_.js";import"./Button-E3u3fwJi.js";import"./chevron-right-DD8D9CRX.js";import"./Input-DgEbo1rm.js";import"./search-E1Tz1S2U.js";import"./spin-Clu4DVtW.js";import"./error-E1ZphxDs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4346/22e86207a28d7709e376d5dfdf39f6452fc8e415/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
