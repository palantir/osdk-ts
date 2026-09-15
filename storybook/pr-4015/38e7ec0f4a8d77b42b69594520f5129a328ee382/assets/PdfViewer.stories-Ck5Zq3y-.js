import{j as r,M as s}from"./iframe-DP2XT2Ax.js";import{P as p}from"./pdf-viewer-DxEjbclG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bey3PAKK.js";import"./preload-helper-MSxHh9cg.js";import"./PdfViewer-DyahEC1L.js";import"./index-CZwfuIm2.js";import"./BasePdfViewer-B2gYoSnY.js";import"./BasePdfViewer.module.css-dbWV6bYD.js";import"./PdfViewerAnnotationLayer-DxqabTf4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0TeDTUn.js";import"./PdfViewerOutlineSidebar-C2nKzhYJ.js";import"./PdfViewerSidebarHeader-DuSfI6ft.js";import"./useBaseUiId-FZoWw8m8.js";import"./useControlled-C4scXiay.js";import"./CompositeRoot-DYAU3vjN.js";import"./CompositeItem-AXDbFh92.js";import"./ToolbarRootContext-BZtQONnf.js";import"./composite-CmPQztny.js";import"./svgIconContainer-CYYVNj4c.js";import"./PdfViewerSearchBar-BvTPCdI9.js";import"./chevron-up-B8bW0ZvP.js";import"./chevron-down-CzZnZ__S.js";import"./cross-BST2eW_7.js";import"./PdfViewerSidebar-Vc8AG8oj.js";import"./index-DTkzCssz.js";import"./index-RJE3YwuO.js";import"./index-B2FT6Zn5.js";import"./PdfViewerToolbar-DDBT72Fe.js";import"./Button-BVtJyzoK.js";import"./chevron-right-CZrJGb7a.js";import"./Input-1UPAFlWH.js";import"./search-DHZrW8_w.js";import"./spin-NDYsP5fO.js";import"./error-BbJX9_-G.js";import"./withOsdkMetrics-l-VjWGrr.js";import"./makeExternalStore-Db1GWq1p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
