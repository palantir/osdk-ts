import{j as r,M as s}from"./iframe-BlpejkzI.js";import{P as p}from"./pdf-viewer-DlOzFYFV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-jU9HsaDQ.js";import"./preload-helper-BA1cUfXb.js";import"./PdfViewer-DQlbo7nQ.js";import"./index-CpPkHQnY.js";import"./BasePdfViewer-2a5q_V0D.js";import"./BasePdfViewer.module.css-C0ieKLzZ.js";import"./PdfViewerAnnotationLayer-EdpnraEz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cb70qDMl.js";import"./PdfViewerOutlineSidebar-Bs8l7L-3.js";import"./PdfViewerSidebarHeader-3Wylba5e.js";import"./useBaseUiId-BUVwvBQZ.js";import"./useControlled-CKCXNsan.js";import"./CompositeRoot-BXvNLTo-.js";import"./CompositeItem-D29vF932.js";import"./ToolbarRootContext-CBW-R_pU.js";import"./composite-CdbN3ck3.js";import"./svgIconContainer-aKnF_69u.js";import"./PdfViewerSearchBar-eVeMkufG.js";import"./chevron-up-BQHARJYX.js";import"./chevron-down-DDoBjNkd.js";import"./cross-DiWsYg3r.js";import"./PdfViewerSidebar-A5iVdhla.js";import"./index-CKx3u1TT.js";import"./index-BdLU453s.js";import"./index-DVMy9f1T.js";import"./PdfViewerToolbar-Dvc7v08u.js";import"./Button-DfGArVBU.js";import"./chevron-right-Cqfcqprb.js";import"./Input-eoJV0GlP.js";import"./search-IpDNvhGA.js";import"./spin-yHBaCXRI.js";import"./error-CNoirV31.js";import"./withOsdkMetrics-CHL30NBG.js";import"./makeExternalStore-CmmUlmnz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
