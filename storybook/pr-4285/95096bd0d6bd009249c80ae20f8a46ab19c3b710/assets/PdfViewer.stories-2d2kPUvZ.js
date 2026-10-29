import{j as r,M as s}from"./iframe-BO3JDeUy.js";import{P as p}from"./pdf-viewer-DT3RmC5Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHN4d_Dw.js";import"./preload-helper-urwU0B1K.js";import"./PdfViewer-DLZvjglb.js";import"./index-CEHZ1Lmc.js";import"./BasePdfViewer-BQsCRzPI.js";import"./BasePdfViewer.module.css-G7ohjU8m.js";import"./PdfViewerAnnotationLayer-Ck9BYmgD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQnkZ9bh.js";import"./PdfViewerOutlineSidebar-DRqvgC5v.js";import"./PdfViewerSidebarHeader-CakVQMSR.js";import"./useBaseUiId-BhX3QU_S.js";import"./useControlled-CFrWaOQK.js";import"./CompositeRoot-D9-hIhoD.js";import"./CompositeItem-DeWDKhlH.js";import"./ToolbarRootContext-rGxGVX8f.js";import"./composite-DkSbjExr.js";import"./svgIconContainer-B2x3jtn9.js";import"./PdfViewerSearchBar-ySj1EEj4.js";import"./chevron-up-DOoilBRb.js";import"./chevron-down-D8wRJ6gM.js";import"./cross-B4B_Rmmg.js";import"./PdfViewerSidebar-BdA2Ymx7.js";import"./index-_n59woxc.js";import"./index-DuMMGCln.js";import"./index-C_ZbNhui.js";import"./PdfViewerToolbar-Cu56ZlAL.js";import"./Button-HsgZWy4d.js";import"./chevron-right-CECTJcep.js";import"./Input-aywzIDzd.js";import"./search-BTnE45Hm.js";import"./spin-LnAoef4A.js";import"./error-COT9B3Hv.js";import"./withOsdkMetrics-C6_wMEah.js";import"./makeExternalStore-DdmSyb-E.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
