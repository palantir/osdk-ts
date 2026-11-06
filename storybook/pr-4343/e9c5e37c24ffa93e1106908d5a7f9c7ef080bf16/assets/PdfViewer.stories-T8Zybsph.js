import{j as r,M as s}from"./iframe-CMiiEF1b.js";import{P as p}from"./pdf-viewer-B_4rRvvF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9idQsbU.js";import"./preload-helper-2rscAx0o.js";import"./PdfViewer-Cs1pqPVk.js";import"./index-DRZQ1ZuZ.js";import"./BasePdfViewer-D1nsEaFw.js";import"./BasePdfViewer.module.css-DJLw7y14.js";import"./PdfViewerAnnotationLayer-BUTz1aTf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cl5GNgPP.js";import"./PdfViewerOutlineSidebar-C4l17w4-.js";import"./PdfViewerSidebarHeader-CD-WRCtu.js";import"./useBaseUiId-EgPXNEt2.js";import"./useControlled-CaNRytWe.js";import"./CompositeRoot-CoBz8IBC.js";import"./CompositeItem-D4B_FL8U.js";import"./ToolbarRootContext-UxomdOwp.js";import"./composite-DqjfxZG9.js";import"./svgIconContainer-DmZ8fHpX.js";import"./PdfViewerSearchBar-Cl5y3wHi.js";import"./chevron-up-CyHrqJq5.js";import"./chevron-down-BtRtOYI2.js";import"./cross-DmjzAf0-.js";import"./PdfViewerSidebar-CopQDTqn.js";import"./index-DVpvfzZ8.js";import"./index-goWiuive.js";import"./index-Dtqd3tNX.js";import"./PdfViewerToolbar-B1dCVbY2.js";import"./Button-CDnIVBQ_.js";import"./chevron-right-Dxz2Xbw7.js";import"./Input-B0ji1_35.js";import"./search-0aDkREOD.js";import"./spin-C1eWqz2U.js";import"./error-IdCbvwbX.js";import"./withOsdkMetrics-BucKtTdS.js";import"./makeExternalStore-BeAQwjdH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
