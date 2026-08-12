import{j as r,M as s}from"./iframe-DJFzVHUY.js";import{P as p}from"./pdf-viewer-Bdb1WILd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqLMoNwr.js";import"./preload-helper-2WGoxQfc.js";import"./PdfRenderer-BzARTfRT.js";import"./index-C8WJuqok.js";import"./PdfViewer-CmlHplt_.js";import"./PdfViewer.module.css-D08Y-PA3.js";import"./PdfViewerAnnotationLayer-Ddn59tem.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zZllZm37.js";import"./PdfViewerOutlineSidebar-RwEyRsJ3.js";import"./PdfViewerSidebarHeader-BkynIcAJ.js";import"./useBaseUiId-CGrSWTyF.js";import"./useControlled-B01s-9H8.js";import"./CompositeRoot-CP9Wi0Nl.js";import"./CompositeItem-tYIQGoUN.js";import"./ToolbarRootContext-ZgWiotCD.js";import"./composite-CnhtXZjf.js";import"./svgIconContainer-DHr-sOOW.js";import"./PdfViewerSearchBar-eY-ejwFx.js";import"./chevron-up-C5Q1Aa_o.js";import"./chevron-down-boODY68H.js";import"./cross-DNlGV5O4.js";import"./PdfViewerSidebar-B_MkVWYV.js";import"./index-dZ139dm-.js";import"./index-DTSqGPNo.js";import"./index-DWlt5OtE.js";import"./PdfViewerToolbar-CWDR36-u.js";import"./Button-BDBMJl_t.js";import"./chevron-right-DeZ5xWus.js";import"./Input-D3nPOBMY.js";import"./search-CWhFAg8g.js";import"./spin-CixA20Dd.js";import"./error-DIyK6hbL.js";import"./withOsdkMetrics-sbsVHgwY.js";import"./makeExternalStore-Dlph1PzJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
