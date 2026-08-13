import{j as r,M as s}from"./iframe-CtbKcdah.js";import{P as p}from"./pdf-viewer-DA65UqMo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqEbCCpS.js";import"./preload-helper-EU-ENyZQ.js";import"./PdfViewer-CUeB_1fl.js";import"./index-CwYTowdT.js";import"./BasePdfViewer-C5BI5nEV.js";import"./BasePdfViewer.module.css-BOBaiiys.js";import"./PdfViewerAnnotationLayer-BSgZBs79.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JKyoHm7y.js";import"./PdfViewerOutlineSidebar-G0TJc9Cc.js";import"./PdfViewerSidebarHeader-_s6jRjcj.js";import"./useBaseUiId-0bJN_qdd.js";import"./useControlled-BcslQkqc.js";import"./CompositeRoot-CstzH5Yq.js";import"./CompositeItem-lZSk-3LJ.js";import"./ToolbarRootContext-1H0rLmo4.js";import"./composite-BHhkxlsM.js";import"./svgIconContainer-Cet6vu_r.js";import"./PdfViewerSearchBar-DpjUHU6e.js";import"./chevron-up-H25RrGEC.js";import"./chevron-down-DBDRq4_M.js";import"./cross-DpOV5wae.js";import"./PdfViewerSidebar-COsD4_vm.js";import"./index-ePGgCjvy.js";import"./index-DZQwww7d.js";import"./index-fOPXI3EL.js";import"./PdfViewerToolbar-D3L2q1EJ.js";import"./Button-B-vHHAok.js";import"./chevron-right-BOyT9XLX.js";import"./Input-JG5cgvZN.js";import"./search-BwzKNgs0.js";import"./spin-CsVyP09h.js";import"./error-D69Vfmfe.js";import"./withOsdkMetrics-BjcrUEVS.js";import"./makeExternalStore-QdIdUwH6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
