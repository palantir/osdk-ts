import{j as r,M as s}from"./iframe-Yw9TZb4u.js";import{P as p}from"./pdf-viewer-B4-hxJLZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYKhLlKg.js";import"./preload-helper-D_xjOrEt.js";import"./PdfViewer-CIVp75bM.js";import"./index-8aWnL4Lo.js";import"./BasePdfViewer-DiQhsiwB.js";import"./BasePdfViewer.module.css-5FsYBPqz.js";import"./PdfViewerAnnotationLayer-CppXoGCF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EAV7HZYe.js";import"./PdfViewerOutlineSidebar-CwpGDaQt.js";import"./PdfViewerSidebarHeader-CE0AP2z5.js";import"./useBaseUiId-BO9crViw.js";import"./useControlled-BzIkjd0M.js";import"./CompositeRoot-C4K0-3qe.js";import"./CompositeItem-BD6lDA45.js";import"./ToolbarRootContext-BU6uR7dz.js";import"./composite-BNHMrFyE.js";import"./svgIconContainer-BIiUvxcP.js";import"./PdfViewerSearchBar-BPlYUyEi.js";import"./chevron-up-kQ0i4uYc.js";import"./chevron-down-oj878TNR.js";import"./cross-DTT8xN_V.js";import"./PdfViewerSidebar-B0Ff0TrJ.js";import"./index-CibthTqO.js";import"./index-kxnQI0Cl.js";import"./index-DC5PMXgz.js";import"./PdfViewerToolbar-DPVwlU2D.js";import"./Button-C1MrjwiB.js";import"./chevron-right-VjT8d2uy.js";import"./Input-CSG_diAL.js";import"./search-BQQODEli.js";import"./spin-CpPw7ROv.js";import"./error-BrfIeh_k.js";import"./withOsdkMetrics-ChgDZqBx.js";import"./makeExternalStore-C9-V4S7e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
