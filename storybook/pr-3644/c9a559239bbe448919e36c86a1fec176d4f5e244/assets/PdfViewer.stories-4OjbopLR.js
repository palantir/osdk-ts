import{j as r,M as s}from"./iframe-CNpQMLn4.js";import{P as p}from"./pdf-viewer-BEDPg3p3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CWrcc_3S.js";import"./preload-helper-C_87hQCI.js";import"./PdfRenderer-b8trfWbc.js";import"./index-BW4Yrta1.js";import"./PdfViewer-Ca4dJYLZ.js";import"./PdfViewer.module.css-CXPAXgeG.js";import"./PdfViewerAnnotationLayer-Cb9SPhvC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPfUUsES.js";import"./PdfViewerOutlineSidebar-DvLDxif4.js";import"./PdfViewerSidebarHeader-B9ZZfRRG.js";import"./useBaseUiId-BEFeXtqj.js";import"./useControlled-CMj4rT22.js";import"./CompositeRoot-DMH7K_G9.js";import"./CompositeItem-D_m3Y3KB.js";import"./ToolbarRootContext-wbNwzhh0.js";import"./composite-B5aODx_K.js";import"./svgIconContainer-CnZwy1ol.js";import"./PdfViewerSearchBar-CpCLzMPm.js";import"./chevron-up-nAedAs68.js";import"./chevron-down-CGHvEWCM.js";import"./cross-bz0yJczN.js";import"./PdfViewerSidebar-DfX3Sw75.js";import"./index-CC55HTqK.js";import"./index-D0GIY8Sw.js";import"./index-70VViFzx.js";import"./PdfViewerToolbar-D6OhCHeI.js";import"./Button-D8MovMyN.js";import"./chevron-right-CUb8Vl2q.js";import"./Input-D7508Bqz.js";import"./search-Bx_y_py-.js";import"./spin-DhGq6FxV.js";import"./error-Bvjx_arM.js";import"./withOsdkMetrics-BO9xsuqL.js";import"./makeExternalStore-RFWAkV3y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
