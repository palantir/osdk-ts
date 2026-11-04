import{j as n}from"./iframe-BAYjgPn_.js";import{B as e}from"./BasePdfViewer-CBPApW7i.js";import"./preload-helper-BJCl-bRv.js";import"./index-DN0zke96.js";import"./BasePdfViewer.module.css-s5KOyWCs.js";import"./PdfViewerAnnotationLayer-BvDBXyWg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CY6GEtjA.js";import"./PdfViewerOutlineSidebar-C4fG-kS_.js";import"./PdfViewerSidebarHeader-Dd5cF1_B.js";import"./useBaseUiId-Btxh7Hdv.js";import"./useControlled-SaIcnxAb.js";import"./CompositeRoot-Bekme_zB.js";import"./CompositeItem-C-2rS0Vr.js";import"./ToolbarRootContext-Vpkb3Bpo.js";import"./composite-CSv2xCWn.js";import"./svgIconContainer-Bdz9mcrS.js";import"./PdfViewerSearchBar-CwjkJ12u.js";import"./chevron-up-CBc2hrOb.js";import"./chevron-down-B1sc9iOG.js";import"./cross-BXQxs_UM.js";import"./PdfViewerSidebar-BM4Iif6t.js";import"./index-B-spnNIp.js";import"./index-BCKNZ_-u.js";import"./index-ewU9n-Bp.js";import"./PdfViewerToolbar-CxbVOTsz.js";import"./Button-Zo--VZAt.js";import"./chevron-right-DvAUrV-3.js";import"./Input-1Y2R_X8G.js";import"./search-iSsdT6KZ.js";import"./spin-AZeuTzH5.js";import"./error-DapfmyD2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4342/fa39978bb3c3a6eb9facb12422b4e7ec3d652286/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
