import{j as r,M as s}from"./iframe-CUIuiQ8M.js";import{P as p}from"./pdf-viewer-g0XjiRKu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYdTVbzt.js";import"./preload-helper-w0MMDoBI.js";import"./PdfViewer-Dz2-85Tn.js";import"./index-B5rq4E8c.js";import"./BasePdfViewer-CMp_1AJ0.js";import"./BasePdfViewer.module.css-D9WxtN0H.js";import"./PdfViewerAnnotationLayer-D9gpkght.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AfqaSdKc.js";import"./PdfViewerOutlineSidebar-_0s2WRjZ.js";import"./PdfViewerSidebarHeader-DU4LroWR.js";import"./useBaseUiId-CO_Scg4B.js";import"./useControlled-AW4odFH0.js";import"./CompositeRoot-Bura2FJa.js";import"./CompositeItem-DqTHESiL.js";import"./ToolbarRootContext-mQ2qjFjd.js";import"./composite-CfWLpG35.js";import"./svgIconContainer-XQGxfFa5.js";import"./PdfViewerSearchBar-BcITcYTN.js";import"./chevron-up-Cr0e8Qqr.js";import"./chevron-down-BPe3l6Fo.js";import"./cross-BEDlXMDX.js";import"./PdfViewerSidebar-DOsj_7Qy.js";import"./index-BupjIogH.js";import"./index-BXDM3eUI.js";import"./index-nHMpUj1A.js";import"./PdfViewerToolbar-DMFcQalr.js";import"./Button-BsH4UFjg.js";import"./chevron-right-B_Xrmn_k.js";import"./Input-CUX61x5u.js";import"./search-DuRjWaqd.js";import"./spin-CAe4_1yp.js";import"./error-BGt6yMaY.js";import"./withOsdkMetrics-CQMJUMD-.js";import"./makeExternalStore-elmJ7ql4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
