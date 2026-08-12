import{j as r,M as s}from"./iframe-Bfu51uKD.js";import{P as p}from"./pdf-viewer-J3ztxjuS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEUWWgdJ.js";import"./preload-helper-CzYQogJ9.js";import"./PdfRenderer-qMuFsAdu.js";import"./index-DQHJlggZ.js";import"./PdfViewer-C9esHqq0.js";import"./PdfViewer.module.css-hJfAY1Nv.js";import"./PdfViewerAnnotationLayer-CjggEulK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cm-ESPca.js";import"./PdfViewerOutlineSidebar-B3U_QM5u.js";import"./PdfViewerSidebarHeader-DmizLzTC.js";import"./useBaseUiId-BMFIksfI.js";import"./useControlled-DiKj9TwT.js";import"./CompositeRoot-BduW4qb8.js";import"./CompositeItem-DJ-aCdOv.js";import"./ToolbarRootContext-fCSUIj3k.js";import"./composite-cjjayGq4.js";import"./svgIconContainer-BznedMGF.js";import"./PdfViewerSearchBar-DUEiLEta.js";import"./chevron-up-S5t-lpGO.js";import"./chevron-down-zP9dxkSq.js";import"./cross-Cj0zRN-P.js";import"./PdfViewerSidebar-Bz1N5foq.js";import"./index-yGcDT_JP.js";import"./index-C7HMsQca.js";import"./index-bKbCmQEs.js";import"./PdfViewerToolbar-BG4fb3nf.js";import"./Button-BczMqlK6.js";import"./chevron-right-I2MFjV4p.js";import"./Input-BARZRbjA.js";import"./search-DiqUH8-G.js";import"./spin-BtW8PJFC.js";import"./error-DGXpdtF_.js";import"./withOsdkMetrics-DUx07Whe.js";import"./makeExternalStore-CT8wDfgr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
