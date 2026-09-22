import{j as n}from"./iframe-D6GK-HvP.js";import{B as e}from"./BasePdfViewer-B8JrsWam.js";import"./preload-helper-BFH31g1G.js";import"./index-B8Opp0Aq.js";import"./BasePdfViewer.module.css-BHNWm_Rq.js";import"./PdfViewerAnnotationLayer-B4lgpdbE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UYp9H3rr.js";import"./PdfViewerOutlineSidebar-gmAvF5T2.js";import"./PdfViewerSidebarHeader-DbXY0X8_.js";import"./useBaseUiId-8c0vpIbF.js";import"./useControlled-DuFMSGQq.js";import"./CompositeRoot-DJ4VfHgE.js";import"./CompositeItem-XBxLSQGB.js";import"./ToolbarRootContext-DGSqIy6x.js";import"./composite-CrjUHFOu.js";import"./svgIconContainer-CSrNgshe.js";import"./PdfViewerSearchBar-Bkd7xidp.js";import"./chevron-up-Ql3JU-yU.js";import"./chevron-down-B7x3jao1.js";import"./cross-Dd2BFVFf.js";import"./PdfViewerSidebar-hT3heSP2.js";import"./index-C08EsZev.js";import"./index-P8xupo9q.js";import"./index-BJnCsIvw.js";import"./PdfViewerToolbar-Bq8QW8_x.js";import"./Button-oq6XXTdR.js";import"./chevron-right-BBuX6Vy-.js";import"./Input-CEqlI-vi.js";import"./search-BIJa8P83.js";import"./spin-BGHrFvWR.js";import"./error-CecGBnpf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4051/4eb555bd41957f1e2f04fb8c6223de58ebc370c0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
