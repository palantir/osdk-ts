import{j as n}from"./iframe-D6uAV5TU.js";import{B as e}from"./BasePdfViewer-oIR09LdC.js";import"./preload-helper-DgVxICfb.js";import"./index-CY-pWkIE.js";import"./BasePdfViewer.module.css-f3ioNwi0.js";import"./PdfViewerAnnotationLayer-C8vFmWrF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cw7KnlnN.js";import"./PdfViewerOutlineSidebar-xDD-W3Kd.js";import"./PdfViewerSidebarHeader-BVK9GOBe.js";import"./useBaseUiId-Cm0jnEPf.js";import"./useControlled-CNCN21-B.js";import"./CompositeRoot-jDpLqAnB.js";import"./CompositeItem-BovdAW9J.js";import"./ToolbarRootContext-Cj-ulQf0.js";import"./composite-BEzxj37g.js";import"./svgIconContainer-to51jCpQ.js";import"./PdfViewerSearchBar-BieDe_4z.js";import"./chevron-up-BkLRKk8D.js";import"./chevron-down-y6Dx4H3i.js";import"./cross-C1qbDIAe.js";import"./PdfViewerSidebar-5nekJYcg.js";import"./index-CF_buGa8.js";import"./index-bpYghXGo.js";import"./index-JG_tkU8g.js";import"./PdfViewerToolbar-6XjOzi7F.js";import"./Button-D1LcAXjL.js";import"./chevron-right-BR5y3-2g.js";import"./Input-DgviHqP4.js";import"./search-BkhC58qY.js";import"./spin-CYkSSr3V.js";import"./error-AQL_lZl-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/c26bdfdb745a8fc3ab16a0abff34d77c72ea4c4b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
