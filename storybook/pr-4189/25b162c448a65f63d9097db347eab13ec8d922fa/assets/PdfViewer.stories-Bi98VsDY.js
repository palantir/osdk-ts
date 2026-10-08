import{j as r,M as s}from"./iframe-DLMfgjtf.js";import{P as p}from"./pdf-viewer-CmmjP38U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkeDecmM.js";import"./preload-helper-FISTic5h.js";import"./PdfViewer-BDbX3t5-.js";import"./index-C1uNoD_P.js";import"./BasePdfViewer-G6Gu_cpP.js";import"./BasePdfViewer.module.css-BXM0vqX7.js";import"./PdfViewerAnnotationLayer-DOV-911f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zFBuahMr.js";import"./PdfViewerOutlineSidebar-BtPJkcmW.js";import"./PdfViewerSidebarHeader-Dbj8hMQn.js";import"./useBaseUiId-CGPqK7A_.js";import"./useControlled-Ez2RzIi9.js";import"./CompositeRoot-BKMZhTES.js";import"./CompositeItem-BPE6MZwc.js";import"./ToolbarRootContext-CaevGzPm.js";import"./composite-Bh8RLzcK.js";import"./svgIconContainer-D9kLSjbx.js";import"./PdfViewerSearchBar-DJDsUFZ8.js";import"./chevron-up-BA2ng333.js";import"./chevron-down-Cl75LzTR.js";import"./cross-DEP3bJaL.js";import"./PdfViewerSidebar-c5CK6HrC.js";import"./index-CCyxZzXK.js";import"./index-DvE967r1.js";import"./index-DhmZxaNJ.js";import"./PdfViewerToolbar-CoV1DSQb.js";import"./Button-BcB4SrWe.js";import"./chevron-right-CAmXY6hZ.js";import"./Input-CGlQdmV9.js";import"./search-DB3dPpwY.js";import"./spin-B-ok6fqt.js";import"./error-CgJf6mJC.js";import"./withOsdkMetrics-C4pScUTY.js";import"./makeExternalStore-Cjl19IuZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
