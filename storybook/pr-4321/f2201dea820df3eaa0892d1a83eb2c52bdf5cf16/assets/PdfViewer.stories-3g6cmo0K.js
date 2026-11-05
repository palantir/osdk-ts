import{j as r,M as s}from"./iframe-D7WyLq_R.js";import{P as p}from"./pdf-viewer-BmUPHwkR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-c5Zxhv1q.js";import"./preload-helper-BqfBxCjy.js";import"./PdfViewer-CePaxqKy.js";import"./index-HyeIDcrc.js";import"./BasePdfViewer-Cwj2OqPo.js";import"./BasePdfViewer.module.css-Bhk1T0T_.js";import"./PdfViewerAnnotationLayer-Gbl8b2Cd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CpjyYdj8.js";import"./PdfViewerOutlineSidebar-C0C_ZfON.js";import"./PdfViewerSidebarHeader-BcJvzMcW.js";import"./useBaseUiId-CG-SGXYP.js";import"./useControlled-Bb8KRWad.js";import"./CompositeRoot-KfQEq8rJ.js";import"./CompositeItem-ZpmtOb_M.js";import"./ToolbarRootContext-Fnt7cK66.js";import"./composite-D_DTOoGQ.js";import"./svgIconContainer-B4x4BdHn.js";import"./PdfViewerSearchBar-Deh32uQ6.js";import"./chevron-up-BYOLxdH9.js";import"./chevron-down-CUo9ik68.js";import"./cross-uvcs2Wcl.js";import"./PdfViewerSidebar-CZGZBbFz.js";import"./index-CJGKKiqL.js";import"./index-ufR6xdAx.js";import"./index-D2fZUIcR.js";import"./PdfViewerToolbar-0qRVCQBv.js";import"./Button-BE_yPzwR.js";import"./chevron-right-Celro0XV.js";import"./Input-C4gz0NfF.js";import"./search-s_J2wlUd.js";import"./spin-BFUBf48n.js";import"./error-D2VV45CC.js";import"./withOsdkMetrics-BvKbLnrg.js";import"./makeExternalStore-DcukOp_j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
