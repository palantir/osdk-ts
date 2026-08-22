import{j as r,M as s}from"./iframe-1EZc9Vvz.js";import{P as p}from"./pdf-viewer-DlS-KTNq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BG5DXjA_.js";import"./preload-helper-CLuirsTV.js";import"./PdfViewer-kDkxWLH3.js";import"./index-BNjxneHe.js";import"./BasePdfViewer-De-yHgSn.js";import"./BasePdfViewer.module.css-DD6poP-H.js";import"./PdfViewerAnnotationLayer-5G6saI3A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5uRFdMF.js";import"./PdfViewerOutlineSidebar-DjR6J-M0.js";import"./PdfViewerSidebarHeader-DHt-zb1B.js";import"./useBaseUiId-C0l4a2Ks.js";import"./useControlled-B4wso0gz.js";import"./CompositeRoot-D64W_oDC.js";import"./CompositeItem-BEhpKQGd.js";import"./ToolbarRootContext-Dy97HIXP.js";import"./composite-DZuvf2CH.js";import"./svgIconContainer-DddMQ667.js";import"./PdfViewerSearchBar-BEmgqrg3.js";import"./chevron-up-68mvoABs.js";import"./chevron-down-x8-eEnGm.js";import"./cross-D233-9JU.js";import"./PdfViewerSidebar-DDM6ndMw.js";import"./index-yOGSpXNC.js";import"./index-wo0YcWBb.js";import"./index-GxQ4mgfe.js";import"./PdfViewerToolbar-DpoTCQ83.js";import"./Button-CyGBEuY5.js";import"./chevron-right-BlWT-mVD.js";import"./Input-CfmhHq2c.js";import"./search-B7Z28YY3.js";import"./spin-4ur490XX.js";import"./error-DEyOyWdk.js";import"./withOsdkMetrics-4lDw3Mk4.js";import"./makeExternalStore-QJC4cEbR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
