import{j as r,M as s}from"./iframe-DbsqonCE.js";import{P as p}from"./pdf-viewer-ieU0QZI_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHsW7afI.js";import"./preload-helper-j-tWLxPO.js";import"./PdfViewer-D8wpMPB5.js";import"./index-BcP7gLrZ.js";import"./BasePdfViewer-CXPo5EaB.js";import"./BasePdfViewer.module.css-CsR-3fQw.js";import"./PdfViewerAnnotationLayer-DAFbR7pF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdM8A8Fv.js";import"./PdfViewerOutlineSidebar-CwT8fTM4.js";import"./PdfViewerSidebarHeader-CjUeUlvo.js";import"./useBaseUiId-mLSoMawn.js";import"./useControlled-DjGJelPK.js";import"./CompositeRoot-CrT5nmMY.js";import"./CompositeItem-ClfgExBb.js";import"./ToolbarRootContext-Dy_E221D.js";import"./composite-CWSSZekk.js";import"./svgIconContainer-dTQS0Q1O.js";import"./PdfViewerSearchBar-C2XM6EUS.js";import"./chevron-up-CUypRg05.js";import"./chevron-down-C_Jq6VbG.js";import"./cross-CjgfYmIf.js";import"./PdfViewerSidebar-BfZM3-Hd.js";import"./index-CXVkt83A.js";import"./index-BeGCx8DT.js";import"./index-sTgTffNL.js";import"./PdfViewerToolbar-B_N8zCBf.js";import"./Button-CuTOWFQU.js";import"./chevron-right-C8IUyYVi.js";import"./Input-CUOKus6W.js";import"./search-CKNMsX_Q.js";import"./spin-BKwDx2cI.js";import"./error-Cdk7CynS.js";import"./withOsdkMetrics-D9Ly-VH2.js";import"./makeExternalStore-C9jMv8gA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
