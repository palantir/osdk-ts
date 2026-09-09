import{j as r,M as s}from"./iframe-JXLKLe4j.js";import{P as p}from"./pdf-viewer-MbhrH4rK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmrXK-xs.js";import"./preload-helper-KxhExJZe.js";import"./PdfViewer-Hzbe12H6.js";import"./index-CxCVEUEK.js";import"./BasePdfViewer-BM_USYOz.js";import"./BasePdfViewer.module.css-BKyUJJ1A.js";import"./PdfViewerAnnotationLayer-CqyJBDQa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEDuhcZC.js";import"./PdfViewerOutlineSidebar-C7xtHEAD.js";import"./PdfViewerSidebarHeader-DbYdpe51.js";import"./useBaseUiId-D2ECG8pj.js";import"./useControlled-BlJ0csd0.js";import"./CompositeRoot-CKoF8Ofd.js";import"./CompositeItem-CHr0cHjc.js";import"./ToolbarRootContext-Dtg0Oro0.js";import"./composite-B1xcP3KB.js";import"./svgIconContainer-39ufch0k.js";import"./PdfViewerSearchBar-CcFzVh88.js";import"./chevron-up-CHf3zV96.js";import"./chevron-down-OJuk8g-X.js";import"./cross-DOXYOKC7.js";import"./PdfViewerSidebar-BkYZQu0D.js";import"./index-DoaZjYqH.js";import"./index-CU7Uodcw.js";import"./index-KYXcc3Yr.js";import"./PdfViewerToolbar-C4h3dVwW.js";import"./Button-Cg6Es2oR.js";import"./chevron-right-CYlKPo9x.js";import"./Input-Cp2KEsjw.js";import"./search-3vsZ9AKM.js";import"./spin-FatcQhH4.js";import"./error-CCMzsuJP.js";import"./withOsdkMetrics-OXe-gHpY.js";import"./makeExternalStore-CPv_2K4j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
