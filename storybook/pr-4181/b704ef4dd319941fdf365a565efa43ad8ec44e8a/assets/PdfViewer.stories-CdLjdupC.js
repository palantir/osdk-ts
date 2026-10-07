import{j as r,M as s}from"./iframe-N69vsxs5.js";import{P as p}from"./pdf-viewer-DyVddJ-c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B85JTFgY.js";import"./preload-helper-DK0eU9jP.js";import"./PdfViewer-CGmuCc_R.js";import"./index-DFVx6FW1.js";import"./BasePdfViewer-C8AiFFvy.js";import"./BasePdfViewer.module.css-DVMFDAu-.js";import"./PdfViewerAnnotationLayer-B0hjtMFV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW8VGq8Z.js";import"./PdfViewerOutlineSidebar-BlSMxgUA.js";import"./PdfViewerSidebarHeader-Uvz7J3Vv.js";import"./useBaseUiId-BOlvpNsK.js";import"./useControlled-HSJHWmyV.js";import"./CompositeRoot-CB-vBuO1.js";import"./CompositeItem-zsosIukW.js";import"./ToolbarRootContext-DAvYZo9n.js";import"./composite-DlZg84y_.js";import"./svgIconContainer-DHGJTaRH.js";import"./PdfViewerSearchBar-CYCU2JCW.js";import"./chevron-up-hi0T1DAo.js";import"./chevron-down-I26OMj3W.js";import"./cross-BdjHCXJd.js";import"./PdfViewerSidebar-Bse4BAU_.js";import"./index-BLwokh6k.js";import"./index-CshN8TfA.js";import"./index-CmUIsfdi.js";import"./PdfViewerToolbar-v6WZ2YqT.js";import"./Button-KvR9mvY1.js";import"./chevron-right-Bo-L9SYg.js";import"./Input-DVgfJ9ud.js";import"./search-DHKYFAa1.js";import"./spin-DpbdavgV.js";import"./error-vgCxf202.js";import"./withOsdkMetrics-D0jHdLVm.js";import"./makeExternalStore-BlbjB80h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
