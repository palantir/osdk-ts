import{j as r,M as s}from"./iframe-D6fPZnqe.js";import{P as p}from"./pdf-viewer-BcrZSl2q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BH48oAn0.js";import"./preload-helper-CBKbTLo4.js";import"./PdfViewer-vgUnf2nt.js";import"./index-DhSFErPm.js";import"./BasePdfViewer-CZY5FjLQ.js";import"./BasePdfViewer.module.css-DkLU7pNR.js";import"./PdfViewerAnnotationLayer-CUPzH_GM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qMdB4Pju.js";import"./PdfViewerOutlineSidebar-x-UKADSY.js";import"./PdfViewerSidebarHeader-KUeXVipo.js";import"./useBaseUiId-D4NDHa5t.js";import"./useControlled-iYay2yJT.js";import"./CompositeRoot-TqhddMsK.js";import"./CompositeItem--v0QRyqL.js";import"./ToolbarRootContext-DyAqKFWo.js";import"./composite-Be4p-4ws.js";import"./svgIconContainer-DubCep_u.js";import"./PdfViewerSearchBar-dmOtz89K.js";import"./chevron-up-BAHETOHn.js";import"./chevron-down-ClCJem65.js";import"./cross-9F8JKEQy.js";import"./PdfViewerSidebar-DcLIdP_4.js";import"./index-CB6cfHnU.js";import"./index-DAhymAav.js";import"./index-D-Gucmtt.js";import"./PdfViewerToolbar-D8x5KbHe.js";import"./Button-BLxStAZZ.js";import"./chevron-right-B-NpgR8Z.js";import"./Input-DoNUyN0C.js";import"./search-j5vkqq1q.js";import"./spin-BUP1hrMd.js";import"./error-1a5mXdNM.js";import"./withOsdkMetrics-IqNfL-7w.js";import"./makeExternalStore-DTY2ua9-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
