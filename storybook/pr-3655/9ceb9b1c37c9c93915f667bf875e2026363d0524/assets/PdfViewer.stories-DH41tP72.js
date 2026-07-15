import{j as r,M as s}from"./iframe-BQbGwNJm.js";import{P as p}from"./pdf-viewer-C5GFRgS5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCu4eggF.js";import"./preload-helper-DZhVWGpL.js";import"./PdfRenderer-Dpe3iH59.js";import"./index-c-KUwE8v.js";import"./PdfViewer-DfFls0N4.js";import"./PdfViewer.module.css-Dy3qeJOY.js";import"./PdfViewerAnnotationLayer-CrsCYrLU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4x4nxSX.js";import"./PdfViewerOutlineSidebar-ChXEKi5e.js";import"./PdfViewerSidebarHeader-DWY7xtt4.js";import"./useBaseUiId-GT7f3Dl5.js";import"./useControlled-DWqy833M.js";import"./CompositeRoot-D92ME1Cv.js";import"./CompositeItem-DQ9TTb0x.js";import"./ToolbarRootContext-B__DhFIx.js";import"./composite-CXqMHlaT.js";import"./svgIconContainer-Bkd6Vdtd.js";import"./PdfViewerSearchBar-nGiyEZO2.js";import"./chevron-up-D7wspT0d.js";import"./chevron-down-Bq756dsS.js";import"./cross-1e7sKJ3H.js";import"./PdfViewerSidebar-Mo81ismc.js";import"./index-BME3csC7.js";import"./index-BwjBTWX5.js";import"./index-N7hAlELw.js";import"./PdfViewerToolbar-DkszkJK3.js";import"./Button-DIIydijW.js";import"./chevron-right-Dq1G55qI.js";import"./Input-WeXDQawZ.js";import"./search-7Vs1LIzt.js";import"./spin-Dr4zZr0O.js";import"./error-Ds75ijE9.js";import"./withOsdkMetrics-rD9P4-Mu.js";import"./makeExternalStore-CVg3iLKT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
