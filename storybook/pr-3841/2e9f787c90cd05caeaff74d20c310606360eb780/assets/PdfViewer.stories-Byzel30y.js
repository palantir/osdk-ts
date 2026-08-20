import{j as r,M as s}from"./iframe-DHxsU2_I.js";import{P as p}from"./pdf-viewer-kJwMpeAC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DG6y6qBh.js";import"./preload-helper-BR3ABpJE.js";import"./PdfViewer-L6mQ3Lrg.js";import"./index-vnjM7992.js";import"./BasePdfViewer-B1T_9dRa.js";import"./BasePdfViewer.module.css-DEa2hRy3.js";import"./PdfViewerAnnotationLayer-DOQrbPeK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsP_lSdI.js";import"./PdfViewerOutlineSidebar-wpHBOKHS.js";import"./PdfViewerSidebarHeader-VRNWEjlq.js";import"./useBaseUiId-pTRtJO1U.js";import"./useControlled-DDSoMtR7.js";import"./CompositeRoot-Y7QrxVA5.js";import"./CompositeItem-B_q3XIVN.js";import"./ToolbarRootContext-Brnit9i4.js";import"./composite-6SoNaUP7.js";import"./svgIconContainer-B2plqKMw.js";import"./PdfViewerSearchBar-ymDaSRG7.js";import"./chevron-up-BRGNqedv.js";import"./chevron-down-zF0nXAC0.js";import"./cross-RIzAoTK6.js";import"./PdfViewerSidebar-DZIezoC7.js";import"./index-COpwRMNV.js";import"./index-CDRJBt8l.js";import"./index-BjXFS9V3.js";import"./PdfViewerToolbar-tiX77yrw.js";import"./Button-DytbmDZO.js";import"./chevron-right-89MuFzCh.js";import"./Input-CHAbdjgV.js";import"./search-Cyzg0Z92.js";import"./spin-Jmi6s87g.js";import"./error-CPSw0Cte.js";import"./withOsdkMetrics-flaJFZYR.js";import"./makeExternalStore-BfJvolns.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
