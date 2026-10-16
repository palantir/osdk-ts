import{j as r,M as s}from"./iframe-DMhUx0Fg.js";import{P as p}from"./pdf-viewer-Bq0oF1An.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ISb49LMI.js";import"./preload-helper-Cihlk8Ge.js";import"./PdfViewer-zX_P7oRZ.js";import"./index-Cml4Y89r.js";import"./BasePdfViewer-BJL6hMSV.js";import"./BasePdfViewer.module.css-Daks1CRM.js";import"./PdfViewerAnnotationLayer-VKEb4ALk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdXthZ4I.js";import"./PdfViewerOutlineSidebar-BnRUDzqu.js";import"./PdfViewerSidebarHeader-C1as9rug.js";import"./useBaseUiId-Cn1m1c-i.js";import"./useControlled-BnYANE82.js";import"./CompositeRoot-B48OK5Gf.js";import"./CompositeItem-CruspLcZ.js";import"./ToolbarRootContext-D6p48e5t.js";import"./composite-ElTKsJn6.js";import"./svgIconContainer-BbR8LDbO.js";import"./PdfViewerSearchBar-C59Sp_jW.js";import"./chevron-up-DDcEa6jV.js";import"./chevron-down-DfsmE1o_.js";import"./cross-B04SzZ9a.js";import"./PdfViewerSidebar-etvsWfSi.js";import"./index-Cg1qZyT8.js";import"./index-BdVR8K9f.js";import"./index-DHMpAz6_.js";import"./PdfViewerToolbar-BsNLxRkm.js";import"./Button-BVqDK7_w.js";import"./chevron-right-sD1RyOne.js";import"./Input-CMBfU9Th.js";import"./search-BhCWHTId.js";import"./spin-CjO__POM.js";import"./error-BGNhUAbf.js";import"./withOsdkMetrics-DGk-RlXg.js";import"./makeExternalStore-CWOCJrTj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
