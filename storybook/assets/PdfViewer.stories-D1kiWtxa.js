import{j as r,M as s}from"./iframe-B5v0vUXI.js";import{P as p}from"./pdf-viewer-BmrVm-DE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-56DOk4UY.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-B9KyHCTj.js";import"./index-CvFqYh-3.js";import"./PdfViewer-L7xNcCNv.js";import"./PdfViewer.module.css-C3UGerqD.js";import"./PdfViewerAnnotationLayer-CDCG2sq9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcnBYtHJ.js";import"./PdfViewerOutlineSidebar-C7Tmq2nZ.js";import"./PdfViewerSidebarHeader-BUziRzf-.js";import"./useBaseUiId-BsF4zk_0.js";import"./useControlled-CpEwdjMu.js";import"./CompositeRoot-DEMwWLXK.js";import"./CompositeItem-DYk5HRQt.js";import"./ToolbarRootContext-CUj1ZiHN.js";import"./composite-DZ7boRnK.js";import"./svgIconContainer-C5Z2vPrm.js";import"./PdfViewerSearchBar-CZ_wzWlM.js";import"./chevron-up-CgdvtX4Y.js";import"./chevron-down-rGDhbi4C.js";import"./cross-YUgeJ--M.js";import"./PdfViewerSidebar-noubc0W7.js";import"./index-B_up1t_H.js";import"./index-3MPkyRzd.js";import"./index-CMCS9DrW.js";import"./PdfViewerToolbar-CZfu8xv-.js";import"./Button-8tyoJWc4.js";import"./chevron-right-CJpHayCP.js";import"./Input-CTukojuw.js";import"./search-Kemz_XqC.js";import"./spin-DtUbiktI.js";import"./error-K1wLn0w3.js";import"./withOsdkMetrics-D6qhNBkt.js";import"./makeExternalStore-Cxkn3s2m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
