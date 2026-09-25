import{j as n}from"./iframe-C0-x1FP0.js";import{B as e}from"./BasePdfViewer-n_A_aSlw.js";import"./preload-helper-DCX9k7ir.js";import"./index-DV22TdK8.js";import"./BasePdfViewer.module.css-COk22H9y.js";import"./PdfViewerAnnotationLayer-Vh7fgtor.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LjUtWbe-.js";import"./PdfViewerOutlineSidebar-DgIYYm7Q.js";import"./PdfViewerSidebarHeader-CJx0A1Um.js";import"./useBaseUiId-CA7uGIeg.js";import"./useControlled-Dp-jMyqd.js";import"./CompositeRoot-BxKznIJC.js";import"./CompositeItem-D0Pwm5JG.js";import"./ToolbarRootContext-DthEPhMn.js";import"./composite-Dy-B8Ijy.js";import"./svgIconContainer-BSxvLIZD.js";import"./PdfViewerSearchBar-C6gaboer.js";import"./chevron-up-B1ujpv-A.js";import"./chevron-down-Tbopdf5u.js";import"./cross-yFQp_D_Z.js";import"./PdfViewerSidebar-BW-W-qgd.js";import"./index-ai2s7LZ-.js";import"./index-DUQSD1NB.js";import"./index-C7QUHUmQ.js";import"./PdfViewerToolbar-DqSpTmZM.js";import"./Button-CvK_tZY2.js";import"./chevron-right-CfSBhTtI.js";import"./Input-BXkRChlq.js";import"./search-Vl3MAPNS.js";import"./spin-DLf8fgCZ.js";import"./error-VkCpPEhJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4093/836d3c8e963c4373e01bafcd73dba2000cd5ae31/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
