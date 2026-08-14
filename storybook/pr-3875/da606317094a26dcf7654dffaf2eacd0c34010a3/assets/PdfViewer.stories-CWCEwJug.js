import{j as r,M as s}from"./iframe-CVr9LoxM.js";import{P as p}from"./pdf-viewer-Bjayf1eq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1sr2PWft.js";import"./preload-helper-B3cY2-AW.js";import"./PdfViewer-DZ2PBorK.js";import"./index-Df4Vb_Rg.js";import"./BasePdfViewer-Bymd7ThQ.js";import"./BasePdfViewer.module.css-BrPBaCHp.js";import"./PdfViewerAnnotationLayer-R6aDrb8-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BkI02u-3.js";import"./PdfViewerOutlineSidebar-adBjwwfe.js";import"./PdfViewerSidebarHeader-0ZiQsxuM.js";import"./useBaseUiId-BgjPqsl9.js";import"./useControlled-smGAEf-G.js";import"./CompositeRoot-Dure-9nv.js";import"./CompositeItem-B09-p_Fm.js";import"./ToolbarRootContext-CLf2yNEL.js";import"./composite-CWgHrWA4.js";import"./svgIconContainer-BVc8zREf.js";import"./PdfViewerSearchBar-CIc7CFzN.js";import"./chevron-up-0qw-sifp.js";import"./chevron-down-B0k-btX-.js";import"./cross-CBN4pK4_.js";import"./PdfViewerSidebar-C6eLmwPp.js";import"./index-Clqhcc_a.js";import"./index-F2yAeMdf.js";import"./index-HRRYB8HE.js";import"./PdfViewerToolbar-D5q_CZ_L.js";import"./Button-vPPL3ll8.js";import"./chevron-right-CJ2LptPN.js";import"./Input-BcPZGFIr.js";import"./search-Brj5g3oE.js";import"./spin-CUdOa-jn.js";import"./error-BXLmWA6n.js";import"./withOsdkMetrics-DBLS2NQA.js";import"./makeExternalStore--O5_5o65.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
