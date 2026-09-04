import{j as r,M as s}from"./iframe-C8SPWzFD.js";import{P as p}from"./pdf-viewer-D3aMsaMP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ch8RFdSt.js";import"./preload-helper-0-zjDLXH.js";import"./PdfViewer-DLR0beAE.js";import"./index-CGimpnDA.js";import"./BasePdfViewer-sBxUnnIu.js";import"./BasePdfViewer.module.css-CLP_5-b6.js";import"./PdfViewerAnnotationLayer-D5bfK2AW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-M_JfIEOA.js";import"./PdfViewerOutlineSidebar-Cdok9R4h.js";import"./PdfViewerSidebarHeader-DPQ6NuzU.js";import"./useBaseUiId-C57VmH3J.js";import"./useControlled-Yy6Nm7q-.js";import"./CompositeRoot-COC918y2.js";import"./CompositeItem--Cz5F4Xa.js";import"./ToolbarRootContext-BVFmYY-d.js";import"./composite-DPxUJccb.js";import"./svgIconContainer-B40AAOuO.js";import"./PdfViewerSearchBar-DUIysxM8.js";import"./chevron-up-meoMkqja.js";import"./chevron-down-C45MQu-J.js";import"./cross-yQkVXtk-.js";import"./PdfViewerSidebar-BEN-NUE-.js";import"./index-7TRVPqPj.js";import"./index-VKcShZXo.js";import"./index-BwAo9-Ip.js";import"./PdfViewerToolbar-FuzznwCH.js";import"./Button-BSl9QmF1.js";import"./chevron-right-C33xjtuW.js";import"./Input-B7RJGze7.js";import"./search-bHMR0YBt.js";import"./spin-BNp5bIZE.js";import"./error-B5OE4NvJ.js";import"./withOsdkMetrics-jd8u8gq8.js";import"./makeExternalStore-C93JHYzf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
