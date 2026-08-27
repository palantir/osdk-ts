import{j as r,M as s}from"./iframe-DIrXRTUE.js";import{P as p}from"./pdf-viewer-rXicJau6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-dpKWz7xK.js";import"./preload-helper-BDGKLWkc.js";import"./PdfViewer-4_hGGdOh.js";import"./index-DXhTZYa-.js";import"./BasePdfViewer-Bbc9rhIJ.js";import"./BasePdfViewer.module.css-BzV_VI6T.js";import"./PdfViewerAnnotationLayer-cKmIFhDS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CFcCXxwp.js";import"./PdfViewerOutlineSidebar-C1xj7cWy.js";import"./PdfViewerSidebarHeader-BUGy6xIQ.js";import"./useBaseUiId-DggC7k7V.js";import"./useControlled-CY4zZ4Nk.js";import"./CompositeRoot-Dk_TMQY_.js";import"./CompositeItem-DZtzCGg4.js";import"./ToolbarRootContext-BwPH-v7H.js";import"./composite-CQGrDifO.js";import"./svgIconContainer-BhiIhdyU.js";import"./PdfViewerSearchBar-DdER5Sa6.js";import"./chevron-up-Ck-9ks1e.js";import"./chevron-down-ClhW5Bkg.js";import"./cross-BWlnnw7Z.js";import"./PdfViewerSidebar-DUw0wR_S.js";import"./index-CoHjJ82-.js";import"./index-DNNp_YhZ.js";import"./index-C7mJLSNN.js";import"./PdfViewerToolbar-CG5_lObv.js";import"./Button-CFV4ykZ5.js";import"./chevron-right-C9D4YCbk.js";import"./Input-xU7CCW7r.js";import"./search-BiMWNAZT.js";import"./spin-5vhFM60j.js";import"./error-Fw0nPuQ9.js";import"./withOsdkMetrics-BVdX0j6l.js";import"./makeExternalStore-CfejnPp0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
