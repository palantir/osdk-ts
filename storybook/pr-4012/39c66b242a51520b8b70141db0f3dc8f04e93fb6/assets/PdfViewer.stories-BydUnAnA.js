import{j as r,M as s}from"./iframe-ByMeZtzX.js";import{P as p}from"./pdf-viewer-CuoxrGZH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwZX-pwl.js";import"./preload-helper-CKCWlQAf.js";import"./PdfViewer-CLZWhzOw.js";import"./index-MjIH22RC.js";import"./BasePdfViewer-BZS8pvOR.js";import"./BasePdfViewer.module.css-CLBd_K4I.js";import"./PdfViewerAnnotationLayer-B4m9_FV0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cfc_MZAC.js";import"./PdfViewerOutlineSidebar-DXbsDSkQ.js";import"./PdfViewerSidebarHeader-CbeXauXW.js";import"./useBaseUiId-COE4qdfZ.js";import"./useControlled-DCuR4lHr.js";import"./CompositeRoot-Ci5hTCFp.js";import"./CompositeItem-CEWc-TNz.js";import"./ToolbarRootContext-B0lEY-MF.js";import"./composite-BJmqHe58.js";import"./svgIconContainer-BWYJe8Lc.js";import"./PdfViewerSearchBar-BbAVV4xS.js";import"./chevron-up-D8XQAZyy.js";import"./chevron-down-Chsl7nyR.js";import"./cross-BL14zVVR.js";import"./PdfViewerSidebar-CW1jO6CV.js";import"./index-B41_CCIn.js";import"./index-C5DhJsVj.js";import"./index-CGEFtaju.js";import"./PdfViewerToolbar-B2_XQBml.js";import"./Button-CfzUE4zU.js";import"./chevron-right-BzMtgKQg.js";import"./Input-Cu1JHp0_.js";import"./search-Cq1vvGyL.js";import"./spin-L9CnlxsJ.js";import"./error-yKJFbcKE.js";import"./withOsdkMetrics-CJVxpJaf.js";import"./makeExternalStore-DbH4cGZ0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
