import{j as r,M as s}from"./iframe-D_O5GLHm.js";import{P as p}from"./pdf-viewer-CEL-gt-h.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CP7twtII.js";import"./preload-helper-BLPPHW2C.js";import"./PdfViewer-DK5Jnrdj.js";import"./index-XDSUUcCa.js";import"./BasePdfViewer-DRsUJ3pF.js";import"./BasePdfViewer.module.css-Br6moMvI.js";import"./PdfViewerAnnotationLayer-DqztZ6OU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E-xorVfC.js";import"./PdfViewerOutlineSidebar-B3ZDzhI6.js";import"./PdfViewerSidebarHeader-CpBK6HUi.js";import"./useBaseUiId-COien2vv.js";import"./useControlled-Beot_qrN.js";import"./CompositeRoot-Bi6IgKDf.js";import"./CompositeItem-DNEzxX_O.js";import"./ToolbarRootContext-D4thcjEL.js";import"./composite-DGHwIWe7.js";import"./svgIconContainer-8JL1zmDp.js";import"./PdfViewerSearchBar-CYZWS1iA.js";import"./chevron-up-CFm0G331.js";import"./chevron-down-D5_c8Y-V.js";import"./cross-Lj5lTaea.js";import"./PdfViewerSidebar-h7oXODPH.js";import"./index-D_1d4DqT.js";import"./index-7Ufx5a3v.js";import"./index-DFbGTOLT.js";import"./PdfViewerToolbar-CA2iU3Un.js";import"./Button-BrP8Z4b1.js";import"./chevron-right-DAi9YAEE.js";import"./Input-thkDpxWB.js";import"./search-CU5APTmq.js";import"./spin-Dpa05Wjy.js";import"./error-DjceP8bp.js";import"./withOsdkMetrics-BU8FJf48.js";import"./makeExternalStore-YLv6cY3e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
