import{j as r,M as s}from"./iframe-BdVamoeG.js";import{P as p}from"./pdf-viewer-BNRyIuZX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9nu9SD-.js";import"./preload-helper-Dye3EO5e.js";import"./PdfRenderer-CEY7n9sn.js";import"./index-DuW1XknK.js";import"./PdfViewer-CHqunj96.js";import"./PdfViewer.module.css-Dl3X2wjM.js";import"./PdfViewerAnnotationLayer-Cb-YRWaY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jc_LKoYs.js";import"./PdfViewerOutlineSidebar-BEoJsdsu.js";import"./PdfViewerSidebarHeader-DtTI8gIy.js";import"./useBaseUiId-C2AcVyH_.js";import"./useControlled-DtLfw4KF.js";import"./CompositeRoot-Bia_x_W0.js";import"./CompositeItem-uLqgt7zO.js";import"./ToolbarRootContext-DI6SIN63.js";import"./composite-CE_k4VJ_.js";import"./svgIconContainer-Cu8qhMAy.js";import"./PdfViewerSearchBar-CL0zYOqN.js";import"./chevron-up-DPOmb6Or.js";import"./chevron-down-VlFmUn0p.js";import"./cross-_ryZ0HJ8.js";import"./PdfViewerSidebar-BCjPKyOd.js";import"./index-zD8e3upo.js";import"./index-BkHR2uR4.js";import"./index-C2-3XFYc.js";import"./PdfViewerToolbar-Bvun6Tmx.js";import"./Button-DgF6VF4p.js";import"./chevron-right-D6R-Jwkl.js";import"./Input-COSsUxY7.js";import"./search-BUrwIQwE.js";import"./spin-DAia4ZMI.js";import"./error-fKbIgIk_.js";import"./withOsdkMetrics-N3-MvQLc.js";import"./makeExternalStore-BSWGLQXv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
