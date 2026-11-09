import{j as r,M as s}from"./iframe-DJkts_RL.js";import{P as p}from"./pdf-viewer-DQmNIR12.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DeOXLN04.js";import"./preload-helper-DnSYvyfS.js";import"./PdfViewer-DSWtwz3t.js";import"./index-AdNwtOlb.js";import"./BasePdfViewer-DfpMpcJH.js";import"./BasePdfViewer.module.css-C9gbLd-R.js";import"./PdfViewerAnnotationLayer-u-TvjlNt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMJ8Dkd4.js";import"./PdfViewerOutlineSidebar-axeCFqOk.js";import"./PdfViewerSidebarHeader-X88zEO42.js";import"./useBaseUiId-BOJH0vIf.js";import"./useControlled-DasQvtmr.js";import"./CompositeRoot-BNjk1aB_.js";import"./CompositeItem-LGAP8V9B.js";import"./ToolbarRootContext-DzjIN-OH.js";import"./composite-DDvCjav2.js";import"./svgIconContainer-C5-52KFN.js";import"./PdfViewerSearchBar-Bg2K-fRK.js";import"./chevron-up-Dt9C6iT2.js";import"./chevron-down-DB2rAp0-.js";import"./cross-RIukJOv6.js";import"./PdfViewerSidebar-53RxUY7s.js";import"./index-CUwadNBX.js";import"./index-Ci2eYgLO.js";import"./index-BDcDuz1j.js";import"./PdfViewerToolbar-DohNvK_s.js";import"./Button-sRivSwhn.js";import"./chevron-right-BecZkcJ7.js";import"./Input-FCTts1k3.js";import"./search-_QUQf3i5.js";import"./spin-BNzYKITW.js";import"./error-BqILnzwq.js";import"./withOsdkMetrics-BoDHZnfJ.js";import"./makeExternalStore-phk9_3eu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
