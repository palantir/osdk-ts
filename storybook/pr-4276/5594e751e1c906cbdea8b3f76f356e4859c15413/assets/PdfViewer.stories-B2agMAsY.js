import{j as r,M as s}from"./iframe-Cp-VmNqL.js";import{P as p}from"./pdf-viewer-D2GRRHNc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cm9x2B4p.js";import"./preload-helper-AzhWXDuQ.js";import"./PdfViewer-LFgxsMAZ.js";import"./index-dpygWVpJ.js";import"./BasePdfViewer-D-56U8rv.js";import"./BasePdfViewer.module.css-D6sFnlok.js";import"./PdfViewerAnnotationLayer-CaXok6DK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cr3GMBrM.js";import"./PdfViewerOutlineSidebar-LVcDEUYY.js";import"./PdfViewerSidebarHeader-BffDS5pH.js";import"./useBaseUiId-OdIul-yE.js";import"./useControlled-OYIwur-C.js";import"./CompositeRoot-BeA-03_-.js";import"./CompositeItem-CzQ4Mwjm.js";import"./ToolbarRootContext-DNY7Xc1D.js";import"./composite-DlQhckwI.js";import"./svgIconContainer-zkQ14032.js";import"./PdfViewerSearchBar-Cm8THDs7.js";import"./chevron-up-C1IjPord.js";import"./chevron-down-Dk2LvJq7.js";import"./cross-uOKlIsXG.js";import"./PdfViewerSidebar-DePITXji.js";import"./index-Jc-X2-Ds.js";import"./index-tUkk1A8p.js";import"./index-yO_woVyq.js";import"./PdfViewerToolbar-BGNoG9NO.js";import"./Button-NTUIWe38.js";import"./chevron-right-BZ_Rsh1v.js";import"./Input-BEEKmunm.js";import"./search-HIN2ZGpm.js";import"./spin-DhG3qMNK.js";import"./error-BJ-TznDH.js";import"./withOsdkMetrics-CWuMV6f9.js";import"./makeExternalStore-oKADq8a2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
