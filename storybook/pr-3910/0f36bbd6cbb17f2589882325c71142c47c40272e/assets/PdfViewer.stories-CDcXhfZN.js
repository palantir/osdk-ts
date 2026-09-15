import{j as r,M as s}from"./iframe-BJHQLm8B.js";import{P as p}from"./pdf-viewer-DcYcaKF1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHDu96nO.js";import"./preload-helper-DNJi6hnI.js";import"./PdfViewer-BaPPDPs6.js";import"./index-BUqmovkS.js";import"./BasePdfViewer-C_Bw5Z7U.js";import"./BasePdfViewer.module.css-DHpb-OSd.js";import"./PdfViewerAnnotationLayer---UsaEK6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkmUC0ts.js";import"./PdfViewerOutlineSidebar-Dm77B5n8.js";import"./PdfViewerSidebarHeader-BrVKzhLV.js";import"./useBaseUiId-DFBTpUkK.js";import"./useControlled-91vTGa_9.js";import"./CompositeRoot-BoAD_eAE.js";import"./CompositeItem-BhxoDlh7.js";import"./ToolbarRootContext-0Z3xHtAl.js";import"./composite-BjkOmkjK.js";import"./svgIconContainer-CExwBPXa.js";import"./PdfViewerSearchBar-Cu62Shv0.js";import"./chevron-up-CxnX8a3a.js";import"./chevron-down-DOmpjpbt.js";import"./cross-DyhJ0eVv.js";import"./PdfViewerSidebar-CgdtLxDa.js";import"./index-mWeNCZ3t.js";import"./index-CY3jAq3i.js";import"./index-BXhIsTqo.js";import"./PdfViewerToolbar-JwnsC_zq.js";import"./Button-hiBWk-nL.js";import"./chevron-right-Ex1mTEus.js";import"./Input--rxzAq78.js";import"./search-CBF8qcQD.js";import"./spin-DMiRf5Xc.js";import"./error-msvagv_9.js";import"./withOsdkMetrics-CQ4A9sKP.js";import"./makeExternalStore-CZ09MAHK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
