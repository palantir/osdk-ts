import{j as r,M as s}from"./iframe-BECIlG-5.js";import{P as p}from"./pdf-viewer-BKqHaSxA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CK9fFqmF.js";import"./preload-helper-Cv0NrjSm.js";import"./PdfViewer-I7euvRyh.js";import"./index-0SVtXK84.js";import"./BasePdfViewer-C-Fko_7e.js";import"./BasePdfViewer.module.css-DW4wjV5S.js";import"./PdfViewerAnnotationLayer-CUw8Ptvr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUNM33LQ.js";import"./PdfViewerOutlineSidebar-DxxH2KMI.js";import"./PdfViewerSidebarHeader-AwMP8yej.js";import"./useBaseUiId-BynaZof5.js";import"./useControlled-DwAysQOe.js";import"./CompositeRoot-CYKJI4vX.js";import"./CompositeItem-Dl8QDSWw.js";import"./ToolbarRootContext-4ge2fwUs.js";import"./composite-Bb9FNHOi.js";import"./svgIconContainer-B-mztRGa.js";import"./PdfViewerSearchBar-Cggl9jpT.js";import"./chevron-up-DUxMILLL.js";import"./chevron-down-B_ghTOEG.js";import"./cross-ubVpY3r4.js";import"./PdfViewerSidebar-BUgvtRF9.js";import"./index-BtesBorZ.js";import"./index-CXVpCKKQ.js";import"./index-sIW5LEP1.js";import"./PdfViewerToolbar-BOjCYA-x.js";import"./Button-cPt_jdAf.js";import"./chevron-right-Cj3teQ_r.js";import"./Input-Bv6R3iZB.js";import"./search-CxKdELes.js";import"./spin-BkVHUExP.js";import"./error-W3FJWM_l.js";import"./withOsdkMetrics-DjCRSE02.js";import"./makeExternalStore-c840Nimt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
