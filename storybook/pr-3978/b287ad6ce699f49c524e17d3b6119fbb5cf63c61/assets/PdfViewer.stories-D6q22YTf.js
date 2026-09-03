import{j as r,M as s}from"./iframe-Ce1nas-A.js";import{P as p}from"./pdf-viewer-CulK1vdW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0ictt2n.js";import"./preload-helper-DcZRzKsw.js";import"./PdfViewer-ClaRv8do.js";import"./index-DxkusUp0.js";import"./BasePdfViewer-BkpCIN2U.js";import"./BasePdfViewer.module.css-By9OlJZz.js";import"./PdfViewerAnnotationLayer-Bii2mYOO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gIOyHZoo.js";import"./PdfViewerOutlineSidebar-Cv7Z8TQa.js";import"./PdfViewerSidebarHeader-BXOLMll0.js";import"./useBaseUiId-DjCVaNnh.js";import"./useControlled-HDcnxMGz.js";import"./CompositeRoot-DdpiDHhx.js";import"./CompositeItem-Ci-C3Qdf.js";import"./ToolbarRootContext-DETOyxOk.js";import"./composite-DmeYZGjI.js";import"./svgIconContainer-C2K9KBka.js";import"./PdfViewerSearchBar-u-Jsc2QA.js";import"./chevron-up-BJ3NCprr.js";import"./chevron-down-BWpGIUiv.js";import"./cross-BfauTbl-.js";import"./PdfViewerSidebar-awgcLuYe.js";import"./index-Cz6vrhk3.js";import"./index-CuuyYF8k.js";import"./index-C9gjttHq.js";import"./PdfViewerToolbar-YT-nEzNS.js";import"./Button-Dug6UdNF.js";import"./chevron-right-Behw_hqn.js";import"./Input-BkD6sM5Z.js";import"./search-CeMBlWp8.js";import"./spin-DOQkIage.js";import"./error-C2DVXeGz.js";import"./withOsdkMetrics-Oy1nTjGv.js";import"./makeExternalStore-pm8795BR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
