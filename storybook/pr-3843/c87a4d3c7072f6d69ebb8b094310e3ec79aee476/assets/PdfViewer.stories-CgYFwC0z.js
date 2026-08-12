import{j as r,M as s}from"./iframe-D1W6ppAK.js";import{P as p}from"./pdf-viewer-UtpX5Kbl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-bz1ltpII.js";import"./preload-helper-BVLKfSQB.js";import"./PdfRenderer-Br9nUn-k.js";import"./index-8ZY-fAEu.js";import"./PdfViewer-Ce1V5mpq.js";import"./PdfViewer.module.css-D6JddcDt.js";import"./PdfViewerAnnotationLayer-DxBajlgT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVXssbrK.js";import"./PdfViewerOutlineSidebar-Ca7fnId_.js";import"./PdfViewerSidebarHeader-6ncSpds_.js";import"./useBaseUiId-CH82QQ2E.js";import"./useControlled-BcGmUGgO.js";import"./CompositeRoot-MjoR_FrA.js";import"./CompositeItem-B4Xj9JQ_.js";import"./ToolbarRootContext-GzlqhBPh.js";import"./composite-CpX9wK4w.js";import"./svgIconContainer-DN-_s1rP.js";import"./PdfViewerSearchBar-DxzFZXfj.js";import"./chevron-up-Cpge-S68.js";import"./chevron-down-4suDLJVI.js";import"./cross-D_CxARA8.js";import"./PdfViewerSidebar-BDKVd3E3.js";import"./index-BdK8S6bs.js";import"./index-DDvK6xdc.js";import"./index-DUSFKfe-.js";import"./PdfViewerToolbar-CiZB9wXC.js";import"./Button-2-x2Eoj_.js";import"./chevron-right-CliuX6_o.js";import"./Input-D9RKMHTW.js";import"./search-DG4ye0Iy.js";import"./spin-COXmvfsS.js";import"./error-C_dk0FTg.js";import"./withOsdkMetrics-DBsUcf0H.js";import"./makeExternalStore-DtSycEX-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
