import{j as r,M as s}from"./iframe-Bq08WkX6.js";import{P as p}from"./pdf-viewer-C-NSu0Qb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-IGZ2WZuS.js";import"./preload-helper-CzbD-Dkq.js";import"./PdfRenderer-CGOdFAs1.js";import"./index-15tgvzIh.js";import"./PdfViewer-DvcA9iAa.js";import"./PdfViewer.module.css-B6yDXAId.js";import"./PdfViewerAnnotationLayer-D5RYPdGU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwTR_RL6.js";import"./PdfViewerOutlineSidebar-CzSBy6Bv.js";import"./PdfViewerSidebarHeader-CTf2ctBS.js";import"./useBaseUiId-D80yW2NB.js";import"./useControlled-DZI1tbIH.js";import"./CompositeRoot-C_aHLw0L.js";import"./CompositeItem-D9XKb7P8.js";import"./ToolbarRootContext-C36v0QgL.js";import"./composite-DQ3jHuKN.js";import"./svgIconContainer-BsfTAwTI.js";import"./PdfViewerSearchBar-DYKv0Skk.js";import"./chevron-up-PRUAf7Li.js";import"./chevron-down-B3lt0Bn5.js";import"./cross-D7wZ2dNk.js";import"./PdfViewerSidebar-CFXp6dcj.js";import"./index-DC9h8Vk1.js";import"./index-DM3xTDXQ.js";import"./index-CUtG1M-d.js";import"./PdfViewerToolbar-DKVmG90R.js";import"./Button-f9Giaknz.js";import"./chevron-right-XUj2v3m8.js";import"./Input-BAP4LU5T.js";import"./search-CsWrT34i.js";import"./spin-BwTBhmb4.js";import"./error-CJJkcl9r.js";import"./withOsdkMetrics-C32CoUwf.js";import"./makeExternalStore-TiqtXy3q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
