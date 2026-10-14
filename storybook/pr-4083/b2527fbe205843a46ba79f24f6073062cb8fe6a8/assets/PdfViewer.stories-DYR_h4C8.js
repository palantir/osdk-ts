import{j as r,M as s}from"./iframe-rmDWkA_9.js";import{P as p}from"./pdf-viewer-DXFvU8bC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOxMWA9X.js";import"./preload-helper-C9KhRoGp.js";import"./PdfViewer-CAy5QFI1.js";import"./index-BJm_TGuS.js";import"./BasePdfViewer-WqgUHj__.js";import"./BasePdfViewer.module.css-DNEbPENF.js";import"./PdfViewerAnnotationLayer-BXzegdAq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6WsIFAS1.js";import"./PdfViewerOutlineSidebar-MLFg1vl4.js";import"./PdfViewerSidebarHeader-Bo7Aq9OL.js";import"./useBaseUiId-eTIPtAex.js";import"./useControlled-J2jUgDlJ.js";import"./CompositeRoot-BNSrnfb2.js";import"./CompositeItem-CbLxl7fO.js";import"./ToolbarRootContext-BXp0BN9t.js";import"./composite-CfWqZbx5.js";import"./svgIconContainer-CMH5VHbE.js";import"./PdfViewerSearchBar-CIjYnUPR.js";import"./chevron-up-Cz2eWK4B.js";import"./chevron-down-BX-4AcWo.js";import"./cross-2JsEwOCU.js";import"./PdfViewerSidebar-CChoasWX.js";import"./index-DnhRAwMR.js";import"./index-H2c6m-1E.js";import"./index-DxDYposm.js";import"./PdfViewerToolbar-D_rD4xCZ.js";import"./Button-CBc549Tl.js";import"./chevron-right-DmKCTsDi.js";import"./Input-ByxvWbQj.js";import"./search-C7TYX9ku.js";import"./spin-BScWmD2j.js";import"./error-xYNFBZUd.js";import"./withOsdkMetrics-f5SdKW_u.js";import"./makeExternalStore-CTIqcnCN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
