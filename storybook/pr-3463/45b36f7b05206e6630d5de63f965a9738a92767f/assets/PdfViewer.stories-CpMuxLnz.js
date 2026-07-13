import{j as r,M as s}from"./iframe-DncJSr5p.js";import{P as p}from"./pdf-viewer-DPbXreLx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2SP4k_hP.js";import"./preload-helper-DROBlN7A.js";import"./PdfRenderer-CY0f1pj7.js";import"./index-DnUlBG1A.js";import"./PdfViewer-CxDbZT30.js";import"./PdfViewer.module.css-CAGP70ci.js";import"./PdfViewerAnnotationLayer-Cl_cCzHc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVSbgPh-.js";import"./PdfViewerOutlineSidebar-BRFd5_Qt.js";import"./PdfViewerSidebarHeader-Y2JjDrDr.js";import"./useBaseUiId-BSt68QBR.js";import"./useControlled-DyIxNgjv.js";import"./CompositeRoot-BGigT4x0.js";import"./CompositeItem-jMDKTU8M.js";import"./ToolbarRootContext-C0UeEYZg.js";import"./composite-pUmE0otM.js";import"./svgIconContainer-op2ccpZF.js";import"./PdfViewerSearchBar-BfMDD-21.js";import"./chevron-up-DC-tErDk.js";import"./chevron-down-D7W3sjBX.js";import"./cross-i5acO9JW.js";import"./PdfViewerSidebar-DkThvLyX.js";import"./index-Cgz4I0It.js";import"./index-PUclW51s.js";import"./index-BjEAtvSg.js";import"./PdfViewerToolbar-BISF6pGs.js";import"./Button-AiULEb3a.js";import"./chevron-right-C_lppjHy.js";import"./Input-BQdi7hpx.js";import"./search-Dkd-n0Ml.js";import"./spin-DtE_DlOd.js";import"./error-BtXBxITc.js";import"./withOsdkMetrics-Bm5xwXi6.js";import"./makeExternalStore-D1-pUQGc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
