import{j as r,M as s}from"./iframe-2o2kyJSw.js";import{P as p}from"./pdf-viewer-DeIc7MRP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BbmJusl6.js";import"./preload-helper-CiJwpqMw.js";import"./PdfViewer-CJGQdHZq.js";import"./index-CitRnrnM.js";import"./BasePdfViewer-DXE8mRrM.js";import"./BasePdfViewer.module.css-BKllegXs.js";import"./PdfViewerAnnotationLayer-ByHxigEE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4Z2LUcGY.js";import"./PdfViewerOutlineSidebar-B6ediV3t.js";import"./PdfViewerSidebarHeader-3BxCT_e3.js";import"./useBaseUiId-CpKlAOSJ.js";import"./useControlled-BXgT251S.js";import"./CompositeRoot-DlZ_WcjG.js";import"./CompositeItem-CeKYfb90.js";import"./ToolbarRootContext-VK9eZ2Nh.js";import"./composite-BjSIx71V.js";import"./svgIconContainer-CuK8KMCF.js";import"./PdfViewerSearchBar-D30ayp07.js";import"./chevron-up-D3SojzBI.js";import"./chevron-down-DzSskaX4.js";import"./cross-B_lTfXfQ.js";import"./PdfViewerSidebar-Bvfkl315.js";import"./index--X-EHlCl.js";import"./index-2rHOwy8w.js";import"./index-CiEsaZes.js";import"./PdfViewerToolbar-BF2BuYqh.js";import"./Button-BNZyyCXs.js";import"./chevron-right-DsqwZ-s4.js";import"./Input-DYGxrYIz.js";import"./search-BjDFLGmu.js";import"./spin-Cs1nlFt3.js";import"./error-B6s9JUe9.js";import"./withOsdkMetrics-BmpmfXN7.js";import"./makeExternalStore-D2otK5Vr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
