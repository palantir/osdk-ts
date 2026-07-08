import{j as r,M as s}from"./iframe-D55M5wci.js";import{P as p}from"./pdf-viewer-bjl-sbWR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qJGeAoiE.js";import"./preload-helper-C18qDopu.js";import"./PdfRenderer-B40ideOg.js";import"./index-5AuowcZ1.js";import"./PdfViewer-D1gB-blN.js";import"./PdfViewer.module.css-DUW5bsUq.js";import"./PdfViewerAnnotationLayer-CYwTMN2M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW5yzBuo.js";import"./PdfViewerOutlineSidebar-DoikZeg7.js";import"./PdfViewerSidebarHeader-BVr4UEuo.js";import"./useBaseUiId-Dqp7OPFO.js";import"./useControlled-DK45zpKp.js";import"./CompositeRoot-BUKgJUae.js";import"./CompositeItem-BHvqg_WK.js";import"./ToolbarRootContext--3075s1k.js";import"./composite-BVZ68ZGS.js";import"./svgIconContainer-B1N7UlgV.js";import"./PdfViewerSearchBar-DnZRIU9k.js";import"./chevron-up-GCZ6E3ER.js";import"./chevron-down-Dx2WazF2.js";import"./cross-GBYBmKJt.js";import"./PdfViewerSidebar-DxfHyT9E.js";import"./index-CdMghF7-.js";import"./index-DL7HOTWE.js";import"./index-CXQfZiCl.js";import"./PdfViewerToolbar-BZgVa10U.js";import"./Button-BL1B-X-6.js";import"./chevron-right-0ci24tur.js";import"./Input-pfVHnHW4.js";import"./search-D5wvQIfI.js";import"./spin-4GEU6TjP.js";import"./error-MuIb47bq.js";import"./withOsdkMetrics-DaytlST7.js";import"./makeExternalStore-BDflhLO9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
