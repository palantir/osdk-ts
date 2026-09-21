import{j as r,M as s}from"./iframe-DsP96Xjx.js";import{P as p}from"./pdf-viewer-BMwooEXo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEoora-9.js";import"./preload-helper-DwitJgNj.js";import"./PdfViewer-Dri4TkLa.js";import"./index-CCZQyGW1.js";import"./BasePdfViewer-eBdZduQe.js";import"./BasePdfViewer.module.css-CON3Rfk4.js";import"./PdfViewerAnnotationLayer-DQPNO4Uo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CCeE5l51.js";import"./PdfViewerOutlineSidebar-Cqu6WyFy.js";import"./PdfViewerSidebarHeader-BeKeITKI.js";import"./useBaseUiId-CmljmHpR.js";import"./useControlled-OAEAKhSc.js";import"./CompositeRoot-BdNmDMgU.js";import"./CompositeItem-Bt-RplsU.js";import"./ToolbarRootContext-MS5BqpDI.js";import"./composite-j1sQv_62.js";import"./svgIconContainer-DK5XvhMp.js";import"./PdfViewerSearchBar-B4_JwD4H.js";import"./chevron-up-Be4stfrE.js";import"./chevron-down-BXNKs90J.js";import"./cross-BeyCouG7.js";import"./PdfViewerSidebar-yNtoFyYC.js";import"./index-D94pbFc4.js";import"./index-DOmZP-tW.js";import"./index-B7ldO9Ow.js";import"./PdfViewerToolbar-DdehJU7d.js";import"./Button-D7SLUTAS.js";import"./chevron-right-Wmvk4PzT.js";import"./Input-Bp3qfxHC.js";import"./search-CHKIWokO.js";import"./spin-CzE2SD5Y.js";import"./error-BrJRNRov.js";import"./withOsdkMetrics-CJFmOHw0.js";import"./makeExternalStore-m0KaaoZC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
