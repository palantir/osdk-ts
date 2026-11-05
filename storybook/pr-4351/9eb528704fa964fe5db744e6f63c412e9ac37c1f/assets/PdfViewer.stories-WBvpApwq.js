import{j as r,M as s}from"./iframe-CCpQdKcM.js";import{P as p}from"./pdf-viewer-C0_WgfdT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BkpVC621.js";import"./preload-helper-BcC5NClT.js";import"./PdfViewer-CBSTEAOQ.js";import"./index-D5kRSGTL.js";import"./BasePdfViewer-C7fn9YDZ.js";import"./BasePdfViewer.module.css-8TFVl1P6.js";import"./PdfViewerAnnotationLayer-CspMzvd7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-zbTtYI.js";import"./PdfViewerOutlineSidebar-BmVQHcCh.js";import"./PdfViewerSidebarHeader-Ds4Kzj34.js";import"./useBaseUiId-wkrh1dan.js";import"./useControlled-D4_I-zYv.js";import"./CompositeRoot-BWhClFhh.js";import"./CompositeItem-BtN-TT4o.js";import"./ToolbarRootContext-Dxu4wH7j.js";import"./composite-BPsF8oXT.js";import"./svgIconContainer-D0YWtwPv.js";import"./PdfViewerSearchBar-CX3KJEp3.js";import"./chevron-up-Bo7oYQlf.js";import"./chevron-down-DF5kUyWB.js";import"./cross-BC47wddT.js";import"./PdfViewerSidebar-xYtrhT2Q.js";import"./index-BLKb_bgJ.js";import"./index-vQ0gYfTZ.js";import"./index-Da9G4TOJ.js";import"./PdfViewerToolbar-DOiQ2l5L.js";import"./Button-B4X_MUbo.js";import"./chevron-right-B94sqA6D.js";import"./Input-DqLoo56V.js";import"./search-Bo8XWJqp.js";import"./spin-GpolyT64.js";import"./error-CnylztP4.js";import"./withOsdkMetrics-Kob29Pb2.js";import"./makeExternalStore-CdAfQAQ3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
