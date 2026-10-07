import{j as r,M as s}from"./iframe-C4U2JRoY.js";import{P as p}from"./pdf-viewer-iGbfwqMa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-6eRiRRv8.js";import"./preload-helper-DN3ZEv3h.js";import"./PdfViewer-BbKMzG85.js";import"./index-sST8iqoh.js";import"./BasePdfViewer-D1pIMwOD.js";import"./BasePdfViewer.module.css-D-CYqp9K.js";import"./PdfViewerAnnotationLayer-ClxhjNZn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-26HnQxKy.js";import"./PdfViewerOutlineSidebar-CIF-K5hy.js";import"./PdfViewerSidebarHeader-DrdvH8sB.js";import"./useBaseUiId-t75_1mYb.js";import"./useControlled-DgRL6il9.js";import"./CompositeRoot-Ds9KXhrb.js";import"./CompositeItem-2E0ykI3P.js";import"./ToolbarRootContext-BAVcRF15.js";import"./composite-DyzBkCx-.js";import"./svgIconContainer-Bqyk4ukb.js";import"./PdfViewerSearchBar-C58nS9a3.js";import"./chevron-up-5MsGEDsY.js";import"./chevron-down-dh5AFKhr.js";import"./cross-BjW1gIQB.js";import"./PdfViewerSidebar-DDfrfZDG.js";import"./index-DXHuqct4.js";import"./index-CwxTqGIm.js";import"./index-BAotWep5.js";import"./PdfViewerToolbar-BA8kPwNx.js";import"./Button-_EOncV-8.js";import"./chevron-right-JfhVFnfL.js";import"./Input-Bt5QmGO0.js";import"./search-DGpCoBRn.js";import"./spin-m6UB76fD.js";import"./error-CEamcZeP.js";import"./withOsdkMetrics-DqoHWRxV.js";import"./makeExternalStore-BDSIsETy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
