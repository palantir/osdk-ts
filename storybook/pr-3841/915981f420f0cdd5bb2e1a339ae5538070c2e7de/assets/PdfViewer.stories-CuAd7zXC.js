import{j as r,M as s}from"./iframe-BOmrqFPc.js";import{P as p}from"./pdf-viewer-DDnQyeaR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaNdJKtE.js";import"./preload-helper-DHdkCmlX.js";import"./PdfViewer-BojteJ4Y.js";import"./index-CsuBd3Ct.js";import"./BasePdfViewer-DsSVbHYm.js";import"./BasePdfViewer.module.css-DlsMqj7L.js";import"./PdfViewerAnnotationLayer-CDqO6ljR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEgcR9ww.js";import"./PdfViewerOutlineSidebar-B1Bbxbek.js";import"./PdfViewerSidebarHeader-Bemz63Sd.js";import"./useBaseUiId-BbxoKReU.js";import"./useControlled-fJQSQ2l_.js";import"./CompositeRoot-DmCOYPCl.js";import"./CompositeItem-BQhn1KAi.js";import"./ToolbarRootContext-CZljBiwl.js";import"./composite-DD_Mh2Hz.js";import"./svgIconContainer-BIv09OFd.js";import"./PdfViewerSearchBar-CGJCl_ff.js";import"./chevron-up-C0Rd-ssI.js";import"./chevron-down-CjR8Mc2-.js";import"./cross-C3JW1YVW.js";import"./PdfViewerSidebar-D32YvtC0.js";import"./index-7ewfs4s5.js";import"./index-CwZfU70k.js";import"./index-CmDTuj0A.js";import"./PdfViewerToolbar-DN6UhUAT.js";import"./Button-CzVdVKcN.js";import"./chevron-right-SMgjrj7f.js";import"./Input-DztT7-KE.js";import"./search-BDQnen_f.js";import"./spin-DrISX71u.js";import"./error-lpzYnACL.js";import"./withOsdkMetrics-CHgAtXdu.js";import"./makeExternalStore-CIMBrNRu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
