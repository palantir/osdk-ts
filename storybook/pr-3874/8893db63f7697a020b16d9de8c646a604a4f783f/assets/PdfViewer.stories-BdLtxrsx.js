import{j as r,M as s}from"./iframe-BS39yabj.js";import{P as p}from"./pdf-viewer-CBDFizCc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cz-BMlz9.js";import"./preload-helper-BlmF7poY.js";import"./PdfViewer-9jEuaLvj.js";import"./index-azX0WN20.js";import"./BasePdfViewer-BCCS3HZf.js";import"./BasePdfViewer.module.css-nLZfwNVQ.js";import"./PdfViewerAnnotationLayer-gs9P7R0M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-o-E-tpAz.js";import"./PdfViewerOutlineSidebar-DcVClBWO.js";import"./PdfViewerSidebarHeader-C7DFNsZz.js";import"./useBaseUiId-D6zQUJH2.js";import"./useControlled-BtFTec_4.js";import"./CompositeRoot-CroFjIog.js";import"./CompositeItem-9rYzgPbG.js";import"./ToolbarRootContext-CI8IZR11.js";import"./composite-CrL6ee8J.js";import"./svgIconContainer-CNsteYTu.js";import"./PdfViewerSearchBar-DfBjbCzy.js";import"./chevron-up-DHeNtOMz.js";import"./chevron-down-DlL6v6RD.js";import"./cross-bmcz7kaq.js";import"./PdfViewerSidebar-CJhMBe8X.js";import"./index-COrNsrGV.js";import"./index-DNFWNz_b.js";import"./index-DG4fpTh9.js";import"./PdfViewerToolbar-B51P9rIQ.js";import"./Button-iYAVh6AY.js";import"./chevron-right-DmlEdtRa.js";import"./Input-D3GthuCR.js";import"./search-DAe8-jYH.js";import"./spin-R8XCzbDP.js";import"./error-BIF0zaRT.js";import"./withOsdkMetrics-D0DSfH2H.js";import"./makeExternalStore-CRPXUjA_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
