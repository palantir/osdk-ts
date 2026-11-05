import{j as n}from"./iframe-BTvYIEq8.js";import{B as e}from"./BasePdfViewer-DapjZ82J.js";import"./preload-helper-CFYdII7P.js";import"./index-Beef_kHp.js";import"./BasePdfViewer.module.css-CapzdlJt.js";import"./PdfViewerAnnotationLayer-DPkd5xJI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BsFvjEjl.js";import"./PdfViewerOutlineSidebar-CJ1Ud837.js";import"./PdfViewerSidebarHeader-vYRZAZ4E.js";import"./useBaseUiId-DVwPqKHc.js";import"./useControlled-CpfYcIbT.js";import"./CompositeRoot-Dv6uAAoY.js";import"./CompositeItem-nLfGi46c.js";import"./ToolbarRootContext-U5RtpmpZ.js";import"./composite-UnbXp0a2.js";import"./svgIconContainer-CDJ2X3CN.js";import"./PdfViewerSearchBar-CZXTtXVQ.js";import"./chevron-up-B6CDvaW8.js";import"./chevron-down-Bkejrg-1.js";import"./cross-sKht6Kec.js";import"./PdfViewerSidebar-DUJBjiO8.js";import"./index-DyutDDDZ.js";import"./index-BVCWAs35.js";import"./index-CHR8y95E.js";import"./PdfViewerToolbar-Jd01W2rF.js";import"./Button-EZBekNYG.js";import"./chevron-right-DM5Z1FNl.js";import"./Input-WD0q61A7.js";import"./search-Dy8Cjq17.js";import"./spin-Be8MU2sm.js";import"./error-ByI-eSLJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4336/e44d457e839993920629fc3fe4fbd681aa2e40ee/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
