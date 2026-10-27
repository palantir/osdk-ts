import{j as r,M as s}from"./iframe-C4dizZ36.js";import{P as p}from"./pdf-viewer-DfuTOgRn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B1y8__vS.js";import"./preload-helper-yVPvR8z3.js";import"./PdfViewer-DMhtttdZ.js";import"./index-CFT7unnD.js";import"./BasePdfViewer-9_XcJIGe.js";import"./BasePdfViewer.module.css-CvfPPs4r.js";import"./PdfViewerAnnotationLayer-CD8dPDyX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJTbah7Z.js";import"./PdfViewerOutlineSidebar-D7xzCOnb.js";import"./PdfViewerSidebarHeader-XloMMd9O.js";import"./useBaseUiId-k_5E4sc5.js";import"./useControlled-CUKEEG6I.js";import"./CompositeRoot-Ca7fO5C3.js";import"./CompositeItem-Deat6XJ7.js";import"./ToolbarRootContext-cilGYW-z.js";import"./composite-BKXJ61hE.js";import"./svgIconContainer-DfcgCVjr.js";import"./PdfViewerSearchBar-ChI2ripZ.js";import"./chevron-up-1nGzqBay.js";import"./chevron-down-B_DWNPfU.js";import"./cross-drbNV1T7.js";import"./PdfViewerSidebar-DEJbgRrc.js";import"./index-C5-B81cJ.js";import"./index-CTCpbOLj.js";import"./index-BMu-FTMn.js";import"./PdfViewerToolbar-O_NrbPV5.js";import"./Button-B3WKdDfx.js";import"./chevron-right-CPOanG-V.js";import"./Input-DPBssrp3.js";import"./search-D-SP9Yj6.js";import"./spin-Ca55JF73.js";import"./error-j1AChp6N.js";import"./withOsdkMetrics-CrG5BOev.js";import"./makeExternalStore-BsFJZbFX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
