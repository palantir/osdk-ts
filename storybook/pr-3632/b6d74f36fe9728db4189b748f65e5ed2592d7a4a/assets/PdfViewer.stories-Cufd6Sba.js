import{j as r,M as s}from"./iframe-CYWi8529.js";import{P as p}from"./pdf-viewer-BDStYfv3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DS0a6n0U.js";import"./preload-helper-CnVGLtiW.js";import"./PdfRenderer-BqROf6V8.js";import"./index-Boz0HyVi.js";import"./PdfViewer-VKLtAQQ0.js";import"./PdfViewer.module.css-DecZ3G8v.js";import"./PdfViewerAnnotationLayer-BbpeeNjW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUZUkiNw.js";import"./PdfViewerOutlineSidebar--_pl_QAz.js";import"./PdfViewerSidebarHeader-DvDV31K2.js";import"./useBaseUiId-OjXTId7w.js";import"./useControlled-svv9BGfV.js";import"./CompositeRoot-DGqxGldP.js";import"./CompositeItem-DfhDrK4I.js";import"./ToolbarRootContext-CLHdEoxs.js";import"./composite-zxSbM7jj.js";import"./svgIconContainer-2BpJRjLB.js";import"./PdfViewerSearchBar-DF8qywMB.js";import"./chevron-up-C-6d6atb.js";import"./chevron-down-HCWc7zXS.js";import"./cross-Qkz6a47_.js";import"./PdfViewerSidebar-C_Lj_ULq.js";import"./index-7zhNQOzu.js";import"./index-DXeq8Ruf.js";import"./index-DRUMM71a.js";import"./PdfViewerToolbar-C_tpQ0yd.js";import"./Button-Bp2GEtN5.js";import"./chevron-right-B4Ot2zAb.js";import"./Input-wMXy-EBj.js";import"./search-GsWk45Z7.js";import"./spin-CllH8yT2.js";import"./error-BLwzgwyq.js";import"./withOsdkMetrics-CEol_Vfs.js";import"./makeExternalStore-DHI2g7Fp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
