import{j as r,M as s}from"./iframe-Cu9w7jcH.js";import{P as p}from"./pdf-viewer-DcsqmhaC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D9_lAcj5.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DWawvvuR.js";import"./index-CISo5zfR.js";import"./BasePdfViewer-J4_lwmvX.js";import"./BasePdfViewer.module.css-DgdXE8Of.js";import"./PdfViewerAnnotationLayer-C6U8PSGa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DowkiOxC.js";import"./PdfViewerOutlineSidebar--bVsBI80.js";import"./PdfViewerSidebarHeader-czKqvPea.js";import"./useBaseUiId-BjT3tUdU.js";import"./useControlled-8gLzMwC4.js";import"./CompositeRoot-c0ezdUcI.js";import"./CompositeItem-kmbcRbAD.js";import"./ToolbarRootContext-TnMpdXUN.js";import"./composite-CQfO24RT.js";import"./svgIconContainer-Dw0CoQx7.js";import"./PdfViewerSearchBar-CLmbFWiz.js";import"./chevron-up-DOEdmH9i.js";import"./chevron-down-C5muOK6K.js";import"./cross-B8KHmrzZ.js";import"./PdfViewerSidebar-CGXQOjs-.js";import"./index-DkVw3DhA.js";import"./index-D8iZ8WU_.js";import"./index-DiQpPnIR.js";import"./PdfViewerToolbar-CINuZgNq.js";import"./Button-D273o8ES.js";import"./chevron-right-D4M3mz-U.js";import"./Input-B4v38P0N.js";import"./search-BN3GL8EC.js";import"./spin-Ct_CFEgo.js";import"./error-DCGe0X_V.js";import"./withOsdkMetrics-DguEd9bl.js";import"./makeExternalStore-ChDoBLQb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
