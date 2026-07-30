import{j as r,M as s}from"./iframe-CjguFHy4.js";import{P as p}from"./pdf-viewer-4tsoAUnG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-F-Ok1CaU.js";import"./preload-helper-LDqCwxAd.js";import"./PdfRenderer-C19sk2Nz.js";import"./index-BB032sbZ.js";import"./PdfViewer-DRZ0lxkk.js";import"./PdfViewer.module.css-DQ0Meg3P.js";import"./PdfViewerAnnotationLayer-DssSzRee.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGM05D1D.js";import"./PdfViewerOutlineSidebar-zIdnkkoy.js";import"./PdfViewerSidebarHeader-B_I0LYJB.js";import"./useBaseUiId-CgMNdHCe.js";import"./useControlled-CjqkuBBy.js";import"./CompositeRoot-ZeNFrRyT.js";import"./CompositeItem-DupF21ys.js";import"./ToolbarRootContext-Cc_rTViK.js";import"./composite-Dx3ugufv.js";import"./svgIconContainer-BZwzEo8G.js";import"./PdfViewerSearchBar-C0QIcpH6.js";import"./chevron-up-C_d-iokT.js";import"./chevron-down-ZzrJRIAu.js";import"./cross-D1aOBf9U.js";import"./PdfViewerSidebar-Dk15OU7B.js";import"./index-3HrMLGVC.js";import"./index-BIFsH4xl.js";import"./index-C0VOKt8s.js";import"./PdfViewerToolbar-BDai4Mw_.js";import"./Button-D0KOIrm4.js";import"./chevron-right-CBzZsGgi.js";import"./Input-DSfygnqR.js";import"./search-PZYHdBYN.js";import"./spin-D6fPbKQS.js";import"./error-C_FLUo1p.js";import"./withOsdkMetrics-fD7F6GVF.js";import"./makeExternalStore-DL1G6fQU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
