import{j as r,M as s}from"./iframe-SRdlKq9b.js";import{P as p}from"./pdf-viewer-DuFV4z0r.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bcet8UP-.js";import"./preload-helper-s1eLnSv0.js";import"./PdfViewer-DQldBKp3.js";import"./index-DD8FCudr.js";import"./BasePdfViewer-BhfeoGSs.js";import"./BasePdfViewer.module.css-B8A7Xds1.js";import"./PdfViewerAnnotationLayer-twjzebzv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKYnqjXf.js";import"./PdfViewerOutlineSidebar-DhV-Ve98.js";import"./PdfViewerSidebarHeader-BFzfDn3u.js";import"./useBaseUiId-B4J9k2RX.js";import"./useControlled-wCYPw1x7.js";import"./CompositeRoot-ClqTf6kG.js";import"./CompositeItem-CxO1LzKy.js";import"./ToolbarRootContext-D6KNZ6Ak.js";import"./composite-CZ2o_96f.js";import"./svgIconContainer-BcXM3VSp.js";import"./PdfViewerSearchBar-XS1QV7nY.js";import"./chevron-up-C59nTuy_.js";import"./chevron-down--GHDODIE.js";import"./cross-CXZKrh1h.js";import"./PdfViewerSidebar-Ba1Waymu.js";import"./index-DhMuGg7E.js";import"./index-B4jPuaLR.js";import"./index-Dji29e1U.js";import"./PdfViewerToolbar-Bwh3Dry4.js";import"./Button-D5IcZbYw.js";import"./chevron-right-BIg0iFRe.js";import"./Input-DAJATtsq.js";import"./search-BIvi-2TY.js";import"./spin-DaDhDvcd.js";import"./error-DFAQrfbx.js";import"./withOsdkMetrics-jgsXWTD0.js";import"./makeExternalStore-gzodh6iV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
