import{j as r,M as s}from"./iframe-DjbWNQ0f.js";import{P as p}from"./pdf-viewer-P3w12Uze.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-tAbKYe2x.js";import"./preload-helper-DZqHfMjf.js";import"./PdfViewer-DuJBEpma.js";import"./index-DRSVy1id.js";import"./BasePdfViewer-DWvIy_Ri.js";import"./BasePdfViewer.module.css-BnKhx7QB.js";import"./PdfViewerAnnotationLayer-COW1kgtZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzUjZByU.js";import"./PdfViewerOutlineSidebar-Z49yvdgc.js";import"./PdfViewerSidebarHeader-CTx62pbX.js";import"./useBaseUiId-CQ0aFnKR.js";import"./useControlled-CdWNY0zK.js";import"./CompositeRoot-BgWIqctS.js";import"./CompositeItem-BSe1aJMv.js";import"./ToolbarRootContext-DHwz-r64.js";import"./composite-ChJITrYk.js";import"./svgIconContainer-DpceGvSJ.js";import"./PdfViewerSearchBar-CxA1x5Tt.js";import"./chevron-up-B7Sg9fTM.js";import"./chevron-down-Dn4fSYZt.js";import"./cross-Cqp-lwuB.js";import"./PdfViewerSidebar-C7psJAkP.js";import"./index-C8Z34pPC.js";import"./index-B_S3CqUO.js";import"./index-CT8ZI4c8.js";import"./PdfViewerToolbar-Ddvyez--.js";import"./Button-DMt4PyPT.js";import"./chevron-right-CFN_9vZb.js";import"./Input-qPpH6qdj.js";import"./search-Cp6KPEc7.js";import"./spin-DOmUFS4M.js";import"./error-DBRIaq9T.js";import"./withOsdkMetrics-DMIQgg40.js";import"./makeExternalStore-BTX3xjPy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
