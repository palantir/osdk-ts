import{j as r,M as s}from"./iframe-Dmr99acc.js";import{P as p}from"./pdf-viewer-CfArL5J2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqXFjNnB.js";import"./preload-helper-C3fvUQx7.js";import"./PdfRenderer-Bmy9AbvT.js";import"./index-BrNfcA8o.js";import"./PdfViewer-oDfmW-xt.js";import"./PdfViewer.module.css-DLFF8qC5.js";import"./PdfViewerAnnotationLayer-Cuh7no91.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JslG4xRg.js";import"./PdfViewerOutlineSidebar-Wu_hDGDj.js";import"./PdfViewerSidebarHeader-CNF3JDD3.js";import"./useBaseUiId-CZ5UhgWP.js";import"./useControlled-MBfgJYZe.js";import"./CompositeRoot-BEdy9aAb.js";import"./CompositeItem-CzBeefKz.js";import"./ToolbarRootContext-v-w7YnHp.js";import"./composite-CTX0S4gD.js";import"./svgIconContainer-i6wDQlBQ.js";import"./PdfViewerSearchBar-BL3efQDT.js";import"./chevron-up-CjujDLux.js";import"./chevron-down-CGjekJXx.js";import"./cross-DPRer7Lc.js";import"./PdfViewerSidebar-B0QxBIC7.js";import"./index-C5lGNItV.js";import"./index-hysLT7S5.js";import"./index-D0cDwrQE.js";import"./PdfViewerToolbar-COLi7llw.js";import"./Button-DUHV64rf.js";import"./chevron-right-BqRYUoCx.js";import"./Input-D7SXFGM5.js";import"./search-CM8W8GMN.js";import"./spin-DY7xf5kx.js";import"./error-CUTSYbW5.js";import"./withOsdkMetrics-DSCZunsU.js";import"./makeExternalStore-HyFiibfZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
