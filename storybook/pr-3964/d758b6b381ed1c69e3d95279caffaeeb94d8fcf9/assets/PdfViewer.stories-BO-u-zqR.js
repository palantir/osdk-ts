import{j as r,M as s}from"./iframe-C1V-jMWZ.js";import{P as p}from"./pdf-viewer-D32__BbE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBeGLkgz.js";import"./preload-helper-CJz78Ui1.js";import"./PdfViewer-Bq1WhI3D.js";import"./index-XvzsJt6X.js";import"./BasePdfViewer-BfS2wj8J.js";import"./BasePdfViewer.module.css-cQbX9XXk.js";import"./PdfViewerAnnotationLayer-CvTdVrgd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BS0n4cQV.js";import"./PdfViewerOutlineSidebar-mhihoUSE.js";import"./PdfViewerSidebarHeader-Ds3-YKyZ.js";import"./useBaseUiId-CpkLkrsv.js";import"./useControlled-DOOaGi2X.js";import"./CompositeRoot-C_T9Ti_N.js";import"./CompositeItem-CJ-8czWx.js";import"./ToolbarRootContext-ChsX3fpL.js";import"./composite-CHf1Zuon.js";import"./svgIconContainer-DtEZy4uz.js";import"./PdfViewerSearchBar-C9RQd-FY.js";import"./chevron-up-Dp3PAr-E.js";import"./chevron-down-BByq1bS3.js";import"./cross-DeZPYttd.js";import"./PdfViewerSidebar-BdWMXNhc.js";import"./index-nUVRiP22.js";import"./index-BxNUxb4e.js";import"./index-dKWUfAZT.js";import"./PdfViewerToolbar-nNzVOpht.js";import"./Button-B_XFbB5W.js";import"./chevron-right-CKtGZ8_u.js";import"./Input-JJCAZvBE.js";import"./search-DDETT7aQ.js";import"./spin-4BK6ioFk.js";import"./error-BvMD1TOJ.js";import"./withOsdkMetrics-BO4tQ83f.js";import"./makeExternalStore-RQ5jibpo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
