import{j as r,M as s}from"./iframe-Ba2LHmmw.js";import{P as p}from"./pdf-viewer-C1ubrqlI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-wmzXuoYB.js";import"./preload-helper-B7XB0fR8.js";import"./PdfRenderer-fxLsLwGB.js";import"./index-Di_rEjs8.js";import"./PdfViewer-D_NmsiAs.js";import"./PdfViewer.module.css-Cuo5a5NU.js";import"./PdfViewerAnnotationLayer-BIW3m8nf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Du3b4ySw.js";import"./PdfViewerOutlineSidebar-CHipU8GH.js";import"./PdfViewerSidebarHeader-CDmv6Ls-.js";import"./useBaseUiId-kAp3UjRK.js";import"./useControlled-b4VWKtNW.js";import"./CompositeRoot-DHBwAyJY.js";import"./CompositeItem-BkDvpDV-.js";import"./ToolbarRootContext-DksAfQmT.js";import"./composite-B5aXaGsd.js";import"./svgIconContainer-T_6Rhm5F.js";import"./PdfViewerSearchBar-Bc7TnXiv.js";import"./chevron-up-V5egcYOA.js";import"./chevron-down-rpKQMPMV.js";import"./cross-D_tW4Z6z.js";import"./PdfViewerSidebar-D5Dlfexu.js";import"./index--EllkZMo.js";import"./index-C__15Ssw.js";import"./index-DNbaFRaz.js";import"./PdfViewerToolbar-DFpoMl7Y.js";import"./Button-dXiY3Oih.js";import"./chevron-right-DwuKt5w7.js";import"./Input-DYB11wZY.js";import"./search-DOVEiH9F.js";import"./spin-px9aTd_Y.js";import"./error-CAnhijT4.js";import"./withOsdkMetrics-DqTbcU1C.js";import"./makeExternalStore-vStluxin.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
