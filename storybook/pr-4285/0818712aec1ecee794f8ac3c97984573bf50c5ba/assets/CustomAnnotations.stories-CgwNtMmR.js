import{j as n}from"./iframe-DzAVrHJ1.js";import{B as e}from"./BasePdfViewer-Clqu4nYq.js";import"./preload-helper-ty-K3PMW.js";import"./index-C292Gvtl.js";import"./BasePdfViewer.module.css-Cb602BY7.js";import"./PdfViewerAnnotationLayer-CxobXVjS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E7dwZS2R.js";import"./PdfViewerOutlineSidebar-B5yjqWp8.js";import"./PdfViewerSidebarHeader-BQyR-yBA.js";import"./useBaseUiId-C1k_ZcgS.js";import"./useControlled-P8ZVsLoA.js";import"./CompositeRoot-f8bEw9LB.js";import"./CompositeItem-DvTwYr0k.js";import"./ToolbarRootContext-mfvQj9MT.js";import"./composite-CMwdngwB.js";import"./svgIconContainer-Cjn3QLE6.js";import"./PdfViewerSearchBar-C7bchyxS.js";import"./chevron-up-DidJDvhy.js";import"./chevron-down-BLhnWXgc.js";import"./cross-CwuqZdL9.js";import"./PdfViewerSidebar-BOJ8OM8q.js";import"./index-GsoBtsBJ.js";import"./index-Bz0mU_jm.js";import"./index-eBdvYF3H.js";import"./PdfViewerToolbar-DpY5YfS2.js";import"./Button-G6bICRGy.js";import"./chevron-right-DRqoLzix.js";import"./Input-BlhxiPuo.js";import"./search-Bq5r2eJD.js";import"./spin-CeAWgfmw.js";import"./error-BRilv6DJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/0818712aec1ecee794f8ac3c97984573bf50c5ba/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
