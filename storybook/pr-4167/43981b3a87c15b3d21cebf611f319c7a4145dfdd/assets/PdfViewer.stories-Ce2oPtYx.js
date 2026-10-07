import{j as r,M as s}from"./iframe-Dsupwakr.js";import{P as p}from"./pdf-viewer-CHnk3nkD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4OmAQ4g.js";import"./preload-helper-CR7mXLCL.js";import"./PdfViewer-C249SxJX.js";import"./index-CkpgR3fu.js";import"./BasePdfViewer-Dl7qt72L.js";import"./BasePdfViewer.module.css-Cl5p0cjK.js";import"./PdfViewerAnnotationLayer-Ba2Z0Fb4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-m6xiEz5E.js";import"./PdfViewerOutlineSidebar-CpHSWZcz.js";import"./PdfViewerSidebarHeader-CaKuvT3H.js";import"./useBaseUiId-DzCfcDkQ.js";import"./useControlled-CqadE3GD.js";import"./CompositeRoot-AbTQ-SnI.js";import"./CompositeItem-B9L7nJBI.js";import"./ToolbarRootContext-BtvPE-us.js";import"./composite-HdCWnL8f.js";import"./svgIconContainer-C-Aw8Ccc.js";import"./PdfViewerSearchBar-C_00UvSo.js";import"./chevron-up-CVk7Qd1e.js";import"./chevron-down-CDVIUa1b.js";import"./cross-CWb-HvPA.js";import"./PdfViewerSidebar-CpaglXf1.js";import"./index-J7JFMYQD.js";import"./index-B_g_AMfh.js";import"./index-ChctX4zI.js";import"./PdfViewerToolbar-B9-pIVRZ.js";import"./Button-D1tcxnZe.js";import"./chevron-right-BJuzsk5N.js";import"./Input-C5vpLtnd.js";import"./search-B3WEXmh0.js";import"./spin-DREUdLDX.js";import"./error-CLndc-8a.js";import"./withOsdkMetrics-Chrjv6Bf.js";import"./makeExternalStore-cmPwX49q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
