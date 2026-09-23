import{j as r,M as s}from"./iframe-D9P9JPnE.js";import{P as p}from"./pdf-viewer-DRx7hx7q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DB2ulUk5.js";import"./preload-helper-CSJ4fD8P.js";import"./PdfViewer-DViECenq.js";import"./index-B0GYFgPw.js";import"./BasePdfViewer-qZJjejnK.js";import"./BasePdfViewer.module.css-BPlOFjhY.js";import"./PdfViewerAnnotationLayer-73TiWs7i.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COs11H4W.js";import"./PdfViewerOutlineSidebar-BQHABCTN.js";import"./PdfViewerSidebarHeader-D4OER690.js";import"./useBaseUiId-LUhCiIEN.js";import"./useControlled-D8iAD7lp.js";import"./CompositeRoot-DXMfdk6L.js";import"./CompositeItem-Cn9ylTax.js";import"./ToolbarRootContext-D2FTFjj2.js";import"./composite-CwGSSnNe.js";import"./svgIconContainer-DE8FpRUq.js";import"./PdfViewerSearchBar-Bj8pBk7R.js";import"./chevron-up-CximDJv9.js";import"./chevron-down-aDiXlal5.js";import"./cross-Bk7QQAW7.js";import"./PdfViewerSidebar-DrOFVe_5.js";import"./index-CeKLzZT1.js";import"./index-BLSs3q_T.js";import"./index--Qtm9bZ-.js";import"./PdfViewerToolbar-DpHddylw.js";import"./Button-DQyP3ss1.js";import"./chevron-right-CVH7KDPv.js";import"./Input-BAe5Vta8.js";import"./search-DVgZ7um_.js";import"./spin-BV2Kk2Rb.js";import"./error-CRea6GYa.js";import"./withOsdkMetrics-DdvxW2hf.js";import"./makeExternalStore-Ds2qVRO7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
