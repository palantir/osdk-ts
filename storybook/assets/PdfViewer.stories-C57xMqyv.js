import{j as r,M as s}from"./iframe-DW0pXrl1.js";import{P as p}from"./pdf-viewer-Qg5z-PdA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bw-qz_79.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DyudXiTC.js";import"./index-DnR9sAsk.js";import"./BasePdfViewer-BhJiQfDM.js";import"./BasePdfViewer.module.css-Cd0X0fYn.js";import"./PdfViewerAnnotationLayer-lliSajIn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8BzBvPb-.js";import"./PdfViewerOutlineSidebar-KcAcjstD.js";import"./PdfViewerSidebarHeader-du9zqQ3d.js";import"./useBaseUiId-C-Q4_wXv.js";import"./useControlled-DHwMcBbK.js";import"./CompositeRoot-Dp3w4xhc.js";import"./CompositeItem-DTleMZzr.js";import"./ToolbarRootContext-Bl9OtRZB.js";import"./composite-xGDnWfXU.js";import"./svgIconContainer-ClnaI19G.js";import"./PdfViewerSearchBar-B-VxDVqi.js";import"./chevron-up-9GdUyghl.js";import"./chevron-down-DdU7H-NS.js";import"./cross-f1t5SerR.js";import"./PdfViewerSidebar-mn1qzkL9.js";import"./index-DL2Pb_FC.js";import"./index-Dqs-eX79.js";import"./index-CXBUMHcq.js";import"./PdfViewerToolbar-BU-K6tCO.js";import"./Button-LBvMHfI5.js";import"./chevron-right-CUhrnxQO.js";import"./Input-Bw5OahtG.js";import"./search-3LJjcIJ7.js";import"./spin-CsaVgVI7.js";import"./error-Dy3r5qvO.js";import"./withOsdkMetrics-DX22MNhQ.js";import"./makeExternalStore-D-CdOqwo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
