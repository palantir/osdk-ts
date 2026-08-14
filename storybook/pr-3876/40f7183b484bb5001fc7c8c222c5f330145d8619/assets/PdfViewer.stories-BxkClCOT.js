import{j as r,M as s}from"./iframe-C9dvvK0s.js";import{P as p}from"./pdf-viewer-B1g-qujO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ahf9qA0A.js";import"./preload-helper-iV6YG4Aw.js";import"./PdfViewer-CeHfFU1j.js";import"./index-CCl1SyK9.js";import"./BasePdfViewer-C50trxK0.js";import"./BasePdfViewer.module.css-D6Hlw3pl.js";import"./PdfViewerAnnotationLayer-7JyC4s-K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B17sxto2.js";import"./PdfViewerOutlineSidebar-MoBPQbWo.js";import"./PdfViewerSidebarHeader-HjEzPvjJ.js";import"./useBaseUiId-Br_MFpl1.js";import"./useControlled-N1u5Cna7.js";import"./CompositeRoot-CqbJS2jH.js";import"./CompositeItem-Bcug-Hhc.js";import"./ToolbarRootContext-B-a5UJLi.js";import"./composite-C5a4BBeY.js";import"./svgIconContainer-DzOculqA.js";import"./PdfViewerSearchBar-BzCMMxch.js";import"./chevron-up-pMyBqM4-.js";import"./chevron-down-Cc5gCW9T.js";import"./cross-DoooZe2s.js";import"./PdfViewerSidebar-Ba9i7FAh.js";import"./index-DdkJNkIB.js";import"./index-R2ywC05c.js";import"./index-CkMTtaTO.js";import"./PdfViewerToolbar-pcN9hLQs.js";import"./Button-yjOlms4F.js";import"./chevron-right-CN3-D-YW.js";import"./Input-VMFQEfqY.js";import"./search-t3Hkw5qC.js";import"./spin-Cz6HyhIZ.js";import"./error-QUoX6T23.js";import"./withOsdkMetrics-dCYtoeio.js";import"./makeExternalStore-DRTRnKjE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
