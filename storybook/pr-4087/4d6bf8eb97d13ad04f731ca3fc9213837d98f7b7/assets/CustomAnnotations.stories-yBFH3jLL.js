import{j as n}from"./iframe-H475fjT9.js";import{B as e}from"./BasePdfViewer-DYQ3-xMS.js";import"./preload-helper-4X7ac1X_.js";import"./index-xnZyhOap.js";import"./BasePdfViewer.module.css-DmfXDcM9.js";import"./PdfViewerAnnotationLayer-BRlUJZOh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BA5PQVtr.js";import"./PdfViewerOutlineSidebar-CutR8ALu.js";import"./PdfViewerSidebarHeader-2_rXK6SD.js";import"./useBaseUiId-D9Y7uIA_.js";import"./useControlled-CTWYlqbQ.js";import"./CompositeRoot-D0DVPPw6.js";import"./CompositeItem-Nblbqfxi.js";import"./ToolbarRootContext-DRktyYqF.js";import"./composite-BYdl5w4l.js";import"./svgIconContainer-DRh8H81_.js";import"./PdfViewerSearchBar-CEv8hdLA.js";import"./chevron-up-ClqMCafD.js";import"./chevron-down-BgkFJdjv.js";import"./cross-Dm1NPVGS.js";import"./PdfViewerSidebar-D97HGQEp.js";import"./index-DT4cMJml.js";import"./index-D2G91xGC.js";import"./index-2KdCkDaD.js";import"./PdfViewerToolbar-CHJWoglA.js";import"./Button-C-c_YzgP.js";import"./chevron-right-ZSps1Ia7.js";import"./Input-CSGRdmE4.js";import"./search-BeyzIhyn.js";import"./spin-BrzEc2bE.js";import"./error-C3Cl8o9I.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4087/4d6bf8eb97d13ad04f731ca3fc9213837d98f7b7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
