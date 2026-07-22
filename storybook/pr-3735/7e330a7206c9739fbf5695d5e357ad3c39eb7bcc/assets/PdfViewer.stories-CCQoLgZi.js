import{j as r,M as s}from"./iframe-BpkgzCfc.js";import{P as p}from"./pdf-viewer-eypnW5OQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7HjJNG6.js";import"./preload-helper-Cqm3GHv6.js";import"./PdfRenderer-CnASC7mO.js";import"./index-BaNgrIWR.js";import"./PdfViewer-CGnfNmAV.js";import"./PdfViewer.module.css-DF9CHNgh.js";import"./PdfViewerAnnotationLayer-MDfCzhpj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--Bgv6SCt.js";import"./PdfViewerOutlineSidebar-5doLgm-S.js";import"./PdfViewerSidebarHeader-CgH-Bz3O.js";import"./useBaseUiId-Bel2T9sH.js";import"./useControlled-DcPMMtt3.js";import"./CompositeRoot-irPWSQIR.js";import"./CompositeItem-BB4wd3KB.js";import"./ToolbarRootContext-D12ftYYQ.js";import"./composite-BYRdjqNf.js";import"./svgIconContainer-DCGfkszH.js";import"./PdfViewerSearchBar-CfuSDfAO.js";import"./chevron-up-DW1WsWXe.js";import"./chevron-down-D90rIeDb.js";import"./cross-DcAJ_UsT.js";import"./PdfViewerSidebar-CFYrGEY8.js";import"./index-9JJ3q_YT.js";import"./index-DUW9BvxD.js";import"./index-DxpCt63I.js";import"./PdfViewerToolbar-C5P80a8l.js";import"./Button-CySInDHm.js";import"./chevron-right-rtFSWsyC.js";import"./Input-CsKIZdEL.js";import"./search-Ct51ibPI.js";import"./spin-BuyuWS6p.js";import"./error-BPGwzs_y.js";import"./withOsdkMetrics-jMVnEM0t.js";import"./makeExternalStore-BY7Bi3ZC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
