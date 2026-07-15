import{j as r,M as s}from"./iframe-CrtK0oGg.js";import{P as p}from"./pdf-viewer-BIqmYn4G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjTNFpmv.js";import"./preload-helper-DUgvGLym.js";import"./PdfRenderer-BgoJav9r.js";import"./index-uDVvSurO.js";import"./PdfViewer-DjyIdGnf.js";import"./PdfViewer.module.css-BL0sri3Z.js";import"./PdfViewerAnnotationLayer-BTxsr51W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cnwtnp0z.js";import"./PdfViewerOutlineSidebar-CERkyqub.js";import"./PdfViewerSidebarHeader-CZESMvtc.js";import"./useBaseUiId-iQl3YAIc.js";import"./useControlled-DlabaPsQ.js";import"./CompositeRoot-Douj92gn.js";import"./CompositeItem-Co2yt5E5.js";import"./ToolbarRootContext-Dz3VmV3-.js";import"./composite-C8gWpdiy.js";import"./svgIconContainer-BH74CJql.js";import"./PdfViewerSearchBar-DnfImTf-.js";import"./chevron-up-k05oHbk8.js";import"./chevron-down-CsjhBaNM.js";import"./cross-BMeZsGb9.js";import"./PdfViewerSidebar-LGbl53hz.js";import"./index-BkAsY935.js";import"./index-DWFWT__H.js";import"./index-Crs6qkTJ.js";import"./PdfViewerToolbar-BiHGXW9k.js";import"./Button-6viTJ86W.js";import"./chevron-right-Dr_YZVcW.js";import"./Input-Ba_HuI20.js";import"./search-CtEzcMEF.js";import"./spin-DI0TIXK2.js";import"./error-CUWTP8Pf.js";import"./withOsdkMetrics-DfAdNawF.js";import"./makeExternalStore-8MSmvfdO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
