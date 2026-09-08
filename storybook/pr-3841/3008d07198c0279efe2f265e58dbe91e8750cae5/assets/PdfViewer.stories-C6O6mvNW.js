import{j as r,M as s}from"./iframe-D-uQiAEU.js";import{P as p}from"./pdf-viewer-JECBRZwT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-tcBRSHBZ.js";import"./preload-helper-p4UgLAci.js";import"./PdfViewer-BitSSH--.js";import"./index-BAcJFtsj.js";import"./BasePdfViewer-DEZteKVq.js";import"./BasePdfViewer.module.css-Bmm1WLWo.js";import"./PdfViewerAnnotationLayer-JLEGaNl3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiwFsPfU.js";import"./PdfViewerOutlineSidebar-B1woPrxn.js";import"./PdfViewerSidebarHeader-Bzs9kijr.js";import"./useBaseUiId-ChN6vCz4.js";import"./useControlled-CCwQc26W.js";import"./CompositeRoot-B5ftoauG.js";import"./CompositeItem-gF6WPsof.js";import"./ToolbarRootContext-DCPVbVwA.js";import"./composite-DTJJNp0D.js";import"./svgIconContainer-BwquE4X7.js";import"./PdfViewerSearchBar-DjQW7NOB.js";import"./chevron-up-CHHQGUfp.js";import"./chevron-down-BwXU5HA0.js";import"./cross-Cxa7qZ4s.js";import"./PdfViewerSidebar-_N1_d2H5.js";import"./index-C2SgD6rg.js";import"./index-BoPOR_G0.js";import"./index-TpgQ4q1W.js";import"./PdfViewerToolbar-6v26Vzfj.js";import"./Button-DI6776iG.js";import"./chevron-right-Mnm-VRsL.js";import"./Input-DgsAa7tc.js";import"./search-C_-XZuxq.js";import"./spin-CLWPb3W8.js";import"./error-CnFMhHrw.js";import"./withOsdkMetrics-DnhB_JkA.js";import"./makeExternalStore-BRy1NQ_S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
