import{j as r,M as s}from"./iframe-CF2-Sj3u.js";import{P as p}from"./pdf-viewer-C7l9eXru.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bgb8fJC7.js";import"./preload-helper-DGiL_0YC.js";import"./PdfRenderer-C_3p5MP-.js";import"./index-Di6vk80_.js";import"./PdfViewer-Cf-9Qutx.js";import"./PdfViewer.module.css-BeqCWk2r.js";import"./PdfViewerAnnotationLayer-BqgFKg1t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjeM-IjT.js";import"./PdfViewerOutlineSidebar-CgiC2306.js";import"./PdfViewerSidebarHeader-cQH7ha9N.js";import"./useBaseUiId-DnMjxbKf.js";import"./useControlled-C2elAlNO.js";import"./CompositeRoot-BgPrnQtt.js";import"./CompositeItem-Dtsy8NtD.js";import"./ToolbarRootContext-BO6LBivU.js";import"./composite-ozsOFMJN.js";import"./svgIconContainer-Eu_OnahF.js";import"./PdfViewerSearchBar-BxL2b-35.js";import"./chevron-up-DobEnaP0.js";import"./chevron-down-CC6GeuYy.js";import"./cross-DovANZKV.js";import"./PdfViewerSidebar-CLiWfRz6.js";import"./index-DdqxCR7f.js";import"./index-B1Ce7KrJ.js";import"./index-DbSzIC9m.js";import"./PdfViewerToolbar-x5cOyPac.js";import"./Button-D2M1A0dK.js";import"./chevron-right-D9VwHvGW.js";import"./Input-DNRQ_uyR.js";import"./minus-C2Q4EcYx.js";import"./search-CO3O3W7D.js";import"./spin-Du2jD7AP.js";import"./error-C2rzVhaz.js";import"./withOsdkMetrics-B_gFNDRY.js";import"./makeExternalStore-CjotNSjE.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
