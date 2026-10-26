import{j as r,M as s}from"./iframe-BC4WuJqp.js";import{P as p}from"./pdf-viewer-2EPCYt27.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D1TEfX4z.js";import"./preload-helper-BAlIbckl.js";import"./PdfViewer-DjMBohfQ.js";import"./index-B64lxDBz.js";import"./BasePdfViewer-DCB4dtdA.js";import"./BasePdfViewer.module.css-CuiLVz56.js";import"./PdfViewerAnnotationLayer-eeBakPup.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8Y6szjR.js";import"./PdfViewerOutlineSidebar-CyzZ_C0V.js";import"./PdfViewerSidebarHeader-OLmA9zWq.js";import"./useBaseUiId-BVMrMyXc.js";import"./useControlled-Bs5VhBCJ.js";import"./CompositeRoot-C-pidKcF.js";import"./CompositeItem-B3C6p1hy.js";import"./ToolbarRootContext-c4Ndu606.js";import"./composite-DeP2Ikxo.js";import"./svgIconContainer-CtvZ0OgY.js";import"./PdfViewerSearchBar-Cc_V6y6v.js";import"./chevron-up-CDE-54Ov.js";import"./chevron-down-Cl_Af1LQ.js";import"./cross-6e8uCbEq.js";import"./PdfViewerSidebar-Ch3GCPH-.js";import"./index-Cd4zCzRN.js";import"./index-BUFQlA2h.js";import"./index-eKZRvGXM.js";import"./PdfViewerToolbar-CYd0qHJO.js";import"./Button-DHdZg685.js";import"./chevron-right-5G5htGOy.js";import"./Input-CzEl6QGc.js";import"./search-CZ3TYav-.js";import"./spin-1YEQLOd8.js";import"./error-GVs8VSV-.js";import"./withOsdkMetrics-D1wQc1Iv.js";import"./makeExternalStore-DmNapAQ9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
