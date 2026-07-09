import{j as r,M as s}from"./iframe-Dbn3udIq.js";import{P as p}from"./pdf-viewer-CYJFqGpH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtwVXiO6.js";import"./preload-helper-B08NS0vP.js";import"./PdfRenderer-ByUjG-Ad.js";import"./index-V8u8oS9z.js";import"./PdfViewer-B_lilLnd.js";import"./PdfViewer.module.css-D8S-rghM.js";import"./PdfViewerAnnotationLayer-AFFjb7Js.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYoaLO3G.js";import"./PdfViewerOutlineSidebar-CJ_-mOOu.js";import"./PdfViewerSidebarHeader-BX2OGZEU.js";import"./useBaseUiId-BA2_gm4V.js";import"./useControlled-Dgnrrptl.js";import"./CompositeRoot-DQESEmMk.js";import"./CompositeItem-TVEgXngK.js";import"./ToolbarRootContext-KkBA9jha.js";import"./composite-ZGPanSe0.js";import"./svgIconContainer-D1SKNX1h.js";import"./PdfViewerSearchBar-BQcqnO8O.js";import"./chevron-up-DexBnufM.js";import"./chevron-down-Coetg7mV.js";import"./cross-BKogVy2q.js";import"./PdfViewerSidebar-Cn8nbIHy.js";import"./index-oizMRn8D.js";import"./index-Cnpq6BkA.js";import"./index-CihIYmhv.js";import"./PdfViewerToolbar-D56Iq8wT.js";import"./Button-7v_wedFK.js";import"./chevron-right-CoxUUdeg.js";import"./Input-D5HVKjUk.js";import"./search-BIRbNFR3.js";import"./spin-K03cDKGo.js";import"./error-CuW4JffS.js";import"./withOsdkMetrics-JBXVlLu-.js";import"./makeExternalStore-BiC33qK3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
