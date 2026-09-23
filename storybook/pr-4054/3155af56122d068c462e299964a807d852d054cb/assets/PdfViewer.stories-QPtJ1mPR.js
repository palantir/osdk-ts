import{j as r,M as s}from"./iframe-BUT1Ca21.js";import{P as p}from"./pdf-viewer-Wi6bSAml.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DKZAnRGX.js";import"./preload-helper-C3ZTbeOG.js";import"./PdfViewer-DR6oqmL7.js";import"./index-CEgKTB7y.js";import"./BasePdfViewer-CAP7Cm3k.js";import"./BasePdfViewer.module.css-CaZYJWO4.js";import"./PdfViewerAnnotationLayer-DtCp7-hG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNihXOnl.js";import"./PdfViewerOutlineSidebar-De8ojRn0.js";import"./PdfViewerSidebarHeader-MfppYakA.js";import"./useBaseUiId-qyGuXCWk.js";import"./useControlled-MxpDrEQu.js";import"./CompositeRoot-QpWKJl8e.js";import"./CompositeItem-Bsqpxv5d.js";import"./ToolbarRootContext-Cefa8MxM.js";import"./composite-CfgLMjRu.js";import"./svgIconContainer-Bompvmw_.js";import"./PdfViewerSearchBar-DsizWUhG.js";import"./chevron-up-B-vwqMPP.js";import"./chevron-down-DwUo7lxb.js";import"./cross-Cr9ZjHRZ.js";import"./PdfViewerSidebar-D9ORgn06.js";import"./index-DDeQtpyk.js";import"./index-BKX7kSRn.js";import"./index-Cxye_Vbl.js";import"./PdfViewerToolbar-BljT5gHt.js";import"./Button-jhXvjlOf.js";import"./chevron-right-CDhp0icM.js";import"./Input-VfpuHGrG.js";import"./search-wRZY1Zgd.js";import"./spin-CzpCM7IW.js";import"./error-C95PtJNd.js";import"./withOsdkMetrics-CRAr1v2v.js";import"./makeExternalStore-BZeEFOui.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
