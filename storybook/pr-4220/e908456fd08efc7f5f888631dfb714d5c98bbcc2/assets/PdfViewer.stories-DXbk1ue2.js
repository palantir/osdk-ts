import{j as r,M as s}from"./iframe-MDo3IV8i.js";import{P as p}from"./pdf-viewer-Dgakk2aw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CfHaiqYH.js";import"./preload-helper-DePZz3Cx.js";import"./PdfViewer-CqcNxsJN.js";import"./index-Bd9muxHi.js";import"./BasePdfViewer-BVuLYQCW.js";import"./BasePdfViewer.module.css-0Sr-FoBx.js";import"./PdfViewerAnnotationLayer-Co6iyT4r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cz5ZTgek.js";import"./PdfViewerOutlineSidebar-Dy7e5rt0.js";import"./PdfViewerSidebarHeader-C1TehN1W.js";import"./useBaseUiId-DZYLQUMX.js";import"./useControlled-OtMCa810.js";import"./CompositeRoot-DdPdynNw.js";import"./CompositeItem-DLH43jaW.js";import"./ToolbarRootContext-gbgv7X5-.js";import"./composite-BLxakyPe.js";import"./svgIconContainer-Di1UT1Hh.js";import"./PdfViewerSearchBar-DycmcmXm.js";import"./chevron-up-Txw090Cf.js";import"./chevron-down-WrjnBnPA.js";import"./cross-DnJsfvPF.js";import"./PdfViewerSidebar-DfbVgTn6.js";import"./index-B_iT01JM.js";import"./index-C0Z9YQ4r.js";import"./index-DtzdNaWl.js";import"./PdfViewerToolbar-XP2fXEme.js";import"./Button-Bqg_-6Me.js";import"./chevron-right-BzGhI9Dq.js";import"./Input-DM_kQkOg.js";import"./search-DZiAT2nK.js";import"./spin-GkeoBK7Y.js";import"./error-x3VOvdeC.js";import"./withOsdkMetrics-Bd9ZRtnK.js";import"./makeExternalStore-0rzwJ2ZN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
