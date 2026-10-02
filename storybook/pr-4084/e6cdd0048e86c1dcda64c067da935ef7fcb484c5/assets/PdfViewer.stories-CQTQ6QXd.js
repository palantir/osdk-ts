import{j as r,M as s}from"./iframe-DopY1iFB.js";import{P as p}from"./pdf-viewer-CsLK7Q1U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-PZktfJ7T.js";import"./preload-helper-vT8POVDR.js";import"./PdfViewer-D9bbTpzN.js";import"./index-CCfIWMGJ.js";import"./BasePdfViewer-DQCdTJpo.js";import"./BasePdfViewer.module.css-haLPSHWn.js";import"./PdfViewerAnnotationLayer-DyAwaNzO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B4rFgybZ.js";import"./PdfViewerOutlineSidebar-DUm9G2QA.js";import"./PdfViewerSidebarHeader-BaM9X6T4.js";import"./useBaseUiId-z-VkK_Xn.js";import"./useControlled-ClnCU8CR.js";import"./CompositeRoot-1iYFDpbP.js";import"./CompositeItem-D98VU1_Q.js";import"./ToolbarRootContext-CFKLRcpG.js";import"./composite-BGFtTgn-.js";import"./svgIconContainer-DKL3lG_j.js";import"./PdfViewerSearchBar-BN1Znw-b.js";import"./chevron-up-D3orJZRH.js";import"./chevron-down-Cn7sl9Ua.js";import"./cross-y3ZfqzAA.js";import"./PdfViewerSidebar-CKG3IRCz.js";import"./index-BlOFqzc6.js";import"./index-CsUmhPmI.js";import"./index-CI3yqxJd.js";import"./PdfViewerToolbar-DIggjay8.js";import"./Button-BegRP6Wf.js";import"./chevron-right-DOmIAxJ1.js";import"./Input-DdA-yANI.js";import"./search-CxfNGXVV.js";import"./spin-WN7Y0rxt.js";import"./error-CTe9ttET.js";import"./withOsdkMetrics-BFGwpRHC.js";import"./makeExternalStore-B0UtzOn_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
