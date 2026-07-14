import{j as r,M as s}from"./iframe-BHU4Gxck.js";import{P as p}from"./pdf-viewer-DhFxISiD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVEnRlSZ.js";import"./preload-helper-YHwgluMs.js";import"./PdfRenderer-gK4E8VZy.js";import"./index-CgXHfWE-.js";import"./PdfViewer-Boq_A6CW.js";import"./PdfViewer.module.css-oKkfz7zM.js";import"./PdfViewerAnnotationLayer-C2w28khY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Btyxtaq7.js";import"./PdfViewerOutlineSidebar-CwAAldV0.js";import"./PdfViewerSidebarHeader-DgZcv9RX.js";import"./useBaseUiId-D2L0PxcZ.js";import"./useControlled-BloUbVdA.js";import"./CompositeRoot-IZMHbLzQ.js";import"./CompositeItem-CtbkiQmK.js";import"./ToolbarRootContext-Brm7_ofQ.js";import"./composite-Bv0dm5JS.js";import"./svgIconContainer-D5m_4kfF.js";import"./PdfViewerSearchBar-DDsphXSG.js";import"./chevron-up-CLLf5yxV.js";import"./chevron-down-D3TrVsXp.js";import"./cross-v65tmb55.js";import"./PdfViewerSidebar-C81rLCcx.js";import"./index-D3EuoeSW.js";import"./index-VBJbAK1D.js";import"./index-C5wKM8rg.js";import"./PdfViewerToolbar-CrAL-ze9.js";import"./Button-Glm7ZX31.js";import"./chevron-right-Ch7s3Gzo.js";import"./Input-B73veKR0.js";import"./search-Buj_7hNC.js";import"./spin-CyPiUPwe.js";import"./error-DHJ8twOj.js";import"./withOsdkMetrics-CHJ4ewcT.js";import"./makeExternalStore-CxPtkjXX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
