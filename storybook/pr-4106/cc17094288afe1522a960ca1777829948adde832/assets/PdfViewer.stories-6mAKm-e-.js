import{j as r,M as s}from"./iframe-cXUSCCB6.js";import{P as p}from"./pdf-viewer-DEALL3yx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-k7B2DNAO.js";import"./preload-helper-adOW_bmV.js";import"./PdfViewer-qD-rtGMH.js";import"./index-DBMlmXL0.js";import"./BasePdfViewer-BbEzr_ZC.js";import"./BasePdfViewer.module.css-CORG3U0l.js";import"./PdfViewerAnnotationLayer-Bfv4ZwRh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CpG0NLy3.js";import"./PdfViewerOutlineSidebar-4PdwSFiI.js";import"./PdfViewerSidebarHeader-D0w8CCdH.js";import"./useBaseUiId-CRVXGosA.js";import"./useControlled-DboXIBjA.js";import"./CompositeRoot-Biht4iko.js";import"./CompositeItem-DJYWyjQd.js";import"./ToolbarRootContext-BXvi54FI.js";import"./composite-Do3saceV.js";import"./svgIconContainer-tVdoUfqY.js";import"./PdfViewerSearchBar-B9S-fJX4.js";import"./chevron-up-Cb6E6YjG.js";import"./chevron-down-CiiM93uJ.js";import"./cross-DLTJIT7_.js";import"./PdfViewerSidebar-C1yUBYF0.js";import"./index-Hhj64oQw.js";import"./index-DUupLJDG.js";import"./index-defWb760.js";import"./PdfViewerToolbar-Jq4PKGqo.js";import"./Button-0UL0G0NB.js";import"./chevron-right-CEO5_qDQ.js";import"./Input-CXM44AHw.js";import"./search-CJIpoAKT.js";import"./spin-DbONqbcD.js";import"./error-BiDYwilF.js";import"./withOsdkMetrics-B49tYBTG.js";import"./makeExternalStore-CLMwzEq6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
