import{j as r,M as s}from"./iframe-BaZrwhZx.js";import{P as p}from"./pdf-viewer-DSyziVJm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-t0jYshf2.js";import"./preload-helper-DnruKc6a.js";import"./PdfViewer-CtP5dSEQ.js";import"./index-D-0PlAzK.js";import"./BasePdfViewer-Bk9nOjC1.js";import"./BasePdfViewer.module.css-JkVGtEBt.js";import"./PdfViewerAnnotationLayer-Bju8XEoa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQivNHVq.js";import"./PdfViewerOutlineSidebar-CgEqUOD7.js";import"./PdfViewerSidebarHeader-oaCVo38k.js";import"./useBaseUiId-DP1A1DzF.js";import"./useControlled-Dlt0xr8S.js";import"./CompositeRoot-rUEs1j4v.js";import"./CompositeItem-DSkIv2C1.js";import"./ToolbarRootContext-2JwHwx0i.js";import"./composite-TWu21kAm.js";import"./svgIconContainer-CPS4uDwC.js";import"./PdfViewerSearchBar-BdG4YfH3.js";import"./chevron-up-S5-65Y48.js";import"./chevron-down-DT4qGbGn.js";import"./cross-DyGYbG0h.js";import"./PdfViewerSidebar-Cic1V5Or.js";import"./index-DF9-_rao.js";import"./index-DqDEI7FH.js";import"./index-DPaJCD1i.js";import"./PdfViewerToolbar-C8oOyXhg.js";import"./Button-dH1tlH1-.js";import"./chevron-right-bNfwLO-v.js";import"./Input-DobSEfMB.js";import"./search-71bjR_1r.js";import"./spin-BytVBebk.js";import"./error-BGPDkYrO.js";import"./withOsdkMetrics-Bcc9SY-J.js";import"./makeExternalStore-CILR1JwG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
