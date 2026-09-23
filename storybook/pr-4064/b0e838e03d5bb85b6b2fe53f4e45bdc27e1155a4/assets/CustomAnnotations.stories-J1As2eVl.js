import{j as n}from"./iframe-VFEBMkmT.js";import{B as e}from"./BasePdfViewer-Bv7Cs78Z.js";import"./preload-helper-07eHVQFi.js";import"./index-BNFDG_ll.js";import"./BasePdfViewer.module.css-MFod6puN.js";import"./PdfViewerAnnotationLayer-BkyMr_w7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ss70OkMN.js";import"./PdfViewerOutlineSidebar-Bg6hEpEo.js";import"./PdfViewerSidebarHeader-DsHeh1aV.js";import"./useBaseUiId-vs4tfZGS.js";import"./useControlled-C_z4AA7y.js";import"./CompositeRoot-O9dh-36j.js";import"./CompositeItem-CC1BkCel.js";import"./ToolbarRootContext-7k7RnlYE.js";import"./composite-DW9K0ypD.js";import"./svgIconContainer-CrmB8eAh.js";import"./PdfViewerSearchBar-r281L-Nl.js";import"./chevron-up-jxPXNp-0.js";import"./chevron-down-DVKmbjNv.js";import"./cross-klKqW7pD.js";import"./PdfViewerSidebar-FvKiN2eM.js";import"./index-npggFz05.js";import"./index-C-ds3Per.js";import"./index-CHgbm3vu.js";import"./PdfViewerToolbar-CzwLUSvy.js";import"./Button-CSWptMiw.js";import"./chevron-right-ClaspzGG.js";import"./Input-CRGuLcp8.js";import"./search-VMyVN87B.js";import"./spin-Bzt604MK.js";import"./error-BAVEcOGP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4064/b0e838e03d5bb85b6b2fe53f4e45bdc27e1155a4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
