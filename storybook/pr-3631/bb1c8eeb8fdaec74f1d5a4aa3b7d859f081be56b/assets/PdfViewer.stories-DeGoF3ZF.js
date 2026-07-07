import{j as r,M as s}from"./iframe-I_k9iA2r.js";import{P as p}from"./pdf-viewer-UcZc3sqz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHv0543A.js";import"./preload-helper-Rq9LGVNY.js";import"./PdfRenderer-LNw0rcs5.js";import"./index-DVhYSATe.js";import"./PdfViewer-gAmaqx4Q.js";import"./PdfViewer.module.css-C6aDvtcm.js";import"./PdfViewerAnnotationLayer-BqXhXQZI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bwi1hCF_.js";import"./PdfViewerOutlineSidebar-B0cqxgKF.js";import"./PdfViewerSidebarHeader-CX2fa1GW.js";import"./useBaseUiId-BC0qB70q.js";import"./useControlled-BiiA8gv_.js";import"./CompositeRoot-C7gT2QTE.js";import"./CompositeItem-C0O-edlN.js";import"./ToolbarRootContext-ClYn3uN4.js";import"./composite-94aKrmzL.js";import"./svgIconContainer-Bm8IQIgc.js";import"./PdfViewerSearchBar-B0nkRg26.js";import"./chevron-up-DrhCTum8.js";import"./chevron-down-CVrr8Nei.js";import"./cross-DZj5F5yy.js";import"./PdfViewerSidebar-CzhrkPj9.js";import"./index-DdeXxzng.js";import"./index-CxDh8uEw.js";import"./index-jfMTX6SL.js";import"./PdfViewerToolbar-BZupu2fP.js";import"./Button-CIvcc5OZ.js";import"./chevron-right-jNgj9IPM.js";import"./Input-CMRXUrbv.js";import"./search-DQFp49xm.js";import"./spin-sRkV__we.js";import"./error-Bsb3fTvs.js";import"./withOsdkMetrics-CngPNjHz.js";import"./makeExternalStore-DfER66Jm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
