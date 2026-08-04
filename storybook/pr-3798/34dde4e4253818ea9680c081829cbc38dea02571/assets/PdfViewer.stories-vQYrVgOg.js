import{j as r,M as s}from"./iframe-BuzOoOHv.js";import{P as p}from"./pdf-viewer-DkVaT0uS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-yGUqOioL.js";import"./preload-helper-C765uWVj.js";import"./PdfRenderer-C5UltPPD.js";import"./index-_6ysS2yV.js";import"./PdfViewer-Bay10IrA.js";import"./PdfViewer.module.css-Cu1fZgJE.js";import"./PdfViewerAnnotationLayer-DNXqFS0-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--xqDIz3p.js";import"./PdfViewerOutlineSidebar-DdnD-XEx.js";import"./PdfViewerSidebarHeader-CP7Shedp.js";import"./useBaseUiId-DqalFV8v.js";import"./useControlled-uHrHxuUf.js";import"./CompositeRoot-CVgt8P1M.js";import"./CompositeItem-TlDrHws6.js";import"./ToolbarRootContext-jg392USi.js";import"./composite-BIVAp0zR.js";import"./svgIconContainer-SORA5KtX.js";import"./PdfViewerSearchBar-CzKGpUWM.js";import"./chevron-up-nLZ3Xx3W.js";import"./chevron-down-CTN4fjxa.js";import"./cross-BV3IGYpC.js";import"./PdfViewerSidebar-BhXesrxg.js";import"./index-9Om4LNln.js";import"./index-DCrRq_5A.js";import"./index-hW3Ke2NY.js";import"./PdfViewerToolbar-iwsfyiBo.js";import"./Button-D1sJFP36.js";import"./chevron-right-BxRIZcyh.js";import"./Input-BO7emUuh.js";import"./search-DqLYnKdd.js";import"./spin-BOykdedH.js";import"./error-h4XEWJuh.js";import"./withOsdkMetrics-BAnTF50z.js";import"./makeExternalStore-CsXJf4mV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
