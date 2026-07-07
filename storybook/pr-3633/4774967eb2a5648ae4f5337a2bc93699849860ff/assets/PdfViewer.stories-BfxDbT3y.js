import{j as r,M as s}from"./iframe-587nkGNT.js";import{P as p}from"./pdf-viewer-ME792fdG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C9QeA0M_.js";import"./preload-helper-CoJdC1JQ.js";import"./PdfRenderer-B4kDXQSu.js";import"./index-8iTYB9of.js";import"./PdfViewer-CIN9mKOw.js";import"./PdfViewer.module.css-Cdd35jp-.js";import"./PdfViewerAnnotationLayer-STZYuT07.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C349uSqF.js";import"./PdfViewerOutlineSidebar-BCPa59HD.js";import"./PdfViewerSidebarHeader-CM2vIkr7.js";import"./useBaseUiId-DC_uCOHy.js";import"./useControlled-Dj5fAeRO.js";import"./CompositeRoot-kfSruj3l.js";import"./CompositeItem-CxjNTHD_.js";import"./ToolbarRootContext-C19dgtRc.js";import"./composite-B17XNdWQ.js";import"./svgIconContainer-BQEvJWm4.js";import"./PdfViewerSearchBar-DArA9Vu_.js";import"./chevron-up-BQDoXOhe.js";import"./chevron-down-2FdgNLzq.js";import"./cross-tJjGET59.js";import"./PdfViewerSidebar-D-nGxQc7.js";import"./index-C3avtWXL.js";import"./index-Cgc8teVl.js";import"./index-CiDOp9oc.js";import"./PdfViewerToolbar-C9bcS7D8.js";import"./Button-Dk23DCAr.js";import"./chevron-right-gEHg29Ka.js";import"./Input-Brrkxm-m.js";import"./search-BMnZdPNv.js";import"./spin-CxcA2UnL.js";import"./error-CJJjbBaA.js";import"./withOsdkMetrics-CCP3IblO.js";import"./makeExternalStore-Bb2KauYY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
