import{j as r,M as s}from"./iframe-Dixwoq4L.js";import{P as p}from"./pdf-viewer-Bolj_Ev9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CKD9JEkl.js";import"./preload-helper-BsHp-RGP.js";import"./PdfViewer-oZ-_PaLx.js";import"./index-CcIVVuqf.js";import"./BasePdfViewer-Bdw6L9_e.js";import"./BasePdfViewer.module.css-5cyz-HKf.js";import"./PdfViewerAnnotationLayer-MSHVZGPc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6wUl4RI.js";import"./PdfViewerOutlineSidebar-kSmpLh9k.js";import"./PdfViewerSidebarHeader-DQkDPppe.js";import"./useBaseUiId-DaT4VLXm.js";import"./useControlled-CJEoS3fz.js";import"./CompositeRoot-DV1d4smP.js";import"./CompositeItem-BVhXUg3I.js";import"./ToolbarRootContext-Dg49HtmA.js";import"./composite-BiAYM8pY.js";import"./svgIconContainer-CffeXbYk.js";import"./PdfViewerSearchBar-DcAve_DM.js";import"./chevron-up-CXGOAf4Z.js";import"./chevron-down-BK-6EzsA.js";import"./cross-D7TdtDyo.js";import"./PdfViewerSidebar--aGON1NR.js";import"./index-nO-PLXJg.js";import"./index-BX_I2TdV.js";import"./index-BXWUqN74.js";import"./PdfViewerToolbar-DW72E6YR.js";import"./Button-Dr6WGivc.js";import"./chevron-right-DR-B7vcY.js";import"./Input-gkS7bq_U.js";import"./search-DAIXcQnY.js";import"./spin-Dsm3wvLr.js";import"./error-CqJY6TRA.js";import"./withOsdkMetrics-CHTNEF0W.js";import"./makeExternalStore-ClZX4f5E.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
