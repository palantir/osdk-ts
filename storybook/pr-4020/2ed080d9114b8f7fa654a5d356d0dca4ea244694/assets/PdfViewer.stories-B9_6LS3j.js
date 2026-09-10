import{j as r,M as s}from"./iframe-DfRsO-W_.js";import{P as p}from"./pdf-viewer-CZYQlfmb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZGi_guv.js";import"./preload-helper-B1nnBqyx.js";import"./PdfViewer-DWAvT7He.js";import"./index-CQkS0c9h.js";import"./BasePdfViewer-BzCErOCX.js";import"./BasePdfViewer.module.css-BocIM3f5.js";import"./PdfViewerAnnotationLayer-CqOB3_H8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_AbkylUG.js";import"./PdfViewerOutlineSidebar-2Ved-aN1.js";import"./PdfViewerSidebarHeader-B2mL0dcB.js";import"./useBaseUiId-t6nqxOAa.js";import"./useControlled-DwMJ2aka.js";import"./CompositeRoot-220cWRm3.js";import"./CompositeItem-C6hDdpH4.js";import"./ToolbarRootContext-BRXAevlR.js";import"./composite-BNASiMUs.js";import"./svgIconContainer-DgyEbBbg.js";import"./PdfViewerSearchBar-D4ZzISof.js";import"./chevron-up-DCEL0TM6.js";import"./chevron-down-Cdf065g5.js";import"./cross-CBNkzS8W.js";import"./PdfViewerSidebar-BwMhcLwi.js";import"./index-DkHZL3b5.js";import"./index-0fIzBmZ6.js";import"./index-COUiLxiP.js";import"./PdfViewerToolbar-sr-g3Frb.js";import"./Button-PGajkELE.js";import"./chevron-right-BT0T-wk5.js";import"./Input-BeFyt6Zg.js";import"./search-DnesuR3u.js";import"./spin-hOla5PoY.js";import"./error-3c9XVh4b.js";import"./withOsdkMetrics-D1y4-r1W.js";import"./makeExternalStore-C23Jsp2C.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
