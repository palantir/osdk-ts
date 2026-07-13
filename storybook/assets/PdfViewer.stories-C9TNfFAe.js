import{j as r,M as s}from"./iframe-BxCJPCse.js";import{P as p}from"./pdf-viewer-DN_Fnxau.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Nl7_Mpu4.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-M0LQRHkg.js";import"./index-bqr75Rsj.js";import"./PdfViewer-CFHsx9_x.js";import"./PdfViewer.module.css-BAppweAo.js";import"./PdfViewerAnnotationLayer-TJCTiTvw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IsH4P0tl.js";import"./PdfViewerOutlineSidebar-C31oGycq.js";import"./PdfViewerSidebarHeader-D3SCv0DR.js";import"./useBaseUiId-CutF0j3G.js";import"./useControlled-cr8WJ7fY.js";import"./CompositeRoot-eITCkvZN.js";import"./CompositeItem-BvA_CVeT.js";import"./ToolbarRootContext-CKb6Hebz.js";import"./composite-D6lyqV-H.js";import"./svgIconContainer-DgI3jQUV.js";import"./PdfViewerSearchBar-CsTfhsxA.js";import"./chevron-up-BZh214SL.js";import"./chevron-down-HCT0fjSD.js";import"./cross-DbAZfv-E.js";import"./PdfViewerSidebar-BWL-W2-2.js";import"./index-BiWWXAC7.js";import"./index-CgYvsxZG.js";import"./index-C3PJ5sQB.js";import"./PdfViewerToolbar-CYQ8PUao.js";import"./Button-BwE-cHBr.js";import"./chevron-right-BMlVFbWz.js";import"./Input-DVjajTyj.js";import"./search-CW9DG48n.js";import"./spin-CujrvVHt.js";import"./error-C43AB1o9.js";import"./withOsdkMetrics-BW629DVv.js";import"./makeExternalStore-BxoVsaDo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
