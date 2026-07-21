import{j as r,M as s}from"./iframe-BkVpHzvQ.js";import{P as p}from"./pdf-viewer-Bo7sPZFS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BbMUOphv.js";import"./preload-helper-B9AvGhZX.js";import"./PdfRenderer-wNwDfL7b.js";import"./index-BL4DLC1N.js";import"./PdfViewer-CCqYZ7gS.js";import"./PdfViewer.module.css-ZbtYl2mf.js";import"./PdfViewerAnnotationLayer-n9RaGEua.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DT3j2ySN.js";import"./PdfViewerOutlineSidebar-DiB7VHys.js";import"./PdfViewerSidebarHeader-4x4xm8A2.js";import"./useBaseUiId-IrylWfg4.js";import"./useControlled-BADUKuig.js";import"./CompositeRoot-C_41qc_M.js";import"./CompositeItem-_cOFeCFn.js";import"./ToolbarRootContext-Chua5F7w.js";import"./composite-DzCDeGJq.js";import"./svgIconContainer-CF7Mc-ko.js";import"./PdfViewerSearchBar-Bk7V8-OS.js";import"./chevron-up-Dvjnxi0v.js";import"./chevron-down-BdtrKVv2.js";import"./cross-C1A8dztN.js";import"./PdfViewerSidebar-DMw0oL31.js";import"./index-moDLjwNO.js";import"./index-CL4PObh9.js";import"./index-B14WgDi5.js";import"./PdfViewerToolbar-BVPopwio.js";import"./Button-D2sTUWJq.js";import"./chevron-right-BDF90rco.js";import"./Input-Fro39VZ2.js";import"./search-BhaSBKsV.js";import"./spin-Dnp0Vokm.js";import"./error-NWQKXzU-.js";import"./withOsdkMetrics-mJ4OJ_RR.js";import"./makeExternalStore-B8ehTRKv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
