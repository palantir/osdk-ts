import{j as r,M as s}from"./iframe-ybi8g-MN.js";import{P as p}from"./pdf-viewer-COIwZrEB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBbAlhCj.js";import"./preload-helper-DoLTJlP_.js";import"./PdfRenderer-BGl59-RS.js";import"./index-DJSt2BGS.js";import"./PdfViewer-I0gr5avV.js";import"./PdfViewer.module.css-B2SLG2gA.js";import"./PdfViewerAnnotationLayer-CkHEb4eI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5q9JMX3G.js";import"./PdfViewerOutlineSidebar-Dr_IduH1.js";import"./PdfViewerSidebarHeader-DDXfRhSN.js";import"./useBaseUiId-gMA3Mt2i.js";import"./useControlled-D4b75tUE.js";import"./CompositeRoot-DZQzWN5h.js";import"./CompositeItem-CZi4achz.js";import"./ToolbarRootContext-CbOW3W23.js";import"./composite-i3hN0MmL.js";import"./svgIconContainer-BtM2uwIm.js";import"./PdfViewerSearchBar-DT7WXVDi.js";import"./chevron-up-yrVu87zL.js";import"./chevron-down-Cr7agNhX.js";import"./cross-zJrUwWQA.js";import"./PdfViewerSidebar-DljpBptf.js";import"./index-DSQ7ED-I.js";import"./index-CqKY6TZp.js";import"./index-CTFarFys.js";import"./PdfViewerToolbar-f4TRZV7S.js";import"./Button-CTtLrNoj.js";import"./chevron-right-DGDa8Mu6.js";import"./Input-WN1fL0hc.js";import"./search-BEDbo01I.js";import"./spin-BbFS7UOF.js";import"./error-CFSUGaoq.js";import"./withOsdkMetrics-gSO0i17z.js";import"./makeExternalStore-GjJO6b-K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
