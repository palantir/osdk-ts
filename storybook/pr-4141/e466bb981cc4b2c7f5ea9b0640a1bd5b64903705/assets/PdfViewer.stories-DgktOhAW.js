import{j as r,M as s}from"./iframe-70ZuGjkJ.js";import{P as p}from"./pdf-viewer-RJ8lmK1N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5vLelhA.js";import"./preload-helper-DK4xKHY4.js";import"./PdfViewer-CTD8aupu.js";import"./index-CckhOj8-.js";import"./BasePdfViewer-CQDx_f2f.js";import"./BasePdfViewer.module.css-CrONmyUz.js";import"./PdfViewerAnnotationLayer-BPRLUmtE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Db60cZoB.js";import"./PdfViewerOutlineSidebar-C1do2odB.js";import"./PdfViewerSidebarHeader-S1vc3HYp.js";import"./useBaseUiId-CqgzcpTd.js";import"./useControlled-0e2XrUt8.js";import"./CompositeRoot-B4pg0K7R.js";import"./CompositeItem-A9SMjz1N.js";import"./ToolbarRootContext-DmAs8e4b.js";import"./composite-E4mw46H8.js";import"./svgIconContainer-CtTs4nyb.js";import"./PdfViewerSearchBar-CjwnFq7M.js";import"./chevron-up-Bc4KJtHs.js";import"./chevron-down-BPIjaHnC.js";import"./cross-CO8zitM2.js";import"./PdfViewerSidebar-B3yaQpkd.js";import"./index-C1hIfcQ2.js";import"./index-C6_lfWdp.js";import"./index-CDzhFE3P.js";import"./PdfViewerToolbar-PRIEPupz.js";import"./Button-D2KYgMT_.js";import"./chevron-right-CL3r_QNP.js";import"./Input-sBtVPl75.js";import"./search-_UcRnrjw.js";import"./spin-C1q-OLZe.js";import"./error-Ho0rrjia.js";import"./withOsdkMetrics-DyYS57kA.js";import"./makeExternalStore-Vi6b8A7J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
