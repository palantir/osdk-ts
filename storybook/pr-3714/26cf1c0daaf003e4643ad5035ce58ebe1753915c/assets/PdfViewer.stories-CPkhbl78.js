import{j as r,M as s}from"./iframe-FxsuD6Sr.js";import{P as p}from"./pdf-viewer-BRv3OvAu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-HFTNu6z6.js";import"./preload-helper-DVSGLcJZ.js";import"./PdfRenderer-BwRdhKv7.js";import"./index-CKR2N3kB.js";import"./PdfViewer-CBlfcu9R.js";import"./PdfViewer.module.css-Bx8yoMIC.js";import"./PdfViewerAnnotationLayer-C1Gv6mkm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gGlQW7M_.js";import"./PdfViewerOutlineSidebar-BRFeTgHq.js";import"./PdfViewerSidebarHeader-REszZFmv.js";import"./useBaseUiId-DJR8JcjY.js";import"./useControlled-qOHUhmL1.js";import"./CompositeRoot-CdNvO4X-.js";import"./CompositeItem-BFpc-BWg.js";import"./ToolbarRootContext-D_ykqJKV.js";import"./composite-CppEAQgz.js";import"./svgIconContainer-Ovu2Y5td.js";import"./PdfViewerSearchBar-D-tl6utz.js";import"./chevron-up-D5Kb108a.js";import"./chevron-down-BnyAtcHn.js";import"./cross-CFzSQqt5.js";import"./PdfViewerSidebar-BMmD_eJE.js";import"./index-CkIi5UJm.js";import"./index-DBQ4iNHf.js";import"./index-UE862hPr.js";import"./PdfViewerToolbar-4BT5VfPL.js";import"./Button-MK3sxMcf.js";import"./chevron-right--80C5IH4.js";import"./Input-BWd3MC0K.js";import"./search-Dh51YkIy.js";import"./spin-DWNuyKSS.js";import"./error-SXuJsSsZ.js";import"./withOsdkMetrics-uh8j5bxN.js";import"./makeExternalStore-Cpylu92A.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
