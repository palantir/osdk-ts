import{j as r,M as s}from"./iframe-D1j4WqtX.js";import{P as p}from"./pdf-viewer-BfMlYIS4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DX8UB7Ku.js";import"./preload-helper-CIO_iRSv.js";import"./PdfViewer-KkWGhSpk.js";import"./index-CF3Sq86v.js";import"./BasePdfViewer-CjcO3Udt.js";import"./BasePdfViewer.module.css-tT75sgKK.js";import"./PdfViewerAnnotationLayer-Zq8FmIkh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Y6Y0pMwL.js";import"./PdfViewerOutlineSidebar-DLQiiGvC.js";import"./PdfViewerSidebarHeader-P6tu7WLR.js";import"./useBaseUiId-CvpmnQHF.js";import"./useControlled-Dvj50PQH.js";import"./CompositeRoot-CdwMZIiK.js";import"./CompositeItem-BjdsKKJr.js";import"./ToolbarRootContext-Bggxr9N9.js";import"./composite-BY3OkPXB.js";import"./svgIconContainer-DQLh4QVM.js";import"./PdfViewerSearchBar-DC8OxgxB.js";import"./chevron-up-jmetNAh2.js";import"./chevron-down-9_oXjY5S.js";import"./cross-Bu-eP3kR.js";import"./PdfViewerSidebar-DVhXG1A3.js";import"./index-C_i7dQHN.js";import"./index-BVTY6Q3I.js";import"./index-CMSKaHd2.js";import"./PdfViewerToolbar-SAPY86as.js";import"./Button-DfvOvfvD.js";import"./chevron-right-BKmSAHOt.js";import"./Input-aBbimhzA.js";import"./search-Ci42lqAV.js";import"./spin-Dr4bIRKj.js";import"./error-CSigbrmD.js";import"./withOsdkMetrics-9ebMCx2K.js";import"./makeExternalStore-CpT-N4RM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
