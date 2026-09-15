import{j as r,M as s}from"./iframe-DA9dclNV.js";import{P as p}from"./pdf-viewer-BKhcI8Cn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Z2VSLf4o.js";import"./preload-helper-Bx64lG7g.js";import"./PdfViewer-DyWKUIiz.js";import"./index-kn43Hsx3.js";import"./BasePdfViewer-CdhIrb2l.js";import"./BasePdfViewer.module.css-DuhMVUIg.js";import"./PdfViewerAnnotationLayer-B7zn7HcE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJbpcmpH.js";import"./PdfViewerOutlineSidebar-1BeOCQeJ.js";import"./PdfViewerSidebarHeader-D4EMOmXv.js";import"./useBaseUiId-_qFsZVnk.js";import"./useControlled-DOm30eCY.js";import"./CompositeRoot-BFBFdgV-.js";import"./CompositeItem-21cMzz5_.js";import"./ToolbarRootContext-tV_1SIt_.js";import"./composite-CayJIHWq.js";import"./svgIconContainer-CdmY4bEV.js";import"./PdfViewerSearchBar-6SdHenZH.js";import"./chevron-up-B_EGX8fz.js";import"./chevron-down-DC0K_Daw.js";import"./cross-Db3CMctj.js";import"./PdfViewerSidebar-t2DoJ0xZ.js";import"./index-Bz8vlsKZ.js";import"./index-ByvNBIsG.js";import"./index-DkDw_XlI.js";import"./PdfViewerToolbar-CDdZOWnA.js";import"./Button-6VSTuqQC.js";import"./chevron-right-YLRJPR-9.js";import"./Input-xbm-V7-x.js";import"./search-CsCC8gU7.js";import"./spin-BDe7jkhf.js";import"./error-DHS0vKCT.js";import"./withOsdkMetrics-BeJRVpQP.js";import"./makeExternalStore-BYx66Bfu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
