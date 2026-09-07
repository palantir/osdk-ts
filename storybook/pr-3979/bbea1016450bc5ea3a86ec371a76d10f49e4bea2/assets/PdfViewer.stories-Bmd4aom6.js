import{j as r,M as s}from"./iframe-AuAaB4HI.js";import{P as p}from"./pdf-viewer-oqT_DTmi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B3DH0xqx.js";import"./preload-helper-qH-vyE7r.js";import"./PdfViewer-D38MJ3DM.js";import"./index-BKkpZaGC.js";import"./BasePdfViewer-Crct94kb.js";import"./BasePdfViewer.module.css-I6pQnB1x.js";import"./PdfViewerAnnotationLayer-D4HNKEyF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-p-W3LzTa.js";import"./PdfViewerOutlineSidebar-BCCUjWfK.js";import"./PdfViewerSidebarHeader-CcvHu8kt.js";import"./useBaseUiId-C8uvXzmq.js";import"./useControlled-D-wnjZuk.js";import"./CompositeRoot-DXAEUa84.js";import"./CompositeItem-BPZ7rSFH.js";import"./ToolbarRootContext-CDLutxqH.js";import"./composite-OHdH01L1.js";import"./svgIconContainer-CNBq2Qvc.js";import"./PdfViewerSearchBar-CluAHv6K.js";import"./chevron-up-D1GauO-V.js";import"./chevron-down-C-dLVWDH.js";import"./cross-B_t7xRmp.js";import"./PdfViewerSidebar-BQUz7isf.js";import"./index-fbOZd30r.js";import"./index-De6CDc-m.js";import"./index-BGK8CIIz.js";import"./PdfViewerToolbar-CwNxZwZi.js";import"./Button-BkBIeHIG.js";import"./chevron-right-CCbEWXEY.js";import"./Input-DkM5HnnT.js";import"./search-MZDtJj7T.js";import"./spin-CVMehRcU.js";import"./error-CZom1ueN.js";import"./withOsdkMetrics-ChC8Do0m.js";import"./makeExternalStore-BZZHokGM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
