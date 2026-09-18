import{j as r,M as s}from"./iframe-Csm-gXDM.js";import{P as p}from"./pdf-viewer-SEXPdLwX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-v4avY0Ig.js";import"./preload-helper-B2pQoQF5.js";import"./PdfViewer-BiYhiIp-.js";import"./index-DSOkxNmo.js";import"./BasePdfViewer-egT9SvFI.js";import"./BasePdfViewer.module.css-CGY4ABPX.js";import"./PdfViewerAnnotationLayer-DHJ6tNZq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5dwSIIZx.js";import"./PdfViewerOutlineSidebar-BH2829TJ.js";import"./PdfViewerSidebarHeader-QS0RQT5v.js";import"./useBaseUiId-BvtcsR9k.js";import"./useControlled-DlN8ExsH.js";import"./CompositeRoot-D8vqm_44.js";import"./CompositeItem-BGdHymE8.js";import"./ToolbarRootContext-6VqAIkkQ.js";import"./composite-Cd3ThWKg.js";import"./svgIconContainer-D8CdVdTF.js";import"./PdfViewerSearchBar-B_j8v3-H.js";import"./chevron-up-CYO7QViH.js";import"./chevron-down-K33gEoQm.js";import"./cross-D5yi1h_k.js";import"./PdfViewerSidebar-Cq3YZSjp.js";import"./index-VPVf3Zil.js";import"./index-D8ourLLB.js";import"./index-DK8dF11E.js";import"./PdfViewerToolbar-DNhO4j3-.js";import"./Button-D7cNt94b.js";import"./chevron-right-CzISn095.js";import"./Input-CmyNmn-U.js";import"./search-BWu2Apub.js";import"./spin-CKYyKo9B.js";import"./error-ptWpun4u.js";import"./withOsdkMetrics-BGSXyq-B.js";import"./makeExternalStore-DYZ91XmC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
