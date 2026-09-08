import{j as n}from"./iframe-DlM-48cS.js";import{B as e}from"./BasePdfViewer-Cx3GW3Ns.js";import"./preload-helper-DmLvY0Ro.js";import"./index-DQySynAe.js";import"./BasePdfViewer.module.css-sgdU8cG_.js";import"./PdfViewerAnnotationLayer-Degk33LZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeC7x7uZ.js";import"./PdfViewerOutlineSidebar-BMgAnfmw.js";import"./PdfViewerSidebarHeader-DtQtODvs.js";import"./useBaseUiId-BL7ajxcr.js";import"./useControlled-Cds1c1L2.js";import"./CompositeRoot-DE165pSV.js";import"./CompositeItem-DnzFCdD-.js";import"./ToolbarRootContext-DaIwolue.js";import"./composite-CCDJ76ow.js";import"./svgIconContainer-BSW0qWgw.js";import"./PdfViewerSearchBar-Dd48QqxL.js";import"./chevron-up-Cfhc42Mw.js";import"./chevron-down-P2rFBgt2.js";import"./cross-DwTMpwkP.js";import"./PdfViewerSidebar-BKjNnlu-.js";import"./index-zmbIiHRb.js";import"./index-oiGtd9Nq.js";import"./index-DD03Ubzs.js";import"./PdfViewerToolbar-JC1be1_W.js";import"./Button-CS46bS-Y.js";import"./chevron-right-COOz7LYR.js";import"./Input-BgLmo8kc.js";import"./search-CPnwrFbd.js";import"./spin-Smeowgqn.js";import"./error-CpOA0Xju.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3860/77f9cc4d44cde3589a59a848aecc1ed2190b12d4/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
