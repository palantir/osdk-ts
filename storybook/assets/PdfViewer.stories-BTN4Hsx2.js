import{j as r,M as s}from"./iframe-9OpC_N8y.js";import{P as p}from"./pdf-viewer-6MUe7jTI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7pL0lRA.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BlrXvEOT.js";import"./index-DSxditmY.js";import"./BasePdfViewer-C-1QLu3-.js";import"./BasePdfViewer.module.css-CepyKiQc.js";import"./PdfViewerAnnotationLayer-6YC8aZTm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJhIW27f.js";import"./PdfViewerOutlineSidebar-B5sF3GoM.js";import"./PdfViewerSidebarHeader-Dc8DlHtB.js";import"./useBaseUiId-DBqP-0QL.js";import"./useControlled-B9BwmRqN.js";import"./CompositeRoot-48755dZU.js";import"./CompositeItem-BQvPBjhd.js";import"./ToolbarRootContext-D8Su1VOS.js";import"./composite-CrXso5kT.js";import"./svgIconContainer-oJMft6mx.js";import"./PdfViewerSearchBar-Dl71wjT2.js";import"./chevron-up-Bp1xpvGi.js";import"./chevron-down-DRK_INXA.js";import"./cross-BfZJOFYH.js";import"./PdfViewerSidebar-Do2d1caL.js";import"./index-BDwZVFt2.js";import"./index-BYheStGz.js";import"./index-BWMAAzDl.js";import"./PdfViewerToolbar-DvlSHxjS.js";import"./Button-CEDTBjQ9.js";import"./chevron-right-Bc6WY_SH.js";import"./Input-22pjcFCD.js";import"./search-TnHR6DGv.js";import"./spin-Ducn1lgj.js";import"./error-BFjtkE9z.js";import"./withOsdkMetrics-BMtD0lPR.js";import"./makeExternalStore-Dcb2I-X9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
