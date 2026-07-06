import{j as r,M as s}from"./iframe-CFh3-JCM.js";import{P as p}from"./pdf-viewer-Cr1UgIEh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Csr3fKOZ.js";import"./preload-helper-DL4VrRXH.js";import"./PdfRenderer-CwXE-H6p.js";import"./index-D1oJrahl.js";import"./PdfViewer-BeSzmAj1.js";import"./PdfViewer.module.css-B_iYGMfO.js";import"./PdfViewerAnnotationLayer-BUmGpbv0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPGCFGLq.js";import"./PdfViewerOutlineSidebar-Dgy5IHHT.js";import"./PdfViewerSidebarHeader-CG40gCL7.js";import"./useBaseUiId-BS4BwdWN.js";import"./useControlled-DSY4fqOM.js";import"./CompositeRoot-BdanIxjQ.js";import"./CompositeItem-sg-r3ns5.js";import"./ToolbarRootContext-C0iUfkX1.js";import"./composite-CrLiFvyr.js";import"./svgIconContainer-DecEMNPN.js";import"./PdfViewerSearchBar-BFNXS3PX.js";import"./chevron-up-BQX5yZZW.js";import"./chevron-down-DgtHkiFM.js";import"./cross-Bz6JUH3g.js";import"./PdfViewerSidebar-DVkkLtC7.js";import"./index-1vULKbLA.js";import"./index-CEpC6BUy.js";import"./index-CXUWnWak.js";import"./PdfViewerToolbar-CSQJva55.js";import"./Button-CODM8oW8.js";import"./chevron-right-D-V49cT4.js";import"./Input-Co3H1Pkd.js";import"./search-BywwsUpb.js";import"./spin-Dnskt1Gn.js";import"./error-DyeJdnJE.js";import"./withOsdkMetrics-ob1fw8qL.js";import"./makeExternalStore-9bC9w86u.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
