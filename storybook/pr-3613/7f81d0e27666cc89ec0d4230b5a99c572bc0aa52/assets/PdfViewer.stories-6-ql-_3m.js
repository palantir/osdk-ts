import{j as r,M as s}from"./iframe-CaM4X99x.js";import{P as p}from"./pdf-viewer-1IxnCXon.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6qqHLMQ.js";import"./preload-helper-Sj4Ql0mN.js";import"./PdfRenderer-Bt4MjLYR.js";import"./index-8qI_oH2N.js";import"./PdfViewer-Csmn2F77.js";import"./PdfViewer.module.css-tcH6U5N6.js";import"./PdfViewerAnnotationLayer-CGXXLsdA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1YROIx3.js";import"./PdfViewerOutlineSidebar-jJoMXShm.js";import"./PdfViewerSidebarHeader-iKOWQfmJ.js";import"./useBaseUiId-Cz8ADNpo.js";import"./useControlled-Cb7rjJua.js";import"./CompositeRoot-BXqStCew.js";import"./CompositeItem-B4dq8rqf.js";import"./ToolbarRootContext-B0dPoWux.js";import"./composite-LVHrbq4b.js";import"./svgIconContainer-C8BI_VUr.js";import"./PdfViewerSearchBar-xlFnaS-D.js";import"./chevron-up-DidAWVaH.js";import"./chevron-down-CaS_fpTc.js";import"./cross-C0i3jESn.js";import"./PdfViewerSidebar-EZU6BL-M.js";import"./index-BMCgbYm5.js";import"./index-BeGk-dpa.js";import"./index-cegnn8q1.js";import"./PdfViewerToolbar-CbgcIi6g.js";import"./Button-C5-beAkC.js";import"./chevron-right-DXREBO2-.js";import"./Input-D1n6OtUk.js";import"./search-CKrrrESz.js";import"./spin-DFEU6m1E.js";import"./error-Do1qNI0E.js";import"./withOsdkMetrics-Dscuj-Zh.js";import"./makeExternalStore-D6Co5Hsj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
