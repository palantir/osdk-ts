import{j as r,M as s}from"./iframe-CLbUNDDQ.js";import{P as p}from"./pdf-viewer-B_MMxDKW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCxOOxo_.js";import"./preload-helper-Ddvl-xLL.js";import"./PdfRenderer-qDp1ojE7.js";import"./index-DdSZk3vu.js";import"./PdfViewer-CmHFkHXf.js";import"./PdfViewer.module.css-Du6M0PQW.js";import"./PdfViewerAnnotationLayer-CQ0cLXUc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJpN8l4n.js";import"./PdfViewerOutlineSidebar-BH3t0Tn1.js";import"./PdfViewerSidebarHeader-CuQbqX3K.js";import"./useBaseUiId-Duy4oCBe.js";import"./useControlled-Bmx5uuBa.js";import"./CompositeRoot-CU6VILA8.js";import"./CompositeItem-CF7zNtiQ.js";import"./ToolbarRootContext-4PSRkTRf.js";import"./composite-DWZ-xHoQ.js";import"./svgIconContainer-bWFwhvyx.js";import"./PdfViewerSearchBar-BYslAUs_.js";import"./chevron-up-8i4hAIxM.js";import"./chevron-down-D5iTV8xG.js";import"./cross-Bvgv53c_.js";import"./PdfViewerSidebar-CjwyUaVI.js";import"./index-Bum4KHd8.js";import"./index-jgSOSH1p.js";import"./index-BWIEmGIo.js";import"./PdfViewerToolbar-orpWrQVH.js";import"./Button-Bqk3M9e4.js";import"./chevron-right-i76ypm70.js";import"./Input-BKJXytVV.js";import"./search-CYwpcKR9.js";import"./spin-DSHLdfcX.js";import"./error-Cwe5UK3L.js";import"./withOsdkMetrics-GOg6BWns.js";import"./makeExternalStore-C653oAyg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
