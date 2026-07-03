import{j as r,M as s}from"./iframe-mtefFlYx.js";import{P as p}from"./pdf-viewer-CszBVYLw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIzwrO83.js";import"./preload-helper-BMg5tkBc.js";import"./PdfRenderer-CsZvaMio.js";import"./index-D5EVZcT6.js";import"./PdfViewer-Bw0L_gc5.js";import"./PdfViewer.module.css-DpcXTVYx.js";import"./PdfViewerAnnotationLayer-p083XP2s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYkxA2IN.js";import"./PdfViewerOutlineSidebar-BWTIK4B7.js";import"./PdfViewerSidebarHeader-BOW-yM3j.js";import"./useBaseUiId-CH2Oddap.js";import"./useControlled-DUyBSi1T.js";import"./CompositeRoot-DuSDHMNe.js";import"./CompositeItem-eF3gpMHO.js";import"./ToolbarRootContext-BoGcPfLr.js";import"./composite-DP5yfQBs.js";import"./svgIconContainer-XXeuxZEq.js";import"./PdfViewerSearchBar-D4ZAStVB.js";import"./chevron-up-6l7pNHQn.js";import"./chevron-down-DdiMYB74.js";import"./cross-ryeNHxpX.js";import"./PdfViewerSidebar-D04UtZ3R.js";import"./index-hOrZ8mE-.js";import"./index-BnK9EFlB.js";import"./index-B7xmUkLM.js";import"./PdfViewerToolbar-AKw6LqPe.js";import"./Button-CNnlY8OQ.js";import"./chevron-right-CWupiJxd.js";import"./Input-Box540y_.js";import"./search-BvNGMiW-.js";import"./spin-2Jy4Ok0g.js";import"./error-BI1AD_9O.js";import"./withOsdkMetrics-DC3iijN8.js";import"./makeExternalStore-BJTuK7VG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
