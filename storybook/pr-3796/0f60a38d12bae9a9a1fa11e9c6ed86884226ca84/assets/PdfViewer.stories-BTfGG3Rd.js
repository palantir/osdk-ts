import{j as r,M as s}from"./iframe-1PpanLKH.js";import{P as p}from"./pdf-viewer-D8gsWuWF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SvC7szoa.js";import"./preload-helper-KbEEj-xI.js";import"./PdfRenderer-BaFYI1ap.js";import"./index-DutAlB9I.js";import"./PdfViewer-D3GPFnrI.js";import"./PdfViewer.module.css-G5bDXAci.js";import"./PdfViewerAnnotationLayer-ylYh6rrP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DqlnQjYO.js";import"./PdfViewerOutlineSidebar-BxRkvcP3.js";import"./PdfViewerSidebarHeader-BGGdosQO.js";import"./useBaseUiId-BGjDyvEb.js";import"./useControlled-CZ2Sf3a4.js";import"./CompositeRoot-0_0Tob3Q.js";import"./CompositeItem-C1t_VxXC.js";import"./ToolbarRootContext-BraDwkQj.js";import"./composite-mNL3yU55.js";import"./svgIconContainer-BTfz0b1A.js";import"./PdfViewerSearchBar-C3t3p2B4.js";import"./chevron-up-CFsHKjwH.js";import"./chevron-down-D52zl500.js";import"./cross-B81yz6Sm.js";import"./PdfViewerSidebar-B_GmaF2h.js";import"./index-C5a1k7X-.js";import"./index-CZZk-Abr.js";import"./index-Cl3lKny9.js";import"./PdfViewerToolbar-BgoDbq93.js";import"./Button-ClnJ7iaU.js";import"./chevron-right-bkD0H6R3.js";import"./Input-BTGhw7E0.js";import"./search-BQm_FR5T.js";import"./spin--96dY4x6.js";import"./error-Dg_355wt.js";import"./withOsdkMetrics-D0Tce0be.js";import"./makeExternalStore-DGwHvp7m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
