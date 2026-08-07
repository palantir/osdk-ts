import{j as r,M as s}from"./iframe-DBzqrt56.js";import{P as p}from"./pdf-viewer-CuUjPp-U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9u1D05ig.js";import"./preload-helper-BYRdJxme.js";import"./PdfRenderer-C2oQDrz4.js";import"./index-CGTJucPn.js";import"./PdfViewer-B0-6TGVV.js";import"./PdfViewer.module.css-CkvMrTQW.js";import"./PdfViewerAnnotationLayer-YA9ug7UG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cb-2Mr06.js";import"./PdfViewerOutlineSidebar-DgmHP8hW.js";import"./PdfViewerSidebarHeader-CQhyeu9a.js";import"./useBaseUiId-dLakDqSs.js";import"./useControlled-BPRbm5-q.js";import"./CompositeRoot-z2iO2T9Z.js";import"./CompositeItem-jEqhJqZm.js";import"./ToolbarRootContext-BOGYc2wJ.js";import"./composite-B6PaBa-a.js";import"./svgIconContainer-BQ8ude0X.js";import"./PdfViewerSearchBar-sS-WIOAO.js";import"./chevron-up-tMNX2Mfr.js";import"./chevron-down-DuPl72ud.js";import"./cross-Bba8yQHb.js";import"./PdfViewerSidebar-CLA_EOiA.js";import"./index-k77pMsqi.js";import"./index-CZmKTtfj.js";import"./index-B9IR710C.js";import"./PdfViewerToolbar-DfUGlkgx.js";import"./Button-j0UCjDkN.js";import"./chevron-right-BGTSFg-3.js";import"./Input-giB4RCDX.js";import"./search-B2tTqhzE.js";import"./spin-C-SGjuXN.js";import"./error-BgfO_Kt-.js";import"./withOsdkMetrics-lVYMKJO7.js";import"./makeExternalStore-LjuA8zll.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
