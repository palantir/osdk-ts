import{j as r,M as s}from"./iframe-DjQMMxLx.js";import{P as p}from"./pdf-viewer-B5qOMDC5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dh4tVW7a.js";import"./preload-helper-D9gz9dP2.js";import"./PdfRenderer-gbaG2-3J.js";import"./index-BQktNRpG.js";import"./PdfViewer-Dzgkfn-v.js";import"./PdfViewer.module.css-CitTp883.js";import"./PdfViewerAnnotationLayer-C07M7mZj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNxSCeB-.js";import"./PdfViewerOutlineSidebar-B0sszHvy.js";import"./PdfViewerSidebarHeader-C472wu17.js";import"./useBaseUiId-DV8MiEHP.js";import"./useControlled-BDZX5EOW.js";import"./CompositeRoot-DMOhjGcq.js";import"./CompositeItem-BHy9Y5ew.js";import"./ToolbarRootContext-DNPy_MLL.js";import"./composite-C5S9u2C0.js";import"./svgIconContainer-CbzxULm7.js";import"./PdfViewerSearchBar-kbM6m5AW.js";import"./chevron-up-C9CBf93y.js";import"./chevron-down-BV8W7pzT.js";import"./cross-5foZzpQT.js";import"./PdfViewerSidebar-BhLZuAfF.js";import"./index-Cvgyb1rs.js";import"./index-ALu0R69I.js";import"./index-BG4nrt80.js";import"./PdfViewerToolbar-D3_IEzXw.js";import"./Button-BTmvZlhP.js";import"./chevron-right-Rrvloza8.js";import"./Input-tHO_0mDU.js";import"./search-Bi__Xh0V.js";import"./spin-CAavJb3y.js";import"./error-DjBJ5FPo.js";import"./withOsdkMetrics-BEgzEpnF.js";import"./makeExternalStore-T8o28ggm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
