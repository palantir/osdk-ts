import{j as r,M as s}from"./iframe-BV7Th0fF.js";import{P as p}from"./pdf-viewer-B1l6qhJZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqFAX4kX.js";import"./preload-helper-Cu3ZHVu2.js";import"./PdfRenderer--sJuvP8O.js";import"./index-Br-jjK7X.js";import"./PdfViewer-BZ-YbJxf.js";import"./PdfViewer.module.css-Di0-fwME.js";import"./PdfViewerAnnotationLayer-DpC4g3i2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BTlFUxOZ.js";import"./PdfViewerOutlineSidebar-DZQvqIkc.js";import"./PdfViewerSidebarHeader-lI9A-d8g.js";import"./useBaseUiId-JERyR0A6.js";import"./useControlled-BqzlQWkm.js";import"./CompositeRoot-TdgKJ3ar.js";import"./CompositeItem-M7DYisS1.js";import"./ToolbarRootContext-D-6oFp8s.js";import"./composite-CFCU5Ynw.js";import"./svgIconContainer-CpyPhDQD.js";import"./PdfViewerSearchBar-BTPK7eFv.js";import"./chevron-up-10N2A9SW.js";import"./chevron-down-0i5T79Pd.js";import"./cross-BIdPiM-5.js";import"./PdfViewerSidebar-et4LYKLC.js";import"./index-BLjCXjpg.js";import"./index-FxS8-1eX.js";import"./index-lC9bqkZo.js";import"./PdfViewerToolbar-DntfFJKH.js";import"./Button-7xsuplQ0.js";import"./chevron-right-CQtw4BOY.js";import"./Input-7udr9lBc.js";import"./search-BQ7KQ6Xp.js";import"./spin-BoAd8wKO.js";import"./error-WZUfxqHG.js";import"./withOsdkMetrics-C8rxLLzf.js";import"./makeExternalStore-BQTgj8Pi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
