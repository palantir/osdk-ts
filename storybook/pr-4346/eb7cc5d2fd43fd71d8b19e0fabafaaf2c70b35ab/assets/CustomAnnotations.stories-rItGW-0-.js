import{j as n}from"./iframe-BA-BTX3-.js";import{B as e}from"./BasePdfViewer-BWQoY9-f.js";import"./preload-helper-C5CDmGBs.js";import"./index-CLtmtywH.js";import"./BasePdfViewer.module.css-BRW8olwn.js";import"./PdfViewerAnnotationLayer-0EfzMhjO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzUR_Zv2.js";import"./PdfViewerOutlineSidebar-h9Cg5fRd.js";import"./PdfViewerSidebarHeader-Brx2xP4W.js";import"./useBaseUiId-BfS85IZC.js";import"./useControlled-UrjDpzSo.js";import"./CompositeRoot-vcMWJ3UX.js";import"./CompositeItem-domKBhoO.js";import"./ToolbarRootContext-DhyEOAqU.js";import"./composite-CTuwrQcp.js";import"./svgIconContainer-Dgy3GTZl.js";import"./PdfViewerSearchBar-B-R4mlak.js";import"./chevron-up-BxOsADFS.js";import"./chevron-down-BhnESDG4.js";import"./cross-D4r7ZnVQ.js";import"./PdfViewerSidebar-X-yZJHnv.js";import"./index-BJs7nm0G.js";import"./index-CHEuFMH1.js";import"./index-PipwlUCm.js";import"./PdfViewerToolbar-Bx3Idkm1.js";import"./Button-CYmxxZwT.js";import"./chevron-right-Boss_FWi.js";import"./Input-BeTQsBeq.js";import"./search-DGIpilYo.js";import"./spin-g8ww1hn8.js";import"./error-rq6qiBRx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4346/eb7cc5d2fd43fd71d8b19e0fabafaaf2c70b35ab/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
