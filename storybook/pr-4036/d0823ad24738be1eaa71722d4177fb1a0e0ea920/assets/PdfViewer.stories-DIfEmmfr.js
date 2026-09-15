import{j as r,M as s}from"./iframe-yBf-ojhu.js";import{P as p}from"./pdf-viewer-BpYypKF7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cf06g6zx.js";import"./preload-helper-CGYiisRB.js";import"./PdfViewer-CL-tpzak.js";import"./index-CdRKjNXW.js";import"./BasePdfViewer-ImblpizF.js";import"./BasePdfViewer.module.css-BIeTae9s.js";import"./PdfViewerAnnotationLayer-7q0SJjB0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLZ6MuTz.js";import"./PdfViewerOutlineSidebar-DZD24a5S.js";import"./PdfViewerSidebarHeader-B9NUJ7da.js";import"./useBaseUiId-CZtNEuC3.js";import"./useControlled-DEWrsH1j.js";import"./CompositeRoot-DIlOfpzd.js";import"./CompositeItem-BMY8zStj.js";import"./ToolbarRootContext-CnGnSWc3.js";import"./composite-BhJud1YY.js";import"./svgIconContainer-DzKsK3pp.js";import"./PdfViewerSearchBar-DOpoKjXW.js";import"./chevron-up-IoGAumLx.js";import"./chevron-down-C0-Ffhm_.js";import"./cross-CpqgxsIm.js";import"./PdfViewerSidebar-BqCD0qRC.js";import"./index-DXSY2W-l.js";import"./index-BHACjACD.js";import"./index-CsTimawz.js";import"./PdfViewerToolbar-GoLoIQpo.js";import"./Button-CqafgKxL.js";import"./chevron-right-CZUs4P5O.js";import"./Input-IJnkzHlh.js";import"./search-BZ0OOikS.js";import"./spin-c8IdOUVD.js";import"./error-C4tONck9.js";import"./withOsdkMetrics-CxM1E0kE.js";import"./makeExternalStore-BJgD01DS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
