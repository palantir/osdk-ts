import{j as r,M as s}from"./iframe--rzYILY1.js";import{P as p}from"./pdf-viewer-CeJ3v9rx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGpZILx5.js";import"./preload-helper-BeoTkHdu.js";import"./PdfViewer-GF6KAK_5.js";import"./index-C7zR2UNJ.js";import"./BasePdfViewer-D2A3C3q8.js";import"./BasePdfViewer.module.css-CmjtJ5c6.js";import"./PdfViewerAnnotationLayer-Ci8Be10d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-skprMCfO.js";import"./PdfViewerOutlineSidebar-DzFQIOWQ.js";import"./PdfViewerSidebarHeader-W5IQzzgO.js";import"./useBaseUiId-CJzyL5xl.js";import"./useControlled-CUByo0YB.js";import"./CompositeRoot-Cx0xmdL_.js";import"./CompositeItem-CuUYeQr-.js";import"./ToolbarRootContext-DCiiiRyC.js";import"./composite-wxEI6Gek.js";import"./svgIconContainer-rHUXuI_K.js";import"./PdfViewerSearchBar-9BFoAeQG.js";import"./chevron-up-BFCioa5F.js";import"./chevron-down-DC1AxXPK.js";import"./cross-CbDoZw20.js";import"./PdfViewerSidebar-9BxncS8g.js";import"./index-CcfXgpac.js";import"./index-IixAyX6d.js";import"./index-DyzOhDxu.js";import"./PdfViewerToolbar-DyPpIrIj.js";import"./Button-Ca6sgk7W.js";import"./chevron-right-CAZLaMay.js";import"./Input-W1UxkG5_.js";import"./search-BOHaXQRv.js";import"./spin-QwjPES6v.js";import"./error-DmzjCkkr.js";import"./withOsdkMetrics-BbSTbtS6.js";import"./makeExternalStore-BhwDVCaS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
