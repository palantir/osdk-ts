import{j as r,M as s}from"./iframe-lPbU9V6o.js";import{P as p}from"./pdf-viewer-D2SDKfbr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdmpQhlU.js";import"./preload-helper-CfcQGX_H.js";import"./PdfViewer-wDh50l41.js";import"./index-BgY5H93d.js";import"./BasePdfViewer-BNymxZNS.js";import"./BasePdfViewer.module.css-nLViFSAr.js";import"./PdfViewerAnnotationLayer-DBab0mq9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPySUWJX.js";import"./PdfViewerOutlineSidebar-BWW_dT4X.js";import"./PdfViewerSidebarHeader-h8_RHmdi.js";import"./useBaseUiId-B5KMMy-h.js";import"./useControlled-DmJZYhoD.js";import"./CompositeRoot-DfcDDWcP.js";import"./CompositeItem-vBOQ9KDG.js";import"./ToolbarRootContext-CioZEdCf.js";import"./composite-COK8eLgF.js";import"./svgIconContainer-DdnoMbP6.js";import"./PdfViewerSearchBar-sqMds3We.js";import"./chevron-up-r2qKlYwL.js";import"./chevron-down-BHa1JvBu.js";import"./cross-1MrZuHJo.js";import"./PdfViewerSidebar-Cjcu8BeM.js";import"./index-CKx0DSN2.js";import"./index-D_uPtWn9.js";import"./index-Dw0sPzkR.js";import"./PdfViewerToolbar-DIzZOJ2s.js";import"./Button-B8cvgo0T.js";import"./chevron-right-Dr7mCDp1.js";import"./Input-Bs12mOix.js";import"./search-BpuAyapl.js";import"./spin-DDIY2e9h.js";import"./error-Ba94mTx6.js";import"./withOsdkMetrics-CF099yPb.js";import"./makeExternalStore-CvGEVSlU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
