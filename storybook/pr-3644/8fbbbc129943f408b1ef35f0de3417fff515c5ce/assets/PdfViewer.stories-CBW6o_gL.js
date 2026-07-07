import{j as r,M as s}from"./iframe-ByDoaX8C.js";import{P as p}from"./pdf-viewer-BU5TcBwh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D0m1ej7D.js";import"./preload-helper-BvaD9OZJ.js";import"./PdfRenderer-YZNx__Qo.js";import"./index-GlKsUbbN.js";import"./PdfViewer-BIoNHbaQ.js";import"./PdfViewer.module.css-BP7axze6.js";import"./PdfViewerAnnotationLayer-Bv002pYX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVQ5LHus.js";import"./PdfViewerOutlineSidebar-CvyW2K-s.js";import"./PdfViewerSidebarHeader-DZty76qy.js";import"./useBaseUiId-Dg_IP9k7.js";import"./useControlled-61dg8lwC.js";import"./CompositeRoot-BHlGCOCz.js";import"./CompositeItem-5O_RuQIb.js";import"./ToolbarRootContext-BjgxX-Yn.js";import"./composite-DgARTLK0.js";import"./svgIconContainer-D6ZV2OEK.js";import"./PdfViewerSearchBar-B7CwK6Oq.js";import"./chevron-up-DtV7Ildr.js";import"./chevron-down-CHlnzCkk.js";import"./cross-Ci6Jj7x1.js";import"./PdfViewerSidebar-ufdJxYsT.js";import"./index-BFHbPmzA.js";import"./index-C6mHMKVD.js";import"./index-Q91mkqBj.js";import"./PdfViewerToolbar-BHN8wDIB.js";import"./Button-CKKva8Mx.js";import"./chevron-right-B_z9dM6x.js";import"./Input-r_6ftysT.js";import"./search-CAxEEjAo.js";import"./spin-B7ZicnPN.js";import"./error-De-72miU.js";import"./withOsdkMetrics-BN9BRjTK.js";import"./makeExternalStore-Bk6gHyl4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
