import{j as r,M as s}from"./iframe-8UpnOuPx.js";import{P as p}from"./pdf-viewer-BcmaTz54.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C9ShgEhR.js";import"./preload-helper-D9D_7nkx.js";import"./PdfViewer-imy-y6Z0.js";import"./index-De8YaqE2.js";import"./BasePdfViewer-iZZSZFhm.js";import"./BasePdfViewer.module.css-BZA8JfeM.js";import"./PdfViewerAnnotationLayer-C3NW0GY9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPx5xfCk.js";import"./PdfViewerOutlineSidebar-CZpyvKCb.js";import"./PdfViewerSidebarHeader-BNAvPul4.js";import"./useBaseUiId-CBuqVLxg.js";import"./useControlled-BGItKX1D.js";import"./CompositeRoot-Dqzpd0Cu.js";import"./CompositeItem-Bt6ccxDB.js";import"./ToolbarRootContext-fX_rXRRK.js";import"./composite-2992q4P-.js";import"./svgIconContainer-Dv8gj-hz.js";import"./PdfViewerSearchBar-Dxdsm221.js";import"./chevron-up-BcTGY92w.js";import"./chevron-down-DYX07tej.js";import"./cross-CNviQWqx.js";import"./PdfViewerSidebar-6NTZpbQc.js";import"./index-B_eZJaHx.js";import"./index-BjHFI_ak.js";import"./index-4j-jzydQ.js";import"./PdfViewerToolbar-ISwnoeMi.js";import"./Button-D9_pkmYb.js";import"./chevron-right-D9ka4Sty.js";import"./Input-Ce_IFTco.js";import"./search-CGAlUSeA.js";import"./spin-C2LhmBMZ.js";import"./error-COIsH0tw.js";import"./withOsdkMetrics-Br_JaF2q.js";import"./makeExternalStore-CEpF0fDK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
