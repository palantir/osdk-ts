import{j as r,M as s}from"./iframe-B7GyHcsF.js";import{P as p}from"./pdf-viewer-CVvtTfj8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BpwlhqzD.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-K3gux7vQ.js";import"./index-CFQjkptn.js";import"./BasePdfViewer-DbmIivJP.js";import"./BasePdfViewer.module.css-B0_OizKX.js";import"./PdfViewerAnnotationLayer-CxyHMVrm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDmmUj2J.js";import"./PdfViewerOutlineSidebar-D3KOOMRo.js";import"./PdfViewerSidebarHeader-BULuMXFA.js";import"./useBaseUiId-DIKh32OU.js";import"./useControlled-CYQSl254.js";import"./CompositeRoot-Dqzgwgb9.js";import"./CompositeItem-QnuG7jjG.js";import"./ToolbarRootContext-DPmvBz2H.js";import"./composite-ZKnDJfr2.js";import"./svgIconContainer-DV6JsgR9.js";import"./PdfViewerSearchBar-rscALiwY.js";import"./chevron-up-BZV9EWn6.js";import"./chevron-down-BWTVBIyh.js";import"./cross-CbX11T1l.js";import"./PdfViewerSidebar-CR04-D-R.js";import"./index-CV0k5xhB.js";import"./index-CCC1KVPP.js";import"./index-BrNFn6FK.js";import"./PdfViewerToolbar-IuROV7Qc.js";import"./Button-DcySZcut.js";import"./chevron-right-D4nHVJYU.js";import"./Input-xO4VjGaV.js";import"./search-BOqk2K5z.js";import"./spin-D_FexAld.js";import"./error-o8PSnfAD.js";import"./withOsdkMetrics-3hzxFyTR.js";import"./makeExternalStore-CHXnPqRT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
