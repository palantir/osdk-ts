import{j as r,M as s}from"./iframe-QZGqQqFJ.js";import{P as p}from"./pdf-viewer-fktl2-Cs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-XCHtJaCD.js";import"./preload-helper-DZTf9Ont.js";import"./PdfRenderer-y0Xm7dIi.js";import"./index-Dx6gu5iB.js";import"./PdfViewer-8dmh139G.js";import"./PdfViewer.module.css-onSjjRlj.js";import"./PdfViewerAnnotationLayer-B2f0G5o4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dk2E9-KR.js";import"./PdfViewerOutlineSidebar-CGqj8PGS.js";import"./PdfViewerSidebarHeader-B2I1Ge42.js";import"./useBaseUiId-CVTOqwoy.js";import"./useControlled-67o-dGk_.js";import"./CompositeRoot-Cdyq6_1C.js";import"./CompositeItem-BOrf-lKd.js";import"./ToolbarRootContext-BmU1NWlK.js";import"./composite-9KmCGXzC.js";import"./svgIconContainer-Br9kWo4N.js";import"./PdfViewerSearchBar-BBfHjcwZ.js";import"./chevron-up-DtPiN81n.js";import"./chevron-down-bVzoGnRr.js";import"./cross-BWVUmifp.js";import"./PdfViewerSidebar-Ba_DFoJ7.js";import"./index-CTBOCsaj.js";import"./index-QC2cTZfA.js";import"./index-C4ionURF.js";import"./PdfViewerToolbar-BX1xRakX.js";import"./Button-BCIOuPdP.js";import"./chevron-right-BGlPnjcj.js";import"./Input-7teiks9U.js";import"./search-Dng-PszH.js";import"./spin-CU6O5Be_.js";import"./error--gw7SX2V.js";import"./withOsdkMetrics-DBV_3f5Y.js";import"./makeExternalStore-DLOCRsN_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
