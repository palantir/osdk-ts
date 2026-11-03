import{j as r,M as s}from"./iframe-B6Lta6LP.js";import{P as p}from"./pdf-viewer-BsdhlH8J.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4aWYqqo.js";import"./preload-helper-CYbl2xdJ.js";import"./PdfViewer-i-DVDRy-.js";import"./index-tKxTuoVH.js";import"./BasePdfViewer-D2ASXuJC.js";import"./BasePdfViewer.module.css-BZmLb9Y2.js";import"./PdfViewerAnnotationLayer-BzqJNbx6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-r2hm1M3S.js";import"./PdfViewerOutlineSidebar-DLTdnx0K.js";import"./PdfViewerSidebarHeader-C_SWyVQE.js";import"./useBaseUiId-LeTLb_RS.js";import"./useControlled-Db4l5j0n.js";import"./CompositeRoot-CylVPm1T.js";import"./CompositeItem-aYCSoUde.js";import"./ToolbarRootContext-BwcsMBBX.js";import"./composite-CXu030fZ.js";import"./svgIconContainer-DPd9W8TR.js";import"./PdfViewerSearchBar-Boc4GAmf.js";import"./chevron-up-E3328gzw.js";import"./chevron-down-DP_Haie7.js";import"./cross-CAJFEHXr.js";import"./PdfViewerSidebar-CwQDMkcY.js";import"./index-BIznb_cm.js";import"./index-DW8Y-83r.js";import"./index-C1Xd9eEP.js";import"./PdfViewerToolbar-BFofH22h.js";import"./Button-CDP0EtTw.js";import"./chevron-right-DjMcvmts.js";import"./Input-CNTN6kGr.js";import"./search-CJ2Z9OiI.js";import"./spin-BOgMu4ge.js";import"./error-B_rV--z6.js";import"./withOsdkMetrics-D256mKJK.js";import"./makeExternalStore-BxbrneS1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
