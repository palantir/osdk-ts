import{j as r,M as s}from"./iframe-BMrwWMZ2.js";import{P as p}from"./pdf-viewer-BttmiDUC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3U8enpdY.js";import"./preload-helper-DoFjuVNT.js";import"./PdfViewer-BYrNNyke.js";import"./index-B-70XFhu.js";import"./BasePdfViewer-DMnhZfU4.js";import"./BasePdfViewer.module.css-Bd1Rzvw2.js";import"./PdfViewerAnnotationLayer-Ca9Z54uM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkDu4xPX.js";import"./PdfViewerOutlineSidebar-QlTSCXd_.js";import"./PdfViewerSidebarHeader-BhlXpbp5.js";import"./useBaseUiId-CWfKm3xo.js";import"./useControlled-D483ZYKr.js";import"./CompositeRoot-8skUI5uI.js";import"./CompositeItem-Cr7Wo-Nu.js";import"./ToolbarRootContext-yILvKIp4.js";import"./composite-BaT2Rrgm.js";import"./svgIconContainer-kz6kEcEQ.js";import"./PdfViewerSearchBar-KY7YJvZZ.js";import"./chevron-up-wg8bUuDi.js";import"./chevron-down-Cm6BVMO0.js";import"./cross-xNU9IbBp.js";import"./PdfViewerSidebar-OqvmFtU8.js";import"./index-CE_tjB-k.js";import"./index-CSBMmUL0.js";import"./index-p-n9-sXg.js";import"./PdfViewerToolbar-BxHM9Qo8.js";import"./Button-WcPNJQ9X.js";import"./chevron-right-DjWs0iro.js";import"./Input-BMTygJUG.js";import"./search-BhHSPRHE.js";import"./spin-DN1IHlT8.js";import"./error-ZGBsqwOl.js";import"./withOsdkMetrics-fvKzM9Fz.js";import"./makeExternalStore-CVWgtyr5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
