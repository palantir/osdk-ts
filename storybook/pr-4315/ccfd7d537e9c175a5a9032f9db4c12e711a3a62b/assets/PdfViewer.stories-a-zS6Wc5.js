import{j as r,M as s}from"./iframe-DDJWwqBY.js";import{P as p}from"./pdf-viewer-BYzbFLyV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dyhf3W-D.js";import"./preload-helper-DOjHdaCa.js";import"./PdfViewer-BCJxqZ0v.js";import"./index-C1ZTpjxr.js";import"./BasePdfViewer-DsFWHcKV.js";import"./BasePdfViewer.module.css-7udNJXYI.js";import"./PdfViewerAnnotationLayer-DiACBhPu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-neTUkgv-.js";import"./PdfViewerOutlineSidebar-CXyr_5Im.js";import"./PdfViewerSidebarHeader-C3etN8Xm.js";import"./useBaseUiId-cxXVDzQK.js";import"./useControlled-CWWChH0p.js";import"./CompositeRoot-zt4Ih1Im.js";import"./CompositeItem-BdeXH3Aq.js";import"./ToolbarRootContext-CwaM14ur.js";import"./composite-CGLo9xHo.js";import"./svgIconContainer-CFPdoyWo.js";import"./PdfViewerSearchBar-Bys7es5K.js";import"./chevron-up-BuFZq_Ji.js";import"./chevron-down-CEmh4RKU.js";import"./cross-B0JuOba7.js";import"./PdfViewerSidebar-DIPTnwVt.js";import"./index-CSTQbqzf.js";import"./index-DpGvPpxf.js";import"./index-NkIdY7dG.js";import"./PdfViewerToolbar-BYHf4PoP.js";import"./Button-HOAjx8sN.js";import"./chevron-right-BrC9qJiB.js";import"./Input-DxhVC9Qb.js";import"./search-d3_uaTlG.js";import"./spin-Do95JLCA.js";import"./error-DWlGgPFi.js";import"./withOsdkMetrics-BCd9Mm8M.js";import"./makeExternalStore-D6MI5hxD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
