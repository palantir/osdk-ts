import{j as r,M as s}from"./iframe-Bhfx531f.js";import{P as p}from"./pdf-viewer-DHfIQdxk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-nxbujo_A.js";import"./preload-helper-BGTnO5pN.js";import"./PdfRenderer-DHRlY5--.js";import"./index-B0vP1he4.js";import"./PdfViewer-CSPMshba.js";import"./PdfViewer.module.css-YwitJVKR.js";import"./PdfViewerAnnotationLayer-Bq_K92hL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwttC7Wf.js";import"./PdfViewerOutlineSidebar-DQt9Ws1F.js";import"./PdfViewerSidebarHeader-DK7TMyfJ.js";import"./useBaseUiId-BUiHaz06.js";import"./useControlled-Bt8EGKOL.js";import"./CompositeRoot-Z_6GA2fb.js";import"./CompositeItem-C9Gcac0L.js";import"./ToolbarRootContext-C82BKwEN.js";import"./composite-D8rImhTM.js";import"./svgIconContainer-35gVlP3R.js";import"./PdfViewerSearchBar-D7PreEsC.js";import"./chevron-up-BpQZ0tTa.js";import"./chevron-down-DUVuPwR-.js";import"./cross-D0mP7iDn.js";import"./PdfViewerSidebar-wAquqy0H.js";import"./index-BXq-WXuD.js";import"./index-BrXRE2qO.js";import"./index-BDCmNH8P.js";import"./PdfViewerToolbar-C2UhJNGG.js";import"./Button-DnykwL8H.js";import"./chevron-right-sOIJq23n.js";import"./Input-m_AxZLGF.js";import"./search-qHcMc9Tr.js";import"./spin-CHGOOz2G.js";import"./error-Bxa2zWko.js";import"./withOsdkMetrics-Bf2OGc1w.js";import"./makeExternalStore-t5wmtFvn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
