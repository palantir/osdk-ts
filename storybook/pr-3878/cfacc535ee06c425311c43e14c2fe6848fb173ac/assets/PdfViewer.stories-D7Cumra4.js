import{j as r,M as s}from"./iframe-DV_zKu2G.js";import{P as p}from"./pdf-viewer-Dn-icdiF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D76qmG07.js";import"./preload-helper-NfN-SgeO.js";import"./PdfViewer-KNp-av_m.js";import"./index-Dg4pCXXs.js";import"./BasePdfViewer-BQ7PShCs.js";import"./BasePdfViewer.module.css-ctQegrJL.js";import"./PdfViewerAnnotationLayer-C8LOgoir.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEU5DdKw.js";import"./PdfViewerOutlineSidebar-Ca-sy0AQ.js";import"./PdfViewerSidebarHeader-BcEs4BVi.js";import"./useBaseUiId-B5XoADBe.js";import"./useControlled-93X90FOH.js";import"./CompositeRoot-B0KjWhm9.js";import"./CompositeItem-CHs--B7N.js";import"./ToolbarRootContext-D3r4geEZ.js";import"./composite-DcSj9RrZ.js";import"./svgIconContainer-kLwaY0s0.js";import"./PdfViewerSearchBar-HLbSVi7b.js";import"./chevron-up-CXTvmrDk.js";import"./chevron-down-D7mWu-TA.js";import"./cross-APJrfIvW.js";import"./PdfViewerSidebar-qD7h_65i.js";import"./index-LNDJ7X8H.js";import"./index-Qh3Fcvsg.js";import"./index-CEG-DU55.js";import"./PdfViewerToolbar-DZNGCg2P.js";import"./Button-BVbWdILw.js";import"./chevron-right-BlKifVkk.js";import"./Input-DFXIqK_7.js";import"./search-DYE1hvQ2.js";import"./spin-CH0RxLzD.js";import"./error-DQ-loBpb.js";import"./withOsdkMetrics-B6P3j5oP.js";import"./makeExternalStore-CH15L2gT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
