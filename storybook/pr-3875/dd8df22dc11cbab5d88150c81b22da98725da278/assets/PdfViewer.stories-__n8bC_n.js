import{j as r,M as s}from"./iframe-EEz1IOka.js";import{P as p}from"./pdf-viewer-DtsI51bf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_F7Z1DT.js";import"./preload-helper-CGhdtBtK.js";import"./PdfViewer-Rj699jbF.js";import"./index-wrVUERdf.js";import"./BasePdfViewer-DMdftagn.js";import"./BasePdfViewer.module.css-CJsGdh6D.js";import"./PdfViewerAnnotationLayer-C3d6KvNY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Do2Jiy3f.js";import"./PdfViewerOutlineSidebar-P2Dw9QV2.js";import"./PdfViewerSidebarHeader-C7SHLh14.js";import"./useBaseUiId-CcQzYqcN.js";import"./useControlled-g6qmFj-Q.js";import"./CompositeRoot-DDFwpMH_.js";import"./CompositeItem-C527w4Jh.js";import"./ToolbarRootContext-b0NW8oaj.js";import"./composite-hdmoU3rn.js";import"./svgIconContainer-lS5adnyJ.js";import"./PdfViewerSearchBar-CR8qIAh2.js";import"./chevron-up-Dz8AQCea.js";import"./chevron-down-C5I-Kczg.js";import"./cross-CuMKbR8C.js";import"./PdfViewerSidebar-CtxL0hL9.js";import"./index-Ex8GKG8s.js";import"./index-BPya6wgz.js";import"./index-QBb9cK5I.js";import"./PdfViewerToolbar-D8OR5HBh.js";import"./Button-BPpqCEih.js";import"./chevron-right-j2KBQ7wr.js";import"./Input-BvlDQZSp.js";import"./search-BsnNci57.js";import"./spin-DzKuqRn7.js";import"./error-CU68iUeI.js";import"./withOsdkMetrics-DuSdcNfN.js";import"./makeExternalStore-DZf_gtwe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
