import{j as r,M as s}from"./iframe-C_ahFnte.js";import{P as p}from"./pdf-viewer-DnxdhP2M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7-QqUNR.js";import"./preload-helper-BHb0Injz.js";import"./PdfViewer-Bpx-2bWA.js";import"./index-CMAfnGax.js";import"./BasePdfViewer--GksFne0.js";import"./BasePdfViewer.module.css-BJ3BtERA.js";import"./PdfViewerAnnotationLayer-CjiXiFFL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7l53o3J.js";import"./PdfViewerOutlineSidebar-JIs96AlZ.js";import"./PdfViewerSidebarHeader-qctFCTVB.js";import"./useBaseUiId-DyEK8-wC.js";import"./useControlled-D2HRL4Vd.js";import"./CompositeRoot-CtMRYRtk.js";import"./CompositeItem-DebMdAlI.js";import"./ToolbarRootContext-QybI75uQ.js";import"./composite-6kxzU8nP.js";import"./svgIconContainer-5iqtE3GT.js";import"./PdfViewerSearchBar-EspKoaS8.js";import"./chevron-up-QLw1aneu.js";import"./chevron-down-Dzt44ETV.js";import"./cross-BAtZIK6I.js";import"./PdfViewerSidebar-Div6h7e4.js";import"./index-CcstwSD9.js";import"./index-40HiEJ_t.js";import"./index-CQRjwZPk.js";import"./PdfViewerToolbar-CEXN7FmW.js";import"./Button-BF0zOcPV.js";import"./chevron-right-CZtF7V7p.js";import"./Input-BOmt55ak.js";import"./search-WeJq5Jbj.js";import"./spin-DWVrokVp.js";import"./error-DNwhr4rb.js";import"./withOsdkMetrics-CSpFQCY6.js";import"./makeExternalStore-lErXhsir.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
