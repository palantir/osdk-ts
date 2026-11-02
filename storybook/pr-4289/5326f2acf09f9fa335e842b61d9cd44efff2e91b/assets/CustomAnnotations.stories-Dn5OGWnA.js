import{j as n}from"./iframe-B4_7uhV2.js";import{B as e}from"./BasePdfViewer-B876Myhw.js";import"./preload-helper-Cw77NyEA.js";import"./index-Mdm4Vdz6.js";import"./BasePdfViewer.module.css-CscohgSB.js";import"./PdfViewerAnnotationLayer-gJ_zKo1N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dowl3jqG.js";import"./PdfViewerOutlineSidebar-ByA3GLLp.js";import"./PdfViewerSidebarHeader-CYkyogk8.js";import"./useBaseUiId-jcj23Jre.js";import"./useControlled-DuB2GZAM.js";import"./CompositeRoot-C4SB20ex.js";import"./CompositeItem-CYgFQeQK.js";import"./ToolbarRootContext-By4aijuh.js";import"./composite-DzB4ymUk.js";import"./svgIconContainer-CfsWQbiM.js";import"./PdfViewerSearchBar-BqiWvoc5.js";import"./chevron-up-BIdRkicc.js";import"./chevron-down-DsD_ZS4y.js";import"./cross-rrtuBbZ-.js";import"./PdfViewerSidebar-DzYFledl.js";import"./index-q1tL4Nc7.js";import"./index-BIAFdQmf.js";import"./index-tpsUjXJC.js";import"./PdfViewerToolbar-D6CDtl-c.js";import"./Button-Bp6QDAip.js";import"./chevron-right-DQC9nsbO.js";import"./Input-D8cnvsnb.js";import"./search-CkWTC5d3.js";import"./spin-C7lJr5an.js";import"./error-CBs6A8KU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4289/5326f2acf09f9fa335e842b61d9cd44efff2e91b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
