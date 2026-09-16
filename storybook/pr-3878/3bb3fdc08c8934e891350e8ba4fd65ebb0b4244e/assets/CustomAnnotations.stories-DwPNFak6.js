import{j as n}from"./iframe-Q3lyvqpT.js";import{B as e}from"./BasePdfViewer-33EdcRFj.js";import"./preload-helper-C1UOXpSy.js";import"./index-DeVeQfvD.js";import"./BasePdfViewer.module.css-Bz5hAerL.js";import"./PdfViewerAnnotationLayer-DYbvAFeC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRlhkdb6.js";import"./PdfViewerOutlineSidebar-B8jKKCAj.js";import"./PdfViewerSidebarHeader-BHpRZyFP.js";import"./useBaseUiId-TlHWJ25V.js";import"./useControlled-D3J0OrAn.js";import"./CompositeRoot-BnK9Ib9P.js";import"./CompositeItem-BdfVH036.js";import"./ToolbarRootContext-bI52zd0O.js";import"./composite-BRlBDXOv.js";import"./svgIconContainer-_aeVyyfk.js";import"./PdfViewerSearchBar-DCU1JGlY.js";import"./chevron-up-zPXRjtQS.js";import"./chevron-down-CyTKzqpr.js";import"./cross-0utMfnpw.js";import"./PdfViewerSidebar-Ij7-une1.js";import"./index-CCtIAxk4.js";import"./index-BgSh7jc2.js";import"./index-Bkfj5pmT.js";import"./PdfViewerToolbar-DVKRh64i.js";import"./Button-7q-Awilo.js";import"./chevron-right-BauWD76u.js";import"./Input-DsdhnLi8.js";import"./search-DRlPV6Yf.js";import"./spin-CNyARoWK.js";import"./error-CMb3oavi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/3bb3fdc08c8934e891350e8ba4fd65ebb0b4244e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
