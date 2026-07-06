import{j as r,M as s}from"./iframe-Cq8p12pn.js";import{P as p}from"./pdf-viewer-llNrYnfd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhpFPVE6.js";import"./preload-helper-C6VrGVOb.js";import"./PdfRenderer-CgSTVH3h.js";import"./index-BoLNLxh1.js";import"./PdfViewer-CQHreUOD.js";import"./PdfViewer.module.css-BAPWfk5q.js";import"./PdfViewerAnnotationLayer-BE53yFfs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CABfoRVu.js";import"./PdfViewerOutlineSidebar-BNXNFrlP.js";import"./PdfViewerSidebarHeader-7x9T5lD3.js";import"./useBaseUiId-DId-nqnK.js";import"./useControlled-BH6TUeMo.js";import"./CompositeRoot-BbtWIBU6.js";import"./CompositeItem-Bp-emsOc.js";import"./ToolbarRootContext-CnCd_05O.js";import"./composite-50HOK_25.js";import"./svgIconContainer-C7H5M-bc.js";import"./PdfViewerSearchBar-DdWqRCv6.js";import"./chevron-up-DWjfhgNH.js";import"./chevron-down-BO42q-Iu.js";import"./cross-D0SuZwgh.js";import"./PdfViewerSidebar-DxQBqX8Q.js";import"./index-H2GARTa3.js";import"./index-Cv6ri_Mz.js";import"./index-CVs7jYhA.js";import"./PdfViewerToolbar-BONxwCnK.js";import"./Button-C5Kr7PxJ.js";import"./chevron-right-CEbXlGjl.js";import"./Input-CAyQf7LH.js";import"./search-BqZyb_hQ.js";import"./spin-DuscVeQQ.js";import"./error-C1ugyeBb.js";import"./withOsdkMetrics-CH6gwfXz.js";import"./makeExternalStore-Bz9iO7b2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
