import{j as r,M as s}from"./iframe-BPUI5Kgo.js";import{P as p}from"./pdf-viewer-DacnCHug.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCaJP9U6.js";import"./preload-helper-Dv33dVL8.js";import"./PdfRenderer-C5psiznH.js";import"./index-sIKPHGmL.js";import"./PdfViewer--3iF6h1D.js";import"./PdfViewer.module.css-DoorImWA.js";import"./PdfViewerAnnotationLayer-CY75l9g8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0jFvJim.js";import"./PdfViewerOutlineSidebar-C1DyOySB.js";import"./PdfViewerSidebarHeader-DFc5-rqw.js";import"./useBaseUiId-B34XMpQ7.js";import"./useControlled-D6wbDbTH.js";import"./CompositeRoot-BELqhlSk.js";import"./CompositeItem-DdYQtCue.js";import"./ToolbarRootContext-DmUpdaUF.js";import"./composite-Bg1PJ1tg.js";import"./svgIconContainer-uVN3SHWw.js";import"./PdfViewerSearchBar-DAOsTexC.js";import"./chevron-up-Be6QNi8X.js";import"./chevron-down-4jAljgpv.js";import"./cross-DnWwNXeZ.js";import"./PdfViewerSidebar-DTWjnYLv.js";import"./index-CMWCvMjE.js";import"./index-Z6bfXtiU.js";import"./index-YVZVjFUa.js";import"./PdfViewerToolbar-G3LxIE4T.js";import"./Button-FZz2m_Q-.js";import"./chevron-right-wX6uY2gy.js";import"./Input-uBfJkprS.js";import"./search-DKhgsfsF.js";import"./spin-DydKj0qF.js";import"./error-qD7A_lnk.js";import"./withOsdkMetrics-DhcoXFgw.js";import"./makeExternalStore-BrnuU2nE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
