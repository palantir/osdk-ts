import{j as r,M as s}from"./iframe-DXDjAXel.js";import{P as p}from"./pdf-viewer-0AL3791C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-6AyZNsfG.js";import"./preload-helper-IpZxA0ro.js";import"./PdfViewer-BicYovCe.js";import"./index-CpU5tjqP.js";import"./BasePdfViewer-hLzoWpZl.js";import"./BasePdfViewer.module.css-CbrzJI72.js";import"./PdfViewerAnnotationLayer-CJ0m8UoD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AM7gsH9W.js";import"./PdfViewerOutlineSidebar-CbATXmfs.js";import"./PdfViewerSidebarHeader-ON1zIFbb.js";import"./useBaseUiId-C45Ma1UV.js";import"./useControlled-KXVdK95E.js";import"./CompositeRoot-zXPDzw2Z.js";import"./CompositeItem-CDBKBcu9.js";import"./ToolbarRootContext-YFTPY9mo.js";import"./composite--V8DJrbe.js";import"./svgIconContainer-jCzC3C8h.js";import"./PdfViewerSearchBar-C5XIY2wM.js";import"./chevron-up-CTqyJ7aC.js";import"./chevron-down-KI9ROJP6.js";import"./cross-DEtWv0qy.js";import"./PdfViewerSidebar-DhnXPbs8.js";import"./index-BZKWr6fS.js";import"./index-DeWq_guV.js";import"./index-BxV2gtcY.js";import"./PdfViewerToolbar-CUOVHuAt.js";import"./Button-B-4Jw48N.js";import"./chevron-right-Cf-wvkAs.js";import"./Input-Dpc4Iwso.js";import"./search-CiGMtB3E.js";import"./spin-qbSjdm87.js";import"./error-Ba9KLhOx.js";import"./withOsdkMetrics-B_T1pq9p.js";import"./makeExternalStore-Dyu5lTE9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
