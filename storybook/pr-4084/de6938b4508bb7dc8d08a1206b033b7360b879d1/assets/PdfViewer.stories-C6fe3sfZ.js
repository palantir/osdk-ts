import{j as r,M as s}from"./iframe-B60uIzqu.js";import{P as p}from"./pdf-viewer-Ct5nR54T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DxMBzN2X.js";import"./preload-helper-jikZvyDa.js";import"./PdfViewer-CaSXojJ2.js";import"./index-BzSV7QsP.js";import"./BasePdfViewer-4ZnMQG6X.js";import"./BasePdfViewer.module.css-CIxzsENS.js";import"./PdfViewerAnnotationLayer-BjjXk9WE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COlg2Psn.js";import"./PdfViewerOutlineSidebar-CrPdA4wS.js";import"./PdfViewerSidebarHeader-B42psxs1.js";import"./useBaseUiId-DIJoCSJF.js";import"./useControlled-DJ00XR1e.js";import"./CompositeRoot-DYfXO683.js";import"./CompositeItem-DumPFzxx.js";import"./ToolbarRootContext-DNfnA9up.js";import"./composite-FgUpy7wg.js";import"./svgIconContainer-guiuIeqp.js";import"./PdfViewerSearchBar-C-JZ4W2B.js";import"./chevron-up-i--mqvQq.js";import"./chevron-down-C_KV3jKU.js";import"./cross-DOsmRzos.js";import"./PdfViewerSidebar-By9DApPj.js";import"./index-CnSFNBSp.js";import"./index-DWJFVWYa.js";import"./index-DHpY-kFP.js";import"./PdfViewerToolbar-C6oKnBD-.js";import"./Button-CwbHglSg.js";import"./chevron-right-JplXtCQw.js";import"./Input-CI489aTx.js";import"./search-W61rBGPZ.js";import"./spin-DKMHfSM8.js";import"./error-CTvFY39O.js";import"./withOsdkMetrics-Dg6VzMMR.js";import"./makeExternalStore-D8fqJuwI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
