import{j as r,M as s}from"./iframe-IYYJd2m9.js";import{P as p}from"./pdf-viewer-DLzASJJE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMHMtsqC.js";import"./preload-helper-BFRTU8XL.js";import"./PdfViewer-BE5CkrxW.js";import"./index-Db-eG3LN.js";import"./BasePdfViewer-DwZOCN-b.js";import"./BasePdfViewer.module.css-T1-R67F0.js";import"./PdfViewerAnnotationLayer-Cs7SPVn-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-By3eCv-8.js";import"./PdfViewerOutlineSidebar-C02zn7ad.js";import"./PdfViewerSidebarHeader-DbyhuPbL.js";import"./useBaseUiId-gMGlPD7U.js";import"./useControlled-2w2YfNvU.js";import"./CompositeRoot-DgVuP1d7.js";import"./CompositeItem-B-bfj5TP.js";import"./ToolbarRootContext-CFnhaKDy.js";import"./composite-CvcKSveb.js";import"./svgIconContainer-B0Zw0e2B.js";import"./PdfViewerSearchBar-YN1Wru-X.js";import"./chevron-up-Cay2t7o7.js";import"./chevron-down-B1MpC4Hz.js";import"./cross-KJA2o58Q.js";import"./PdfViewerSidebar-DSUSCETH.js";import"./index-DsFI9coQ.js";import"./index-DKHKGVOU.js";import"./index-DAnfA0in.js";import"./PdfViewerToolbar-DvXUTSv8.js";import"./Button-DQEdYpKK.js";import"./chevron-right-CKfH5Q3O.js";import"./Input-0frZHORa.js";import"./search-CUDcYcS5.js";import"./spin-BVdt3qGk.js";import"./error-B-Yx8VFp.js";import"./withOsdkMetrics-DxXSp5TR.js";import"./makeExternalStore-DEaKK2Sx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
