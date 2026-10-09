import{j as r,M as s}from"./iframe-D8GtPwc8.js";import{P as p}from"./pdf-viewer-EVxtxHIr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CfPhaKeF.js";import"./preload-helper-DM7AYsRe.js";import"./PdfViewer-C0xb7H4c.js";import"./index-BHvqAHvK.js";import"./BasePdfViewer-D-htKDet.js";import"./BasePdfViewer.module.css-BF0Yvf6a.js";import"./PdfViewerAnnotationLayer-BoY3tBy-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DsRwAWWT.js";import"./PdfViewerOutlineSidebar-Bz4vHDUE.js";import"./PdfViewerSidebarHeader-C4Nw95ao.js";import"./useBaseUiId-cPjFtQbW.js";import"./useControlled-BGR8D7jw.js";import"./CompositeRoot-CgyL5Ynk.js";import"./CompositeItem-DiLTW9IV.js";import"./ToolbarRootContext-BqDTk1g9.js";import"./composite-C3gA3n5a.js";import"./svgIconContainer-DlryWN-T.js";import"./PdfViewerSearchBar-D4eW_7xw.js";import"./chevron-up-KgUDl0ry.js";import"./chevron-down-7LsT1DrB.js";import"./cross-DB6ZQcJi.js";import"./PdfViewerSidebar-DQwmEtQZ.js";import"./index-BZjshZ5O.js";import"./index-BFpMtvXB.js";import"./index-hBVFoSAx.js";import"./PdfViewerToolbar-lVEY91xb.js";import"./Button-BY4p0q88.js";import"./chevron-right-Dmn6nx3e.js";import"./Input-BQZ4zqRI.js";import"./search-1VHOmlrx.js";import"./spin-CARQQDfc.js";import"./error-DXFVtY0P.js";import"./withOsdkMetrics-BajG3tch.js";import"./makeExternalStore-ByNN_qQg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
