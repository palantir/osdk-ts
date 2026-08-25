import{j as r,M as s}from"./iframe-uuw7htdR.js";import{P as p}from"./pdf-viewer-BU0I1Bw3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-khiWebh6.js";import"./preload-helper-DFPRxsEF.js";import"./PdfViewer-DxuMESxH.js";import"./index-DyFb1z2g.js";import"./BasePdfViewer-LwAQDzp0.js";import"./BasePdfViewer.module.css-Cfs0zN1Q.js";import"./PdfViewerAnnotationLayer-HUnI2QkX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BelLIzm_.js";import"./PdfViewerOutlineSidebar-C__vJ4co.js";import"./PdfViewerSidebarHeader-Dp9KH36x.js";import"./useBaseUiId-BbWDT_DX.js";import"./useControlled-DWYS3HP4.js";import"./CompositeRoot-7Y9KYYHI.js";import"./CompositeItem-CIVV53Jd.js";import"./ToolbarRootContext-DWeXPuz4.js";import"./composite-HcgVWLde.js";import"./svgIconContainer-6mS79FyE.js";import"./PdfViewerSearchBar-asHaeb0d.js";import"./chevron-up-B1QzA4lY.js";import"./chevron-down-Y-hj8f1V.js";import"./cross-BpDXlZPZ.js";import"./PdfViewerSidebar-CLvLfDb5.js";import"./index-D-Jsk4o1.js";import"./index-KZpV_o_R.js";import"./index-DlhafJwL.js";import"./PdfViewerToolbar-DjC2F8uX.js";import"./Button-iHaT6U_x.js";import"./chevron-right-Cp6Bm1ip.js";import"./Input-B4rchUKr.js";import"./search-CPthhaeA.js";import"./spin-CYWQ04e4.js";import"./error-CblFsZqu.js";import"./withOsdkMetrics-CgSgSDy7.js";import"./makeExternalStore-DAuuY8fZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
