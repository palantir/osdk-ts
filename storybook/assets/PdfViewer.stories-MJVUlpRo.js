import{j as r,M as s}from"./iframe-bqNDes0h.js";import{P as p}from"./pdf-viewer-DI_gVLl3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dmkjjp6i.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-C_wjHiya.js";import"./index-D-kpR4U5.js";import"./PdfViewer-BaHhr5g9.js";import"./PdfViewer.module.css-Be87l1y3.js";import"./PdfViewerAnnotationLayer-wByuSZmd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSRg2mw6.js";import"./PdfViewerOutlineSidebar-CcC6Atr_.js";import"./PdfViewerSidebarHeader-1tHHKHcs.js";import"./useBaseUiId-BdVIrhLm.js";import"./useControlled-BXUawHF3.js";import"./CompositeRoot-DKflVWtI.js";import"./CompositeItem-CdBWSXyW.js";import"./ToolbarRootContext-B-Yq57Bt.js";import"./composite-Bes1Kf7p.js";import"./svgIconContainer-nN-O7odi.js";import"./PdfViewerSearchBar-DB2VUP8W.js";import"./chevron-up-BlzKdxyV.js";import"./chevron-down-BfCtZkjC.js";import"./cross-D-HBFxBZ.js";import"./PdfViewerSidebar-D2ruFRw0.js";import"./index-Gm4DsetC.js";import"./index-CQpE82He.js";import"./index-KCfabZ1g.js";import"./PdfViewerToolbar-jOLu5Oro.js";import"./Button-BOlqyk1x.js";import"./chevron-right-C4rG2lL2.js";import"./Input-Dg6Zh6vs.js";import"./search-DkS45smT.js";import"./spin-BdB5tRbQ.js";import"./error-rjrh1Exq.js";import"./withOsdkMetrics-BOXWJewy.js";import"./makeExternalStore-Cz-ju0RG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
