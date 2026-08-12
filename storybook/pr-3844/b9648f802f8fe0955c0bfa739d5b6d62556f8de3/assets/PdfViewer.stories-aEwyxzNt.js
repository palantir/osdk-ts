import{j as r,M as s}from"./iframe-DJNQVBhP.js";import{P as p}from"./pdf-viewer-BW2MYust.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B13XuXxD.js";import"./preload-helper-Dd3_dQYh.js";import"./PdfRenderer-CRF95tqO.js";import"./index-CphRLvVE.js";import"./PdfViewer-DJr22pfg.js";import"./PdfViewer.module.css-C8raIj2l.js";import"./PdfViewerAnnotationLayer-BM-u-JMI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cw34--dU.js";import"./PdfViewerOutlineSidebar-m-6R8NZX.js";import"./PdfViewerSidebarHeader-C__2Yfmc.js";import"./useBaseUiId-Cz2X2F5p.js";import"./useControlled-BkxsgPSI.js";import"./CompositeRoot-CleU3Hlc.js";import"./CompositeItem-BYt7z6Mp.js";import"./ToolbarRootContext-80wFuusO.js";import"./composite-Ct6qnndE.js";import"./svgIconContainer-DCiAh43S.js";import"./PdfViewerSearchBar-DOubch5L.js";import"./chevron-up-Jf_45BRd.js";import"./chevron-down-Cy7vDLtZ.js";import"./cross-DsRxB_p3.js";import"./PdfViewerSidebar-DKlbo4ru.js";import"./index-hfdoxJDN.js";import"./index-CmyN3uxX.js";import"./index-a7advLwQ.js";import"./PdfViewerToolbar-Dl6A2K4N.js";import"./Button-AHG0YTUa.js";import"./chevron-right-DYyfn9gD.js";import"./Input-FTUus8ay.js";import"./search-C_y30h_d.js";import"./spin-QAlozofb.js";import"./error-CeYxwre0.js";import"./withOsdkMetrics-zXitcxEN.js";import"./makeExternalStore-DnBSFN8S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
