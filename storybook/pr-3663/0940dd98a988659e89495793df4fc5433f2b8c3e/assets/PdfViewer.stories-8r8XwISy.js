import{j as r,M as s}from"./iframe-DvAHs_rK.js";import{P as p}from"./pdf-viewer-BEOFuS-X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B057LH-t.js";import"./preload-helper-Cxypp6NC.js";import"./PdfRenderer-JErq_RXN.js";import"./index-BNrAxUQu.js";import"./PdfViewer-Wfqg156p.js";import"./PdfViewer.module.css-zon4ZzDB.js";import"./PdfViewerAnnotationLayer-CwJU4WHI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHD1erhw.js";import"./PdfViewerOutlineSidebar-BgnUDKiQ.js";import"./PdfViewerSidebarHeader-DVB4C-jz.js";import"./useBaseUiId-C8LpUgdp.js";import"./useControlled-DkXAwXE4.js";import"./CompositeRoot-DLg9wc2A.js";import"./CompositeItem-DX3MatO1.js";import"./ToolbarRootContext-QUpobhM8.js";import"./composite-obrHYeEl.js";import"./svgIconContainer-_lD2_6yh.js";import"./PdfViewerSearchBar-mg8L_Shk.js";import"./chevron-up-D1LF-vEz.js";import"./chevron-down-CF2-IqN0.js";import"./cross-D-wVv7sP.js";import"./PdfViewerSidebar-Bn_MITWc.js";import"./index-CcI9RKAo.js";import"./index-BStcrrnt.js";import"./index-Beg4FSvD.js";import"./PdfViewerToolbar-p0jZdKJ1.js";import"./Button-Dpk0BmRN.js";import"./chevron-right-CYAn1vJk.js";import"./Input-Bn1PVFyp.js";import"./search-C7QeuW8f.js";import"./spin-CSHsc7R_.js";import"./error-BypgT7Ly.js";import"./withOsdkMetrics-uQpOCGzU.js";import"./makeExternalStore-CtSpQ8cF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
