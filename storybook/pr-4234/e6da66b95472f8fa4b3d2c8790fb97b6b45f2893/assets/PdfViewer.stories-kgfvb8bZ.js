import{j as r,M as s}from"./iframe-BoRHmw1P.js";import{P as p}from"./pdf-viewer-BYhXS-F6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEQ5rCVJ.js";import"./preload-helper-BwC4djfE.js";import"./PdfViewer-CdR_hkHR.js";import"./index-CKE1HitJ.js";import"./BasePdfViewer-Cg4p4TlZ.js";import"./BasePdfViewer.module.css-BYkqOraC.js";import"./PdfViewerAnnotationLayer-YL10K-lQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9zktqM7.js";import"./PdfViewerOutlineSidebar-BqgNZU4d.js";import"./PdfViewerSidebarHeader-BgoH4yeS.js";import"./useBaseUiId-CclY9vCT.js";import"./useControlled-DCVjIVG_.js";import"./CompositeRoot-BfyIfqM1.js";import"./CompositeItem-BuKhldON.js";import"./ToolbarRootContext-CcVDjx55.js";import"./composite-NGGk8Cjx.js";import"./svgIconContainer-BiIenURc.js";import"./PdfViewerSearchBar-BXhVKu1l.js";import"./chevron-up-DPtMsXVg.js";import"./chevron-down-DOBMuKk4.js";import"./cross-CXHDS3ru.js";import"./PdfViewerSidebar-DxbKDVkM.js";import"./index-DupFExnL.js";import"./index-DtzOCkwB.js";import"./index-CrIjACAu.js";import"./PdfViewerToolbar-Dr50gB9n.js";import"./Button-D_pTSnh0.js";import"./chevron-right-C4_t9LDs.js";import"./Input-C1OYcJfy.js";import"./search-DY5E4Hwb.js";import"./spin-B62TyaNK.js";import"./error-sO_QuGwO.js";import"./withOsdkMetrics-D9OdN7A-.js";import"./makeExternalStore-DDuoJFnu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
