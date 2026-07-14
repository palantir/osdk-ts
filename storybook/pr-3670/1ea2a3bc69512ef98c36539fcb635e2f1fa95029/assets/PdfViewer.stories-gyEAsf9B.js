import{j as r,M as s}from"./iframe-CpomApVZ.js";import{P as p}from"./pdf-viewer-BP_Gj4i4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cg1RDLsh.js";import"./preload-helper-BH-Cl0Px.js";import"./PdfRenderer-BfwyX51C.js";import"./index-CGC6T-XZ.js";import"./PdfViewer-f5cm_p7E.js";import"./PdfViewer.module.css-C0ASaU53.js";import"./PdfViewerAnnotationLayer-CQpcbCzG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Z9jU-_Vm.js";import"./PdfViewerOutlineSidebar-Dw8gmE6W.js";import"./PdfViewerSidebarHeader-CXp2mJP_.js";import"./useBaseUiId-DfyKe6Rq.js";import"./useControlled-kFK3RP89.js";import"./CompositeRoot-CMT5-C8D.js";import"./CompositeItem-CCUp6l13.js";import"./ToolbarRootContext-Cc1gKAra.js";import"./composite-YQ6KkaFC.js";import"./svgIconContainer-Be4HJW8v.js";import"./PdfViewerSearchBar-LBKFyR7G.js";import"./chevron-up-B0VSCeX2.js";import"./chevron-down-BjAEWJUo.js";import"./cross-zY1wytE-.js";import"./PdfViewerSidebar-Bt1I1dj3.js";import"./index-DzfqdwdT.js";import"./index-025Ukm0g.js";import"./index-FygHMFtO.js";import"./PdfViewerToolbar-HUoPpULa.js";import"./Button-DyduBx6s.js";import"./chevron-right-BXKMixZr.js";import"./Input-BJIIc0U8.js";import"./search-BQndk-Uq.js";import"./spin-CgKPT_N1.js";import"./error-C9Q2xxx3.js";import"./withOsdkMetrics-BeHwXWGO.js";import"./makeExternalStore-DP3Smuod.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
