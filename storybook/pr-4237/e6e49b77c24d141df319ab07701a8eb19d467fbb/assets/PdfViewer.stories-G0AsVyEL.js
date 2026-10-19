import{j as r,M as s}from"./iframe-DhSxUQkX.js";import{P as p}from"./pdf-viewer-tK3-hnnn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VkjzeOwT.js";import"./preload-helper-sXoL7niC.js";import"./PdfViewer-Bpy9rHgb.js";import"./index-BvSFmfl4.js";import"./BasePdfViewer-DjrYdBt6.js";import"./BasePdfViewer.module.css-BuDBqh7X.js";import"./PdfViewerAnnotationLayer-B51-goZ6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMXssfaa.js";import"./PdfViewerOutlineSidebar-BS2Xhqa5.js";import"./PdfViewerSidebarHeader-qxyg327Z.js";import"./useBaseUiId-CZTbsmZg.js";import"./useControlled-BFOHrubs.js";import"./CompositeRoot-LSFvc4CL.js";import"./CompositeItem-B0iGyW5R.js";import"./ToolbarRootContext-DCHPkWcS.js";import"./composite-CVjZUaK1.js";import"./svgIconContainer-Cv6Vlj7K.js";import"./PdfViewerSearchBar-DE0F3Kv5.js";import"./chevron-up-Cm8sHLff.js";import"./chevron-down-DgOK1tfP.js";import"./cross-DPp5FPP-.js";import"./PdfViewerSidebar-DiR2Z0o9.js";import"./index-DS-3NohG.js";import"./index-CIxCim47.js";import"./index-DqmtWcN5.js";import"./PdfViewerToolbar-DOd0ippP.js";import"./Button-WT-hQp_M.js";import"./chevron-right-BdkF1rM6.js";import"./Input-CZERibHA.js";import"./search-DUqXaRZn.js";import"./spin-Done8Qwx.js";import"./error-BkDo7z_m.js";import"./withOsdkMetrics-BwywW8LF.js";import"./makeExternalStore-C6P_xGma.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
