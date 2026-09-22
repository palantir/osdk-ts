import{j as r,M as s}from"./iframe-DFjxEBRl.js";import{P as p}from"./pdf-viewer-Dkvaf2mS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BaeV1F4F.js";import"./preload-helper-YLQ76DnX.js";import"./PdfViewer-MVFzL26S.js";import"./index-RHDnv4KE.js";import"./BasePdfViewer-BzWIkzCE.js";import"./BasePdfViewer.module.css-DNdfhfbd.js";import"./PdfViewerAnnotationLayer-Dzez6ipC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW88jXGw.js";import"./PdfViewerOutlineSidebar-Kit_tl20.js";import"./PdfViewerSidebarHeader-B7zXzaM-.js";import"./useBaseUiId-DHc-L81w.js";import"./useControlled-CQ5aYrLf.js";import"./CompositeRoot-BM14AdfU.js";import"./CompositeItem-CAkiPkQz.js";import"./ToolbarRootContext-B6U_uFKg.js";import"./composite-CbdzgRs5.js";import"./svgIconContainer-BJy48zyG.js";import"./PdfViewerSearchBar-B_Xn8mWF.js";import"./chevron-up-BpSC9Zv4.js";import"./chevron-down-Bha1TG_6.js";import"./cross-CCUsZu-F.js";import"./PdfViewerSidebar-BqE7W_3N.js";import"./index-B9cxXn2y.js";import"./index-Ct3A8526.js";import"./index-C1k9WrZP.js";import"./PdfViewerToolbar-CPObxDR2.js";import"./Button-Del4UdCp.js";import"./chevron-right-mNDvHT9l.js";import"./Input-BTdzd0gA.js";import"./search-BBZ2n1GL.js";import"./spin-UYOXwNTw.js";import"./error-WmDbCKs9.js";import"./withOsdkMetrics-DIfFeIX-.js";import"./makeExternalStore-DFJcPXqp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
