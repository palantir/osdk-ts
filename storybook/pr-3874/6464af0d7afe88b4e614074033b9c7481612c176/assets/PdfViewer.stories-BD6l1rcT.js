import{j as r,M as s}from"./iframe-BcorHIlW.js";import{P as p}from"./pdf-viewer-M5AtFur2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-gm6TE6k0.js";import"./preload-helper-BKVHm-mS.js";import"./PdfViewer-Cm8AvC7J.js";import"./index-B_6nd-ig.js";import"./BasePdfViewer-B0-Ns-N1.js";import"./BasePdfViewer.module.css-tYQ2UlEo.js";import"./PdfViewerAnnotationLayer-BKRJCudS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUXJmo7r.js";import"./PdfViewerOutlineSidebar-D05tMQXM.js";import"./PdfViewerSidebarHeader-C5KB3Lcy.js";import"./useBaseUiId-BNEl6a46.js";import"./useControlled-BLGT_C96.js";import"./CompositeRoot-D0cvdcUr.js";import"./CompositeItem-DAtA6HT0.js";import"./ToolbarRootContext-Dnx5ruWW.js";import"./composite-CnKbnVU6.js";import"./svgIconContainer-CELc8YnE.js";import"./PdfViewerSearchBar-kP8tJoNh.js";import"./chevron-up-DUv9Hyg5.js";import"./chevron-down-CuN7D4lo.js";import"./cross-Dc1AyHJB.js";import"./PdfViewerSidebar-BYihjiLD.js";import"./index-CrslJJ0M.js";import"./index-DJgr8Ve3.js";import"./index-D0G6bTH7.js";import"./PdfViewerToolbar-ckN04PEi.js";import"./Button-D2Dfqz9N.js";import"./chevron-right-B6AW6sxz.js";import"./Input-BDlnjPS-.js";import"./search-DFDm-vhN.js";import"./spin-_-zoI1zA.js";import"./error-CqYYLkEc.js";import"./withOsdkMetrics-CeNDUVo3.js";import"./makeExternalStore-BLgd-akh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
