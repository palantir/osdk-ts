import{j as r,M as s}from"./iframe-DFSfQ_aP.js";import{P as p}from"./pdf-viewer-CWPuAzug.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLELN61r.js";import"./preload-helper-DJLQJiWb.js";import"./PdfViewer-DGNAhRHL.js";import"./index-CHPYvPwX.js";import"./BasePdfViewer-DANLq-Y5.js";import"./BasePdfViewer.module.css-DaKqEiiP.js";import"./PdfViewerAnnotationLayer-CRWL-sf2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqaBYt1E.js";import"./PdfViewerOutlineSidebar-CqhB8rsV.js";import"./PdfViewerSidebarHeader-saPAF-s_.js";import"./useBaseUiId-DCyghABl.js";import"./useControlled-DXWD0Znz.js";import"./CompositeRoot-CgZWLN7d.js";import"./CompositeItem-CyzwHVke.js";import"./ToolbarRootContext-BpJBwGb-.js";import"./composite-BX_h9XZf.js";import"./svgIconContainer-BpYc0jTS.js";import"./PdfViewerSearchBar-mSwIoFzZ.js";import"./chevron-up-JLfL1A1a.js";import"./chevron-down-D8HcwDY0.js";import"./cross-Ce3cqE51.js";import"./PdfViewerSidebar-CEE6kbFx.js";import"./index-CdSacirl.js";import"./index-CQjeWbkR.js";import"./index-ASrgrlRW.js";import"./PdfViewerToolbar-D1OSYuVB.js";import"./Button-BpGPHejG.js";import"./chevron-right-ituaQkKi.js";import"./Input-B4nqbncu.js";import"./search-HIhGbyYm.js";import"./spin-Bayd9U-f.js";import"./error-D7U43ngn.js";import"./withOsdkMetrics-CFtGdwbh.js";import"./makeExternalStore-DeP1q7OZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
