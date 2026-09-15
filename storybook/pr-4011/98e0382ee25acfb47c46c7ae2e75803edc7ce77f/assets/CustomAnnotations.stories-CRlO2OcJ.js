import{j as n}from"./iframe-W9lZ6KB9.js";import{B as e}from"./BasePdfViewer-CLR7qS-d.js";import"./preload-helper-FRDH_-i6.js";import"./index-zvENON5K.js";import"./BasePdfViewer.module.css-CmlEarDS.js";import"./PdfViewerAnnotationLayer-EgzDEghu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKPObKzF.js";import"./PdfViewerOutlineSidebar-D5vNgJMy.js";import"./PdfViewerSidebarHeader-DF6xpqWr.js";import"./useBaseUiId-CM8bj9T3.js";import"./useControlled-BibYMAkB.js";import"./CompositeRoot-ChTmxUvs.js";import"./CompositeItem-9LwIi5rO.js";import"./ToolbarRootContext-DwUbHsl_.js";import"./composite-Dds-kjO9.js";import"./svgIconContainer-GBMBocam.js";import"./PdfViewerSearchBar-Bkw22AcZ.js";import"./chevron-up-DYacBVi1.js";import"./chevron-down-CPOSM9ve.js";import"./cross-BA2Nf7ni.js";import"./PdfViewerSidebar-CiL36kD_.js";import"./index-WuDXyzt9.js";import"./index-Do1aQnY4.js";import"./index-CiBIb1Hm.js";import"./PdfViewerToolbar-CdDRlS_g.js";import"./Button-Cgco6Fdx.js";import"./chevron-right-rrjstvxH.js";import"./Input-BE9q1hzT.js";import"./search-DtUsUWlr.js";import"./spin-B-3vhnL1.js";import"./error-DJOARvPR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/98e0382ee25acfb47c46c7ae2e75803edc7ce77f/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
