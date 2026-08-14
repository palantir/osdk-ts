import{j as r,M as s}from"./iframe-BLv43k9J.js";import{P as p}from"./pdf-viewer-C7-4XJt3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCnr9d_m.js";import"./preload-helper-BWK7XSWt.js";import"./PdfViewer-CkCVD0lH.js";import"./index-DnJ2XWrc.js";import"./BasePdfViewer-ku-yPRLk.js";import"./BasePdfViewer.module.css-BF_7K17h.js";import"./PdfViewerAnnotationLayer-BU4b-3NC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClahtNeZ.js";import"./PdfViewerOutlineSidebar-k3_C2eTb.js";import"./PdfViewerSidebarHeader-C3OTqkES.js";import"./useBaseUiId-CsF7lQng.js";import"./useControlled-B_Pv1aNz.js";import"./CompositeRoot-DOCiDVLi.js";import"./CompositeItem-NoKSjGCV.js";import"./ToolbarRootContext-iQjixVp7.js";import"./composite-Vd-yFJr-.js";import"./svgIconContainer-lFjoNcIE.js";import"./PdfViewerSearchBar-ClwsSzrY.js";import"./chevron-up-BpQHl8q4.js";import"./chevron-down-ZtIbBqb_.js";import"./cross-DZXT4_BE.js";import"./PdfViewerSidebar-BmaCcu2k.js";import"./index-C3haW_Xn.js";import"./index-DH-aFVg8.js";import"./index-DBEuXQAb.js";import"./PdfViewerToolbar-DgUJT-x6.js";import"./Button-DoM6qM8k.js";import"./chevron-right-DAmwhxwU.js";import"./Input-H0U0jFqR.js";import"./search-BWAauGWf.js";import"./spin-CkigyABt.js";import"./error-DcpnTrTJ.js";import"./withOsdkMetrics-Dp2Ae3-Q.js";import"./makeExternalStore-DEk6s8Wu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
