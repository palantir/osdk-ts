import{j as r,M as s}from"./iframe-CofS9Mjv.js";import{P as p}from"./pdf-viewer-CVZlZqaT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXlAx3u6.js";import"./preload-helper-DCg3GuVE.js";import"./PdfViewer-C6mSLtdz.js";import"./index-Dba1-hqN.js";import"./BasePdfViewer-CtqCZK4V.js";import"./BasePdfViewer.module.css-YR1zDZz4.js";import"./PdfViewerAnnotationLayer-Cjkim3eY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ct1NOy-G.js";import"./PdfViewerOutlineSidebar-B8w8rzdm.js";import"./PdfViewerSidebarHeader-NhRyCa1W.js";import"./useBaseUiId-BkkGBRPa.js";import"./useControlled-Dhms1Lp4.js";import"./CompositeRoot-BDFEKOSr.js";import"./CompositeItem-GQbg_S7m.js";import"./ToolbarRootContext-B8GhaGLP.js";import"./composite-BDNG4DUT.js";import"./svgIconContainer-rLHaF5xG.js";import"./PdfViewerSearchBar-CY8cxa_3.js";import"./chevron-up-CA9F1BNS.js";import"./chevron-down-CACMHp08.js";import"./cross-5sYjwK4P.js";import"./PdfViewerSidebar-BF240AW4.js";import"./index-CfMbSRut.js";import"./index-FNQL6Pr9.js";import"./index-KxxBCqJY.js";import"./PdfViewerToolbar-CA7RAQMz.js";import"./Button-3zEBIt6E.js";import"./chevron-right-BXCFSWEy.js";import"./Input-Bk5_B8IH.js";import"./search-CbFqNZT1.js";import"./spin-7yiGG4xi.js";import"./error-DOmo2qFa.js";import"./withOsdkMetrics-PwzVtj_c.js";import"./makeExternalStore-BJ0PmYe7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
