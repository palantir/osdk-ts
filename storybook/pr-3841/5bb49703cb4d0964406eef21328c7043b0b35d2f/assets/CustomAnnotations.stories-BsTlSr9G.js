import{j as n}from"./iframe-RU8IGrNT.js";import{B as e}from"./BasePdfViewer-K5Tfn30_.js";import"./preload-helper-CC2SHOu0.js";import"./index-D0VksrnV.js";import"./BasePdfViewer.module.css-CGHCEZW7.js";import"./PdfViewerAnnotationLayer-v0UNqBVH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f247fUUJ.js";import"./PdfViewerOutlineSidebar-e8DfZ80P.js";import"./PdfViewerSidebarHeader-DnhUcMs0.js";import"./useBaseUiId-B7sFi6pv.js";import"./useControlled-D60JD0mh.js";import"./CompositeRoot-BPOHmP0R.js";import"./CompositeItem-CC8f_DCj.js";import"./ToolbarRootContext-sPvQNWqX.js";import"./composite-qIXSIzDA.js";import"./svgIconContainer-CAf1V-Tr.js";import"./PdfViewerSearchBar-DH_MREox.js";import"./chevron-up-DF4kmb64.js";import"./chevron-down-D65XdSbD.js";import"./cross-4-OM6Ghb.js";import"./PdfViewerSidebar-XdCwiZlt.js";import"./index-BALz8rwl.js";import"./index-DDfKVfwf.js";import"./index-WBmL8T14.js";import"./PdfViewerToolbar-CYRPOCFW.js";import"./Button-i-hZGgk2.js";import"./chevron-right-3Hoj-H_S.js";import"./Input-9-d8I3Qs.js";import"./search-C35W7rra.js";import"./spin-DmK0Ndix.js";import"./error-DtrLgX5c.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/5bb49703cb4d0964406eef21328c7043b0b35d2f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
