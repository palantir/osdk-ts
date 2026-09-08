import{j as r,M as s}from"./iframe-C3HGDapW.js";import{P as p}from"./pdf-viewer-Bw3X2W81.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CwxlkvQz.js";import"./preload-helper-Dd-r_PP_.js";import"./PdfViewer-1eKsmoV7.js";import"./index-CJ776Wah.js";import"./BasePdfViewer-c7sDm1gZ.js";import"./BasePdfViewer.module.css-BLrfuMSF.js";import"./PdfViewerAnnotationLayer-lYafI2bF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLjPdIMG.js";import"./PdfViewerOutlineSidebar-CRiZ-pLi.js";import"./PdfViewerSidebarHeader-B3h56Uxv.js";import"./useBaseUiId-DDU_oadF.js";import"./useControlled-U-IEPHgG.js";import"./CompositeRoot-Dxm_XJ_M.js";import"./CompositeItem-ug1IBEV3.js";import"./ToolbarRootContext-DquNC5M6.js";import"./composite-C0TGio2P.js";import"./svgIconContainer-CFN5a8Be.js";import"./PdfViewerSearchBar-DePbfSQG.js";import"./chevron-up-B0cng5yR.js";import"./chevron-down-DzjGRqJz.js";import"./cross-D5WvDMJV.js";import"./PdfViewerSidebar-DuRtTMpK.js";import"./index-LE1XJX1v.js";import"./index-DQeQgx2N.js";import"./index-BijSJOSI.js";import"./PdfViewerToolbar-CN5IkpCM.js";import"./Button-D-rdzhRE.js";import"./chevron-right-DprlIXqk.js";import"./Input-BSSKD0Yf.js";import"./search-B43uCRp2.js";import"./spin-dh3qmdFX.js";import"./error-BHy_Uegk.js";import"./withOsdkMetrics-TK1FZJZJ.js";import"./makeExternalStore-CFal4aDF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
