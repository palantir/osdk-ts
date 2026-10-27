import{j as r,M as s}from"./iframe-CWNCqF8m.js";import{P as p}from"./pdf-viewer-DbgdaLu2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJLnpYSQ.js";import"./preload-helper-CP42LvtG.js";import"./PdfViewer-BzB0BvgN.js";import"./index-C_BFGzEW.js";import"./BasePdfViewer-Cmv5dtys.js";import"./BasePdfViewer.module.css-D9z-5jN5.js";import"./PdfViewerAnnotationLayer-D-YRpAsO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6SzHNSiN.js";import"./PdfViewerOutlineSidebar-ClgFyaAy.js";import"./PdfViewerSidebarHeader-iwd4vhju.js";import"./useBaseUiId-Cbti5FZV.js";import"./useControlled-COgqWOOu.js";import"./CompositeRoot-BUFS30GS.js";import"./CompositeItem-Bb-U7Uoq.js";import"./ToolbarRootContext-DH9Y5D6c.js";import"./composite-Bv2UjceH.js";import"./svgIconContainer-BD1yvJod.js";import"./PdfViewerSearchBar-CvkXYiGu.js";import"./chevron-up-B-9EQSwW.js";import"./chevron-down-CKxmHC3q.js";import"./cross-Gf4Gi1Zs.js";import"./PdfViewerSidebar-D227jL5S.js";import"./index-BVR21Q-U.js";import"./index-Q_B2Rqgi.js";import"./index-BtEMoLG0.js";import"./PdfViewerToolbar-CEOzG1br.js";import"./Button-DyTPsUeB.js";import"./chevron-right-DefV646S.js";import"./Input-CnULVynl.js";import"./search-D8ew1nZH.js";import"./spin-CZeG3WX6.js";import"./error-BFVZCDZ0.js";import"./withOsdkMetrics-C-RUZtQv.js";import"./makeExternalStore-CJVHwj3d.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
