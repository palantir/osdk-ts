import{j as n}from"./iframe-DycPRZ3_.js";import{B as e}from"./BasePdfViewer-e1iZP7RK.js";import"./preload-helper-CwFGYy97.js";import"./index-D8OuJnBD.js";import"./BasePdfViewer.module.css-Czg1DQdG.js";import"./PdfViewerAnnotationLayer-DjCXHvpW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjPAHdg7.js";import"./PdfViewerOutlineSidebar-Bz7TUWiF.js";import"./PdfViewerSidebarHeader-DflgPEX5.js";import"./useBaseUiId-BcdZIsRg.js";import"./useControlled-CSrl2eWz.js";import"./CompositeRoot-Bv3EQm_U.js";import"./CompositeItem-BFpto-ga.js";import"./ToolbarRootContext-O9iZr2zE.js";import"./composite-BS35o5ci.js";import"./svgIconContainer-CdogxpvZ.js";import"./PdfViewerSearchBar-C3Vin-vI.js";import"./chevron-up-DTvHtvAF.js";import"./chevron-down-oahySAf9.js";import"./cross-BCqcqOvJ.js";import"./PdfViewerSidebar-CNmGClQP.js";import"./index-Cmvp_WNS.js";import"./index-DsXNa1nt.js";import"./index-CUewPl3I.js";import"./PdfViewerToolbar-BIei9ofW.js";import"./Button-BRZRYHG0.js";import"./chevron-right-DzVRi8J1.js";import"./Input-DlxWReQQ.js";import"./search-_YpI-rXF.js";import"./spin-KacapLV8.js";import"./error-CfB5jUCL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4310/817aa5dc4f59abb59f583b24ddbee500f6f65c20/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
