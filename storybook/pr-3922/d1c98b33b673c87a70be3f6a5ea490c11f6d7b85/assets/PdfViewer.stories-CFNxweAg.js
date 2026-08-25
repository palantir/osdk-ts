import{j as r,M as s}from"./iframe-CoDqFtQr.js";import{P as p}from"./pdf-viewer-CnFHRXts.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CgtZO8VR.js";import"./preload-helper-BmQtlo2-.js";import"./PdfViewer-BcK2etRI.js";import"./index-DEf63PKQ.js";import"./BasePdfViewer-BBykn7Jd.js";import"./BasePdfViewer.module.css-B39eTu2w.js";import"./PdfViewerAnnotationLayer-CVJt-XgO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BT1p-Gfz.js";import"./PdfViewerOutlineSidebar-CK0lWDBG.js";import"./PdfViewerSidebarHeader-4dZbBejO.js";import"./useBaseUiId-l4Ce-Oes.js";import"./useControlled-DH19P8RP.js";import"./CompositeRoot-BVvBszw4.js";import"./CompositeItem-yz-_V8KW.js";import"./ToolbarRootContext-DUeXrFD2.js";import"./composite-CyFYModE.js";import"./svgIconContainer-KqUQbUEW.js";import"./PdfViewerSearchBar-B4MUBzRs.js";import"./chevron-up-DxURPsWt.js";import"./chevron-down-BoowdlwO.js";import"./cross-CnhoIzD9.js";import"./PdfViewerSidebar-DX6J_GC9.js";import"./index-BQtDLv6q.js";import"./index-ZhLzpxX-.js";import"./index-BYn91zFu.js";import"./PdfViewerToolbar-BCFe2Z0-.js";import"./Button-CdKky6kN.js";import"./chevron-right-Ce-k8c_1.js";import"./Input-BZ6jwM42.js";import"./search-Ds5uDEZ1.js";import"./spin-CIW4gKXA.js";import"./error-pPyGOl1i.js";import"./withOsdkMetrics-DlX8mWus.js";import"./makeExternalStore-CJioVlys.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
