import{j as r,M as s}from"./iframe-C_1Cl5gK.js";import{P as p}from"./pdf-viewer-CPu7bOdS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cy6jPR1L.js";import"./preload-helper-DrD8VVQ_.js";import"./PdfRenderer-CXZU2Yla.js";import"./index-oTCuQgfo.js";import"./PdfViewer-BW0ZQ4L9.js";import"./PdfViewer.module.css-CXczGET_.js";import"./PdfViewerAnnotationLayer-BYVo-_ZN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B4R5fWGd.js";import"./PdfViewerOutlineSidebar-Cj0AFGuv.js";import"./PdfViewerSidebarHeader-Cj5V0KPi.js";import"./useBaseUiId-D56E2IuH.js";import"./useControlled-HZY0Ts_x.js";import"./CompositeRoot-ByRIBbCc.js";import"./CompositeItem-WjuDsuCI.js";import"./ToolbarRootContext-CzeEh-Av.js";import"./composite-o6AQsqAM.js";import"./svgIconContainer-B4pNJQZ5.js";import"./PdfViewerSearchBar-DL-fGi78.js";import"./chevron-up-jX4wohut.js";import"./chevron-down-XIg47Arq.js";import"./cross-BR9oscPP.js";import"./PdfViewerSidebar-BR5BE5YE.js";import"./index-BgB3QU8p.js";import"./index-CzCOCiZR.js";import"./index-CkuCP6M2.js";import"./PdfViewerToolbar-t9uRslg-.js";import"./Button-CEjuqdrt.js";import"./chevron-right-C5rFiFug.js";import"./Input-DAfZ_JxV.js";import"./search-BNIXhj49.js";import"./spin-Bmu4RT3u.js";import"./error-DqlNJLIc.js";import"./withOsdkMetrics-BgUyyyzT.js";import"./makeExternalStore-Bhwc6Kwv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
