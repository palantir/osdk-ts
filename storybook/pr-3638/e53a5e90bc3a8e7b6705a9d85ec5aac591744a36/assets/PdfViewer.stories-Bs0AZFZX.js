import{j as r,M as s}from"./iframe-D3GVN_xa.js";import{P as p}from"./pdf-viewer-CPbTQbCH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eIYuXsDt.js";import"./preload-helper-hn1q1Oc_.js";import"./PdfRenderer-CFOUzGr2.js";import"./index-Du2n5QFe.js";import"./PdfViewer-Cam0Qlmt.js";import"./PdfViewer.module.css-CPx3K-dO.js";import"./PdfViewerAnnotationLayer-C00iBuJt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-gZVTif.js";import"./PdfViewerOutlineSidebar-BLpoazej.js";import"./PdfViewerSidebarHeader-BL5NpkyH.js";import"./useBaseUiId-BPfzsPcC.js";import"./useControlled-xCemqxSk.js";import"./CompositeRoot-3dQd3XH1.js";import"./CompositeItem-COql2-Hh.js";import"./ToolbarRootContext-BEk3VuK8.js";import"./composite-BhDt9Oq3.js";import"./svgIconContainer-CTACS-sh.js";import"./PdfViewerSearchBar-LCdruQvz.js";import"./chevron-up-Cry4mEqR.js";import"./chevron-down-BCeJV8GF.js";import"./cross-TBdfKQjD.js";import"./PdfViewerSidebar-DDy5WDpm.js";import"./index-DAmtkWaU.js";import"./index-Dgu5oJ6_.js";import"./index-BGu-opW5.js";import"./PdfViewerToolbar-CUsNMfwZ.js";import"./Button-Bq15im3B.js";import"./chevron-right-CZQlcP3j.js";import"./Input-DzfXYv_n.js";import"./search-BKNRRqyz.js";import"./spin-B7uAHVae.js";import"./error-DC9uaIIx.js";import"./withOsdkMetrics-D3VcJmau.js";import"./makeExternalStore-CGt4Tg8e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
