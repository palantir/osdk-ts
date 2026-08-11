import{j as r,M as s}from"./iframe-DYDbEQjg.js";import{P as p}from"./pdf-viewer-DgqmauBY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Crv6Q_lo.js";import"./preload-helper-SJ9dZZVr.js";import"./PdfRenderer-BRJRwp6z.js";import"./index-DIR1geUe.js";import"./PdfViewer-CTStmf-8.js";import"./PdfViewer.module.css-DxIPRDML.js";import"./PdfViewerAnnotationLayer-C24Pm5nj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BaJhqEoP.js";import"./PdfViewerOutlineSidebar-By2WX8gK.js";import"./PdfViewerSidebarHeader-BtlZuRCV.js";import"./useBaseUiId-BR9O5v-S.js";import"./useControlled-CZkLI-xA.js";import"./CompositeRoot-CGAI-bqV.js";import"./CompositeItem-BZwtU7Zd.js";import"./ToolbarRootContext-BmRDBYMy.js";import"./composite-uzlB0y27.js";import"./svgIconContainer-C1TqWZyS.js";import"./PdfViewerSearchBar-pdzz1G6d.js";import"./chevron-up-CNV8n4k5.js";import"./chevron-down-PWwO_bbr.js";import"./cross-D_scKixK.js";import"./PdfViewerSidebar-CBMixfLO.js";import"./index-1nIkSE_C.js";import"./index-0N5Un70a.js";import"./index-BG296H4M.js";import"./PdfViewerToolbar-CwVFiA-1.js";import"./Button-CAwJXN2j.js";import"./chevron-right-Dgi7nJYX.js";import"./Input-HmPeHjJ0.js";import"./search-tc_uXOKh.js";import"./spin-DaM9uVlp.js";import"./error-DNHX8GsG.js";import"./withOsdkMetrics-Bxa30ZAo.js";import"./makeExternalStore-CGR7TrJA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
