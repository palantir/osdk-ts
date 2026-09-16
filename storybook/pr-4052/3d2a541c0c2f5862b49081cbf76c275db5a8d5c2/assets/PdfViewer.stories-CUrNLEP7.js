import{j as r,M as s}from"./iframe-Ca2h9Cb_.js";import{P as p}from"./pdf-viewer-WSRYR8ub.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6Yjisqb.js";import"./preload-helper-DAf9eX-V.js";import"./PdfViewer-B_g3H7M5.js";import"./index-DWThxo2f.js";import"./BasePdfViewer-CgGfxIuC.js";import"./BasePdfViewer.module.css-AXz1d2Pv.js";import"./PdfViewerAnnotationLayer-BUAiGBNE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEcJ5HcV.js";import"./PdfViewerOutlineSidebar-CpMCLfEN.js";import"./PdfViewerSidebarHeader-DaMcpSd9.js";import"./useBaseUiId-BeaWeUqC.js";import"./useControlled-DgBClk7b.js";import"./CompositeRoot-Cdk3lUd_.js";import"./CompositeItem-Bm7sSUUb.js";import"./ToolbarRootContext-Dw75y5NP.js";import"./composite-BHDhYMvG.js";import"./svgIconContainer-Bn-48Fxt.js";import"./PdfViewerSearchBar-Bgm8WYsB.js";import"./chevron-up-oGk9h3X6.js";import"./chevron-down-BbQxi628.js";import"./cross-kbTjrbem.js";import"./PdfViewerSidebar-Dp783_V3.js";import"./index-HOlceD77.js";import"./index-khJGmqWk.js";import"./index-BQgpEwzp.js";import"./PdfViewerToolbar-BKttRL4O.js";import"./Button-DuNKOwnz.js";import"./chevron-right-DygmTvSu.js";import"./Input-DJ7coF_2.js";import"./search-CuSTqVc7.js";import"./spin-tfiRhGBS.js";import"./error-JTYK1w6o.js";import"./withOsdkMetrics-BAX4qEws.js";import"./makeExternalStore-Toi8vQS6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
