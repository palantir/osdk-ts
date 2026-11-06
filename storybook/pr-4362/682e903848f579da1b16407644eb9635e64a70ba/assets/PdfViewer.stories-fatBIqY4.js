import{j as r,M as s}from"./iframe-BNBZBstC.js";import{P as p}from"./pdf-viewer-DqtVTGeB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D1JLWJG1.js";import"./preload-helper-CnYrZllf.js";import"./PdfViewer-Ub_mvPge.js";import"./index-Cnm8VChd.js";import"./BasePdfViewer-kf5bO2xf.js";import"./BasePdfViewer.module.css-BGD3wq4B.js";import"./PdfViewerAnnotationLayer-BXFcSlMD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWUQRdoh.js";import"./PdfViewerOutlineSidebar-BA6faDdm.js";import"./PdfViewerSidebarHeader-BTJa9t0n.js";import"./useBaseUiId-DT3QZnc6.js";import"./useControlled-hyr-Ee75.js";import"./CompositeRoot-CS96P_-f.js";import"./CompositeItem-CfUbW9s0.js";import"./ToolbarRootContext-DAKa1svD.js";import"./composite-HrpU287b.js";import"./svgIconContainer-Dn93O-Mo.js";import"./PdfViewerSearchBar-BfmE_yVM.js";import"./chevron-up-C4jOfQGd.js";import"./chevron-down-BqKYZ2w5.js";import"./cross-BBwfk0Yp.js";import"./PdfViewerSidebar-BxkQa0TZ.js";import"./index-s_lknIcx.js";import"./index-BH-plJ59.js";import"./index-CjrOmp5t.js";import"./PdfViewerToolbar-BNGPM3I3.js";import"./Button-Dadxr29r.js";import"./chevron-right-9HNZMOAL.js";import"./Input-CHUFXkF3.js";import"./search-DByY8x3h.js";import"./spin-JDf6eHbI.js";import"./error-HeD-UTCd.js";import"./withOsdkMetrics-Db562hlY.js";import"./makeExternalStore-Ba0UZiRg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
