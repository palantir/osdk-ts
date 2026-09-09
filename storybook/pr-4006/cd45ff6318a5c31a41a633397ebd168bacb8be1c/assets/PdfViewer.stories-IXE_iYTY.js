import{j as r,M as s}from"./iframe-BUTeW6Ke.js";import{P as p}from"./pdf-viewer-BD723dSN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3zgf0vV.js";import"./preload-helper-CQT66xGm.js";import"./PdfViewer-BCuNxw3s.js";import"./index-D0KjrmAk.js";import"./BasePdfViewer-DLrvaoJz.js";import"./BasePdfViewer.module.css-BdV4TGLF.js";import"./PdfViewerAnnotationLayer-BB_KoNE4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yu6vzlqN.js";import"./PdfViewerOutlineSidebar-B34D32jA.js";import"./PdfViewerSidebarHeader-B0gdwR1c.js";import"./useBaseUiId-DKH5yAyq.js";import"./useControlled-BR0Jp6X7.js";import"./CompositeRoot-CFGeciRu.js";import"./CompositeItem-g-Qz-xCN.js";import"./ToolbarRootContext-ByyEnW8P.js";import"./composite-By0Jq-F3.js";import"./svgIconContainer-B9NI5uFH.js";import"./PdfViewerSearchBar-Dob-2fAP.js";import"./chevron-up-rKHD2hHk.js";import"./chevron-down-vn_j_zw5.js";import"./cross-DBYUdge9.js";import"./PdfViewerSidebar-Cs2AhfML.js";import"./index-CJvQAT9P.js";import"./index-BZYkF7jv.js";import"./index-CK156m23.js";import"./PdfViewerToolbar-qnt260Sm.js";import"./Button-B9aFxizM.js";import"./chevron-right-PioYKfW1.js";import"./Input-DMsfofkB.js";import"./search-B5UpA2gd.js";import"./spin-DYr6MHHK.js";import"./error-CJcI6CJg.js";import"./withOsdkMetrics-Dgk1QvO0.js";import"./makeExternalStore-DsqUkO_T.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
