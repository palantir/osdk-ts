import{j as n}from"./iframe-D4hrQN2M.js";import{B as e}from"./BasePdfViewer-CkXFtcUl.js";import"./preload-helper-sZ7GZnTp.js";import"./index-TJFGWmSW.js";import"./BasePdfViewer.module.css-B0tz_RJb.js";import"./PdfViewerAnnotationLayer-Q1pvBdai.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRjRqGp5.js";import"./PdfViewerOutlineSidebar-CyepzVJu.js";import"./PdfViewerSidebarHeader-hZtP_2ly.js";import"./useBaseUiId-Dd8SLm5U.js";import"./useControlled-D7NqC10F.js";import"./CompositeRoot-CGN01IcJ.js";import"./CompositeItem-D42qWJYi.js";import"./ToolbarRootContext-A7T_D51T.js";import"./composite-CR-Dz-Ek.js";import"./svgIconContainer-B2XpTIGD.js";import"./PdfViewerSearchBar-DxDeydOR.js";import"./chevron-up-3Y132dp_.js";import"./chevron-down-CPNs7Pbe.js";import"./cross-DpkqXaMH.js";import"./PdfViewerSidebar-uiovWacE.js";import"./index-CFuoKysS.js";import"./index-DLnqSt_k.js";import"./index-BRhC0vEw.js";import"./PdfViewerToolbar-DkEGP7RJ.js";import"./Button-C5ajAHO-.js";import"./chevron-right-t4AJQ12P.js";import"./Input-CkxkdCMO.js";import"./search-D1Xzl9P3.js";import"./spin-ojDpX_g_.js";import"./error-DLpDeju-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4146/87bac161a7a86234cc1c3b9b535df96126925d2d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
