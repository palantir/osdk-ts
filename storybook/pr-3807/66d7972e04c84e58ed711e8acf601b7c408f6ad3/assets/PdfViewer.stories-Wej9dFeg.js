import{j as r,M as s}from"./iframe-C3I2vfo4.js";import{P as p}from"./pdf-viewer-DTre2WXO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZIwJ64u.js";import"./preload-helper-DLCNI-aM.js";import"./PdfRenderer-cnfCp3OQ.js";import"./index-CjlbFBQF.js";import"./PdfViewer-CRtDRJUk.js";import"./PdfViewer.module.css-BPGRGikA.js";import"./PdfViewerAnnotationLayer-BRC2abTr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bhbv2NUA.js";import"./PdfViewerOutlineSidebar-B1x2QYbi.js";import"./PdfViewerSidebarHeader-BdSPwHdl.js";import"./useBaseUiId-BEnwlPrh.js";import"./useControlled-DjF4xmFn.js";import"./CompositeRoot-CGnkNI_d.js";import"./CompositeItem-BgzFMOjc.js";import"./ToolbarRootContext-Cedd7atY.js";import"./composite-B0oGrJq8.js";import"./svgIconContainer-DC10GU3T.js";import"./PdfViewerSearchBar-CZYXQ3MZ.js";import"./chevron-up-UNtTPDM-.js";import"./chevron-down-CFoIf__9.js";import"./cross-Czwo4Gbj.js";import"./PdfViewerSidebar-Bv_XOwng.js";import"./index-BxuSZPx5.js";import"./index-g756CyT3.js";import"./index-BdMtjuPw.js";import"./PdfViewerToolbar-C98Kw-wR.js";import"./Button-BnGX5kZd.js";import"./chevron-right-CxaJVHUU.js";import"./Input-6iR3oUXP.js";import"./search-BST2d1n0.js";import"./spin-BtnLW0k8.js";import"./error-C5kvUQcl.js";import"./withOsdkMetrics-CzsfC_Tx.js";import"./makeExternalStore-BuO4JxRk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
