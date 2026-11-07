import{j as r,M as s}from"./iframe-sxtnZ__3.js";import{P as p}from"./pdf-viewer-DWriP1Qj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BLLVFhZr.js";import"./preload-helper-DN2WWHpq.js";import"./PdfViewer-BhRfKc0T.js";import"./index-B43ZU6C6.js";import"./BasePdfViewer-Jgn_sC7y.js";import"./BasePdfViewer.module.css-hZs3017O.js";import"./PdfViewerAnnotationLayer-auc3Zvk3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HNetP7ur.js";import"./PdfViewerOutlineSidebar-D3-VxCVi.js";import"./PdfViewerSidebarHeader-CFLz5Zsa.js";import"./useBaseUiId-Ba5m3KpF.js";import"./useControlled-qu9E_ZvC.js";import"./CompositeRoot-BcWDasHc.js";import"./CompositeItem-CQpfGOEN.js";import"./ToolbarRootContext-C88ng33h.js";import"./composite-C8kR_XfL.js";import"./svgIconContainer-p2RMTI7a.js";import"./PdfViewerSearchBar-B3akp2PK.js";import"./chevron-up-DXf8uJek.js";import"./chevron-down-Dv8O8W9l.js";import"./cross-59RLUben.js";import"./PdfViewerSidebar-D1iSGmJI.js";import"./index-DmmZjvsT.js";import"./index-BFg6-CgA.js";import"./index-CgOTndjm.js";import"./PdfViewerToolbar-bR7ngpXx.js";import"./Button-BMtY7X7F.js";import"./chevron-right-Dp-RmUHA.js";import"./Input-BXAWaOKi.js";import"./search-t4p9zjVy.js";import"./spin-CvUxTePS.js";import"./error-B8i5ABXk.js";import"./withOsdkMetrics-CQhdGkJo.js";import"./makeExternalStore-zzt6bEAW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
