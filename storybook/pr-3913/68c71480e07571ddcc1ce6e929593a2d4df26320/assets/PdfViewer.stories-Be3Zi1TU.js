import{j as r,M as s}from"./iframe-EjCpIKMB.js";import{P as p}from"./pdf-viewer-CqUs6vXk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlKcwviz.js";import"./preload-helper-CIUDHQF8.js";import"./PdfViewer-BSqyhOtP.js";import"./index-B5U3ePJq.js";import"./BasePdfViewer-DV0b7e5c.js";import"./BasePdfViewer.module.css-CNaDyaFN.js";import"./PdfViewerAnnotationLayer-DuSaiIs7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DM8z2F0i.js";import"./PdfViewerOutlineSidebar-Do2akyaW.js";import"./PdfViewerSidebarHeader-TScxnydC.js";import"./useBaseUiId-CK7LAaP5.js";import"./useControlled-C1-AcGB5.js";import"./CompositeRoot-CCr1Me9C.js";import"./CompositeItem-DMMDITMV.js";import"./ToolbarRootContext-D7y3n011.js";import"./composite-BNMQjeVI.js";import"./svgIconContainer-CP-Ry2TB.js";import"./PdfViewerSearchBar-_F49HBQf.js";import"./chevron-up-NopGkH9f.js";import"./chevron-down-BryEDF54.js";import"./cross-CnLBVn_q.js";import"./PdfViewerSidebar-BpVsOuot.js";import"./index-C86moaIy.js";import"./index-BtHapzj-.js";import"./index-BoU3FokU.js";import"./PdfViewerToolbar-g7VHn3dE.js";import"./Button-i8gsI8dS.js";import"./chevron-right-DUZmFxoO.js";import"./Input-B6qHKpOm.js";import"./search-BuWn_4CG.js";import"./spin-DPwZycMM.js";import"./error-COq5rtPP.js";import"./withOsdkMetrics-BFKxMYaV.js";import"./makeExternalStore-C3iPT6jS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
