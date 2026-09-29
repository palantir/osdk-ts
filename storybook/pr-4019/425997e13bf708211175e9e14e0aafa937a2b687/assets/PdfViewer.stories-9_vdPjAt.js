import{j as r,M as s}from"./iframe-CN_vvEvV.js";import{P as p}from"./pdf-viewer-8dgJOfEF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CGn93gHW.js";import"./preload-helper-WuzznOu3.js";import"./PdfViewer-hqCyFU1v.js";import"./index-Yn_grBDh.js";import"./BasePdfViewer-ywUGQ8YK.js";import"./BasePdfViewer.module.css-D_p5bPEE.js";import"./PdfViewerAnnotationLayer-Bg9fR67G.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_qNnxnJ.js";import"./PdfViewerOutlineSidebar-CTQuXG9K.js";import"./PdfViewerSidebarHeader-DS5d8WU6.js";import"./useBaseUiId-D6GNKrv7.js";import"./useControlled-DY8zlZhG.js";import"./CompositeRoot-Bq5PblYB.js";import"./CompositeItem-CUoXO_HL.js";import"./ToolbarRootContext-DFFN_XcR.js";import"./composite-Dgt1ShdF.js";import"./svgIconContainer-Cuv7eTan.js";import"./PdfViewerSearchBar-X9okiz0I.js";import"./chevron-up-AznQUx3F.js";import"./chevron-down-CuRI24Zn.js";import"./cross-BTNfX9AB.js";import"./PdfViewerSidebar-DOMPiwXx.js";import"./index-e9J7zdgf.js";import"./index-DmpSrWu6.js";import"./index-BZSZGkip.js";import"./PdfViewerToolbar-BYbSNnuJ.js";import"./Button-GYys4WHS.js";import"./chevron-right-C9YUQeOq.js";import"./Input-D-TN7H1o.js";import"./search-BL454ash.js";import"./spin-B3wqmxCk.js";import"./error-DJd0ydtA.js";import"./withOsdkMetrics-C7EoGoEb.js";import"./makeExternalStore-DNuR4f-v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
