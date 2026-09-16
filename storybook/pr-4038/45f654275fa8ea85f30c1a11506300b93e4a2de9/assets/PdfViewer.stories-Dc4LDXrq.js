import{j as r,M as s}from"./iframe-CChix_Ju.js";import{P as p}from"./pdf-viewer-anYnoQ5g.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DdLZzwdR.js";import"./preload-helper-DGn9W5qi.js";import"./PdfViewer-wCLIJb2f.js";import"./index-pvPqNL-H.js";import"./BasePdfViewer-Bo9gh8c9.js";import"./BasePdfViewer.module.css-C82DcHtc.js";import"./PdfViewerAnnotationLayer-De53QZ0M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCBH_Ey5.js";import"./PdfViewerOutlineSidebar-DOWUbO2Y.js";import"./PdfViewerSidebarHeader-DO_4ETZE.js";import"./useBaseUiId-4A8uRFRe.js";import"./useControlled-CG8Zt7_4.js";import"./CompositeRoot-BcTFP5xH.js";import"./CompositeItem-Dh0FwBF1.js";import"./ToolbarRootContext-4N77tOAl.js";import"./composite-Ctdw8swW.js";import"./svgIconContainer-BeYzdFE0.js";import"./PdfViewerSearchBar-ech2g958.js";import"./chevron-up-Oj87dN5x.js";import"./chevron-down-DL0MqWR7.js";import"./cross-CUi9b35_.js";import"./PdfViewerSidebar-JNjOxJb6.js";import"./index-Bmjlrc5X.js";import"./index-CHXlKmK_.js";import"./index-BdOozmQn.js";import"./PdfViewerToolbar-kfpl3m5h.js";import"./Button-BRITeuER.js";import"./chevron-right-Dop7Ef7r.js";import"./Input-BRtUQT1Y.js";import"./search-CX5b2IB4.js";import"./spin-BLfDiO_w.js";import"./error-fDpd87S9.js";import"./withOsdkMetrics-DIof6Ugt.js";import"./makeExternalStore-Cw3jon-H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
