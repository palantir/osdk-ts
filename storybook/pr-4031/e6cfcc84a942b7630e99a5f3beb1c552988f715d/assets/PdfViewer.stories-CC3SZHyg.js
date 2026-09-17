import{j as r,M as s}from"./iframe-bxHnXZZE.js";import{P as p}from"./pdf-viewer-COvFPjlh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtUB_TX8.js";import"./preload-helper-7NwT3r5e.js";import"./PdfViewer-BmCOBeyf.js";import"./index-C6fHHFsn.js";import"./BasePdfViewer-BkgvM9Jn.js";import"./BasePdfViewer.module.css-C_vyCOWC.js";import"./PdfViewerAnnotationLayer-DAXNsi_7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4RU5ruD.js";import"./PdfViewerOutlineSidebar-B4bGqyFz.js";import"./PdfViewerSidebarHeader-jyJwm29x.js";import"./useBaseUiId-QHeSB_uY.js";import"./useControlled-DQ7SFQLa.js";import"./CompositeRoot-eNfpFpuA.js";import"./CompositeItem-Dt9_APYR.js";import"./ToolbarRootContext-BNi8FLUA.js";import"./composite-16NtQKdD.js";import"./svgIconContainer-DFa2cGRe.js";import"./PdfViewerSearchBar-CVu4wB8E.js";import"./chevron-up-L_ZEPEZh.js";import"./chevron-down-MvzNfmay.js";import"./cross-BUbLZE-A.js";import"./PdfViewerSidebar-DCX9fkgX.js";import"./index-B3lVa8tN.js";import"./index-fMg1ul0K.js";import"./index-pscJp3QG.js";import"./PdfViewerToolbar-hk58afon.js";import"./Button-CnrUq9Aa.js";import"./chevron-right-DmxmUjx8.js";import"./Input-DlQ75Tiv.js";import"./search-B9cWql5S.js";import"./spin-DE-BIapt.js";import"./error-5Rk85rBd.js";import"./withOsdkMetrics-iUvejygz.js";import"./makeExternalStore-BU1dPe3S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
