import{j as r,M as s}from"./iframe-Dxf7pqeg.js";import{P as p}from"./pdf-viewer-CaMFh6Zn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DUmnYl2G.js";import"./preload-helper-CF9q8wC-.js";import"./PdfViewer-D35V_ROI.js";import"./index-wDaQCgfa.js";import"./BasePdfViewer-64Xp-_zF.js";import"./BasePdfViewer.module.css-QODdC3mn.js";import"./PdfViewerAnnotationLayer-_Z6noYCf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5AHzc5Vr.js";import"./PdfViewerOutlineSidebar-DLMzZkHa.js";import"./PdfViewerSidebarHeader-BruW00tv.js";import"./useBaseUiId-DVv5YeQ_.js";import"./useControlled-COWGSBWf.js";import"./CompositeRoot-Dg3o0s8n.js";import"./CompositeItem-DXqXcqtg.js";import"./ToolbarRootContext-DwNvvDcu.js";import"./composite-DX7eZJ2_.js";import"./svgIconContainer-DeyZ4zWj.js";import"./PdfViewerSearchBar-BmfKJo8B.js";import"./chevron-up-BDJsVBdV.js";import"./chevron-down-CeBUa0jW.js";import"./cross-jA7YlUXs.js";import"./PdfViewerSidebar-DRdqdGht.js";import"./index-COpT5bPe.js";import"./index-6J7TyXcf.js";import"./index-BoUI8uiT.js";import"./PdfViewerToolbar-eZCVB5ws.js";import"./Button-C2uuxQ9H.js";import"./chevron-right-D2CGRN9X.js";import"./Input-B-AK0ISA.js";import"./search-n-Z5MtR9.js";import"./spin-DcpfHUk-.js";import"./error-LTA79L0B.js";import"./withOsdkMetrics-BVzotg80.js";import"./makeExternalStore-B474c-YK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
