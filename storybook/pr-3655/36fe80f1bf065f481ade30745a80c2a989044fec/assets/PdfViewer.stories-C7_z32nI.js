import{j as r,M as s}from"./iframe-DpnSyYKg.js";import{P as p}from"./pdf-viewer-CYSbDgUh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-4iAFtbc0.js";import"./preload-helper-D4Ne9IvA.js";import"./PdfRenderer-5wE00v9s.js";import"./index-BhE-BM1F.js";import"./PdfViewer-C7-YX2Kn.js";import"./PdfViewer.module.css-CX7CHkjk.js";import"./PdfViewerAnnotationLayer-xIdA3RBn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQpPkONa.js";import"./PdfViewerOutlineSidebar-DN1GlRMI.js";import"./PdfViewerSidebarHeader-fGvLxkja.js";import"./useBaseUiId-BXhD5RtC.js";import"./useControlled-ByflmZjz.js";import"./CompositeRoot-CiKeZEQj.js";import"./CompositeItem-CMedSlEq.js";import"./ToolbarRootContext-D9Rovtc1.js";import"./composite-GHogKWSt.js";import"./svgIconContainer-6ZtllvSg.js";import"./PdfViewerSearchBar-CRK1juRB.js";import"./chevron-up-nAgD6Dxc.js";import"./chevron-down-DcI0Fccd.js";import"./cross-CdRZLzcb.js";import"./PdfViewerSidebar-CNL4Bt6H.js";import"./index-Cq5MYYL8.js";import"./index-Bt0j-H5Q.js";import"./index-CJhmNOR9.js";import"./PdfViewerToolbar-6dhdtjFB.js";import"./Button-GAbnoE2Z.js";import"./chevron-right-1peVh2YS.js";import"./Input-x7mFGvsV.js";import"./search-BN0Oo0wI.js";import"./spin-DlBxLwwU.js";import"./error-U-LNQglq.js";import"./withOsdkMetrics-BeQr-ddq.js";import"./makeExternalStore-Ck6cDuZK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
