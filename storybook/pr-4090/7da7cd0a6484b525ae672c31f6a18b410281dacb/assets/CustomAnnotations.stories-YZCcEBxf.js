import{j as n}from"./iframe-CzOIzVud.js";import{B as e}from"./BasePdfViewer-cy8XMASj.js";import"./preload-helper-CwMKM08Q.js";import"./index-CTmIGBdU.js";import"./BasePdfViewer.module.css-8RYQIiKb.js";import"./PdfViewerAnnotationLayer-DEMVIv9S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-Gy6R7c.js";import"./PdfViewerOutlineSidebar-GSxGUJep.js";import"./PdfViewerSidebarHeader-BetpiRKk.js";import"./useBaseUiId-PA6AbvCv.js";import"./useControlled-Bl4FNa4w.js";import"./CompositeRoot-BXSLcrc9.js";import"./CompositeItem-A6EkfQUI.js";import"./ToolbarRootContext-CMaoaTCy.js";import"./composite-CCnWWb1N.js";import"./svgIconContainer-0bhWATaq.js";import"./PdfViewerSearchBar-BNaTsg_U.js";import"./chevron-up-C-Wjc271.js";import"./chevron-down-Cb1symQ7.js";import"./cross-ChoO-hHZ.js";import"./PdfViewerSidebar-XbG0PMHa.js";import"./index-BFY6m5n5.js";import"./index-CYHilSIV.js";import"./index-OcnJrvDb.js";import"./PdfViewerToolbar-DRkkFOOc.js";import"./Button-PAMPzLp5.js";import"./chevron-right-B3-RM2Nl.js";import"./Input-C7TpWAR_.js";import"./search-OylK7gf9.js";import"./spin-DnxmArJR.js";import"./error-bNK0ajAf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4090/7da7cd0a6484b525ae672c31f6a18b410281dacb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
