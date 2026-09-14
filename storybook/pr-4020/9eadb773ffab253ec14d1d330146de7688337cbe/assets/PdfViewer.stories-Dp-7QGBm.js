import{j as r,M as s}from"./iframe-DwHN39Jj.js";import{P as p}from"./pdf-viewer-CM4RJFSx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dsat-b8d.js";import"./preload-helper-TQIKMTBe.js";import"./PdfViewer-D6vB0qQ8.js";import"./index-Bnvv13O1.js";import"./BasePdfViewer-BMcxnVG_.js";import"./BasePdfViewer.module.css-BC1cZJi1.js";import"./PdfViewerAnnotationLayer-CWLDw_Ii.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uINbtnDe.js";import"./PdfViewerOutlineSidebar-DCJ76F1D.js";import"./PdfViewerSidebarHeader-C8CBAWnn.js";import"./useBaseUiId-BuiLz8Kz.js";import"./useControlled-B5wlEGdC.js";import"./CompositeRoot-DC5DveBS.js";import"./CompositeItem-BQu1HqMn.js";import"./ToolbarRootContext-C0072MJ6.js";import"./composite-BHUO4-On.js";import"./svgIconContainer-D3xSNEvE.js";import"./PdfViewerSearchBar-CdkO_AM1.js";import"./chevron-up-CgMDDgxn.js";import"./chevron-down-DzHcaasw.js";import"./cross-DiSoPuVQ.js";import"./PdfViewerSidebar-BfHPiqF-.js";import"./index-st8A3vYR.js";import"./index-yATLLLgy.js";import"./index-DdofC8Tl.js";import"./PdfViewerToolbar-BIg6YPpr.js";import"./Button-BYP0P9Ib.js";import"./chevron-right-CR7RpRQ6.js";import"./Input-C40ac1xS.js";import"./search-60c5efTm.js";import"./spin-vycS3R7z.js";import"./error-B0Y2Fvc9.js";import"./withOsdkMetrics-CvR6KWeT.js";import"./makeExternalStore-DbPOioRC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
