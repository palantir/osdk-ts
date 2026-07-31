import{j as r,M as s}from"./iframe-CJh9y-rw.js";import{P as p}from"./pdf-viewer-BI-aCPTO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dp1FWXUU.js";import"./preload-helper-BcaQAKqY.js";import"./PdfRenderer-BBzJJIRJ.js";import"./index-DFSJOe3q.js";import"./PdfViewer-Dq51UBYb.js";import"./PdfViewer.module.css-ClSIS960.js";import"./PdfViewerAnnotationLayer-B1ef5-3D.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cy1wRhg_.js";import"./PdfViewerOutlineSidebar-3a2AcL6y.js";import"./PdfViewerSidebarHeader-BieBy8rY.js";import"./useBaseUiId-BYib4Tg8.js";import"./useControlled-BX6Qm41u.js";import"./CompositeRoot-DggErZRZ.js";import"./CompositeItem-BXWwEeJm.js";import"./ToolbarRootContext-ChBzOUyP.js";import"./composite-BIIW-Cns.js";import"./svgIconContainer-CDTU2Wn-.js";import"./PdfViewerSearchBar-Dw3nBci7.js";import"./chevron-up-CecW7Hup.js";import"./chevron-down-B-HPR9dr.js";import"./cross-DbuClkod.js";import"./PdfViewerSidebar-BmMR94Mf.js";import"./index-BwKul7N-.js";import"./index-Cp3I7hTp.js";import"./index-D1MO8Pmk.js";import"./PdfViewerToolbar-DnClP2lS.js";import"./Button-pOq1Ru5w.js";import"./chevron-right-De6OJYB-.js";import"./Input-DTBlDEIM.js";import"./search-D36sC-mM.js";import"./spin-mKWNZu0n.js";import"./error-D198KRh6.js";import"./withOsdkMetrics-Bja_Ajpu.js";import"./makeExternalStore-z8da-F2a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
