import{j as r,M as s}from"./iframe-Dw2PjeaI.js";import{P as p}from"./pdf-viewer-Cn66e8hw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BoV3P7F7.js";import"./preload-helper-BJaT6ZDB.js";import"./PdfViewer-BYgIa6aF.js";import"./index-0M7994Y_.js";import"./BasePdfViewer-BX0TSDRP.js";import"./BasePdfViewer.module.css-fm-NZ7e2.js";import"./PdfViewerAnnotationLayer-Rov2K_dw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ONcQb7QS.js";import"./PdfViewerOutlineSidebar-BEGWe3_5.js";import"./PdfViewerSidebarHeader-CJ9PHfHf.js";import"./useBaseUiId-0TtGgIAG.js";import"./useControlled-Cz_GJLGD.js";import"./CompositeRoot-DKDE8cQa.js";import"./CompositeItem-CeRclahQ.js";import"./ToolbarRootContext-DgoSljlg.js";import"./composite-DWecAK_E.js";import"./svgIconContainer-CeXRiZtW.js";import"./PdfViewerSearchBar-roY9e23d.js";import"./chevron-up-DNHYHbJS.js";import"./chevron-down-C1e4s47j.js";import"./cross-CLda9Fo1.js";import"./PdfViewerSidebar-UMaU7d4x.js";import"./index-B5gfVMUt.js";import"./index-BPb9j9HY.js";import"./index-CGb9o7qe.js";import"./PdfViewerToolbar-ANQuL_WG.js";import"./Button-DVN9BG7e.js";import"./chevron-right-BHgoDDx4.js";import"./Input-DbWveyeA.js";import"./search-ClBN3Er-.js";import"./spin-BDnp1S-v.js";import"./error-DeMrwFkF.js";import"./withOsdkMetrics-C5Psz1d4.js";import"./makeExternalStore-DXns2UQ6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
