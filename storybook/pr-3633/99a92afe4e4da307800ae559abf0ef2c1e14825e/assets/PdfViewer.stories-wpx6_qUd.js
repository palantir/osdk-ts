import{j as r,M as s}from"./iframe-zLsQUMAw.js";import{P as p}from"./pdf-viewer-BVXiFkb9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ob50SXEk.js";import"./preload-helper-CO4lQq_B.js";import"./PdfRenderer-DK9_aV32.js";import"./index-DE6lriSD.js";import"./PdfViewer-DVItRCXc.js";import"./PdfViewer.module.css-kfnGGd-4.js";import"./PdfViewerAnnotationLayer-D6alYPOB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1W-MgJx.js";import"./PdfViewerOutlineSidebar-D8xKgMha.js";import"./PdfViewerSidebarHeader-DAvojvd9.js";import"./useBaseUiId-CDbWZKXZ.js";import"./useControlled-Bnt72tl_.js";import"./CompositeRoot-4fQ7-zZa.js";import"./CompositeItem-CjgyYjDg.js";import"./ToolbarRootContext-D-gY887B.js";import"./composite-BsASbnkT.js";import"./svgIconContainer-DM1sVsf9.js";import"./PdfViewerSearchBar-mAI-TOSh.js";import"./chevron-up-C_zpMK7F.js";import"./chevron-down-K_6VEsr_.js";import"./cross-HAfKpsri.js";import"./PdfViewerSidebar-D0UdxJmn.js";import"./index-DDQT6zO2.js";import"./index-DK05LQT7.js";import"./index-WGFNGwIq.js";import"./PdfViewerToolbar-CT9txXJG.js";import"./Button-CQlBfRM3.js";import"./chevron-right-BM6kQY07.js";import"./Input-DFEZJQv8.js";import"./search-B4nRmcHn.js";import"./spin-Dv5cJ0dn.js";import"./error-Bw9Mtjnp.js";import"./withOsdkMetrics-CICgC5TI.js";import"./makeExternalStore-B-tZIFNm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
