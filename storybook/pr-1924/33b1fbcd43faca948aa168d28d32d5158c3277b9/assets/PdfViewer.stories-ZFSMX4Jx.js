import{j as r,M as s}from"./iframe-CiXN6Rb7.js";import{P as p}from"./pdf-viewer-RwjWwUQ8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEEVGm1-.js";import"./preload-helper-C-ku1ssL.js";import"./PdfRenderer-DUQjFJQ1.js";import"./index-BOVQhHfc.js";import"./PdfViewer-B91iFUsL.js";import"./PdfViewer.module.css-BA_i4kYc.js";import"./PdfViewerAnnotationLayer-CCWrl-RC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1R6OUuv.js";import"./PdfViewerOutlineSidebar-Bfh4kXw0.js";import"./PdfViewerSidebarHeader-BQXQwH1C.js";import"./useBaseUiId-DhqbF7uF.js";import"./useControlled-BHUaQP_N.js";import"./CompositeRoot-CD7kHxZV.js";import"./CompositeItem-NTnAxNX4.js";import"./ToolbarRootContext-Rzd-Bgfk.js";import"./composite-DvNZ1Icc.js";import"./svgIconContainer-BNoMSL-q.js";import"./PdfViewerSearchBar-AgpOHZyx.js";import"./chevron-up-BaS9lDnE.js";import"./chevron-down-Cl2mbEtn.js";import"./cross-B2R0Y7pu.js";import"./PdfViewerSidebar-CT3PCrfN.js";import"./index-DalgX7dU.js";import"./index-C8266igj.js";import"./index-Dn6kMd0t.js";import"./PdfViewerToolbar-YKH9ji6h.js";import"./Button-D1eyqhD7.js";import"./chevron-right-q1dEIVHm.js";import"./Input-Csin5kfK.js";import"./search-STEKGZkh.js";import"./spin-CyUVEJJ0.js";import"./error-DeGXzC9x.js";import"./withOsdkMetrics-BeQoUM0s.js";import"./makeExternalStore-BTybznxs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
