import{j as r,M as s}from"./iframe-BxrMAPhN.js";import{P as p}from"./pdf-viewer-BahW0gg6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BkJQoL_S.js";import"./preload-helper-DrnFR1_M.js";import"./PdfViewer-CF4x4VaY.js";import"./index-3ce-DqIm.js";import"./BasePdfViewer-0dmaxFSw.js";import"./BasePdfViewer.module.css-CNs8wePr.js";import"./PdfViewerAnnotationLayer-DPMJfF-f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEEbU7_O.js";import"./PdfViewerOutlineSidebar-BaNYDL6c.js";import"./PdfViewerSidebarHeader-u31eGFgA.js";import"./useBaseUiId-CYhkk9Wl.js";import"./useControlled-CBAJvoho.js";import"./CompositeRoot-BDmJiSR5.js";import"./CompositeItem-DrJtYX8s.js";import"./ToolbarRootContext-BseqN11S.js";import"./composite-Dd7hy379.js";import"./svgIconContainer-BTC4I1jP.js";import"./PdfViewerSearchBar-ZAlUWTj1.js";import"./chevron-up-aB_v0NyC.js";import"./chevron-down-vMhLf0Yn.js";import"./cross-CgUMfDbf.js";import"./PdfViewerSidebar-C-GUCY4V.js";import"./index-B8D9hLY9.js";import"./index-C4XN9ow6.js";import"./index-DZWGTrRj.js";import"./PdfViewerToolbar-Dkgk3kNP.js";import"./Button-BHjA9vXD.js";import"./chevron-right-3ouNGg4e.js";import"./Input-B49f-IH3.js";import"./search-DDIdgg65.js";import"./spin-DVOe0kQF.js";import"./error-AaI7Sssv.js";import"./withOsdkMetrics-PY8DhDl3.js";import"./makeExternalStore-BOIpe8LX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
