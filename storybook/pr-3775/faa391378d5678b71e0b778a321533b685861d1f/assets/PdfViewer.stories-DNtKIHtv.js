import{j as r,M as s}from"./iframe-DiGNclSn.js";import{P as p}from"./pdf-viewer-CZuukLGQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcbPy44h.js";import"./preload-helper-_nBZMF1N.js";import"./PdfRenderer-TmpgatCU.js";import"./index-DPWCSEHO.js";import"./PdfViewer-DrFXiok5.js";import"./PdfViewer.module.css-BdTCF8yD.js";import"./PdfViewerAnnotationLayer-DzcVsXuC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Chp7Pbze.js";import"./PdfViewerOutlineSidebar-BbuzHCkb.js";import"./PdfViewerSidebarHeader-ScRtMylB.js";import"./useBaseUiId-D12Lp3G0.js";import"./useControlled-BPiHfNKi.js";import"./CompositeRoot-Bi2EiiJj.js";import"./CompositeItem-BIK6e8lr.js";import"./ToolbarRootContext-CEQ97Tgl.js";import"./composite-DkuYOO8L.js";import"./svgIconContainer-BxPJUld6.js";import"./PdfViewerSearchBar-CcHZwM96.js";import"./chevron-up-BhR-dtbY.js";import"./chevron-down-DGDtildZ.js";import"./cross-CbAhiqWN.js";import"./PdfViewerSidebar-DFGoNu_f.js";import"./index-BeDKwvOI.js";import"./index-bfAA9M0x.js";import"./index-DBnYr8W-.js";import"./PdfViewerToolbar-j3MFGHI1.js";import"./Button-ByuxmoUQ.js";import"./chevron-right-8BIeQYvI.js";import"./Input-CGFWWoCB.js";import"./search-CgbFJOiA.js";import"./spin-saLjtN_1.js";import"./error-rMD5wQqr.js";import"./withOsdkMetrics-DSL5Vxy9.js";import"./makeExternalStore-Bv-o0CiQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
