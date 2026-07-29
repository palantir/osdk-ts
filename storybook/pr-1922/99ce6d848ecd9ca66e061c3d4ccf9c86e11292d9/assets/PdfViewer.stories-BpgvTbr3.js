import{j as r,M as s}from"./iframe-Cit8dWXp.js";import{P as p}from"./pdf-viewer-DCAMLyS9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOFuW-70.js";import"./preload-helper-CCWrzc8D.js";import"./PdfRenderer-C3K_TfQf.js";import"./index-DjKRvWyY.js";import"./PdfViewer-D9YNmlbA.js";import"./PdfViewer.module.css-COW0nIB0.js";import"./PdfViewerAnnotationLayer-CZ5yhPEN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JbNtNf1c.js";import"./PdfViewerOutlineSidebar-DGy_28Cg.js";import"./PdfViewerSidebarHeader-DiKpGf_0.js";import"./useBaseUiId-DYvasBbv.js";import"./useControlled-D1zi4BZe.js";import"./CompositeRoot-Cu-ShBso.js";import"./CompositeItem-BbrpyRMV.js";import"./ToolbarRootContext-N4iCvs8E.js";import"./composite-BgoZwE_5.js";import"./svgIconContainer-CnhTjGYI.js";import"./PdfViewerSearchBar-CnctjctJ.js";import"./chevron-up-CF65rcDc.js";import"./chevron-down-grDpNC0P.js";import"./cross-gQNsGHqK.js";import"./PdfViewerSidebar-W7QezH4j.js";import"./index-DTPUrDLg.js";import"./index-keZnzdM5.js";import"./index-BWFrdUWl.js";import"./PdfViewerToolbar-7BIrTqy6.js";import"./Button-Dq2cEP2I.js";import"./chevron-right-468jhI1Q.js";import"./Input-D4pO2QO0.js";import"./search-BOSFG60z.js";import"./spin-Ca6feCOR.js";import"./error-CsqJDmzd.js";import"./withOsdkMetrics-DjoWeLgm.js";import"./makeExternalStore-DCWmOVk3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
