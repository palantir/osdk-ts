import{j as r,M as s}from"./iframe-BtrE9oAk.js";import{P as p}from"./pdf-viewer-BtuxBDHS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-q1VvzrSu.js";import"./preload-helper-Ck9jHBT4.js";import"./PdfViewer-CWiHQ70n.js";import"./index-DTswWCN-.js";import"./BasePdfViewer-3g1TIkHm.js";import"./BasePdfViewer.module.css-Ci9HrKlj.js";import"./PdfViewerAnnotationLayer-DLh_e8XY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_n4O2_fV.js";import"./PdfViewerOutlineSidebar-DFLNRwox.js";import"./PdfViewerSidebarHeader-Crt_kqBl.js";import"./useBaseUiId-DZ_AJh1G.js";import"./useControlled-BzxnQPZx.js";import"./CompositeRoot-eACoPGGZ.js";import"./CompositeItem-KY2ZDv1b.js";import"./ToolbarRootContext-CiVShHn0.js";import"./composite-DJfjq7Qz.js";import"./svgIconContainer-CMgWIhhO.js";import"./PdfViewerSearchBar-VQYTk1PU.js";import"./chevron-up-BpdlEtXH.js";import"./chevron-down-CGlt-RaH.js";import"./cross-BpApkSFN.js";import"./PdfViewerSidebar-4u6Cx5LA.js";import"./index-Bsvjejoj.js";import"./index-BiKdeyQ9.js";import"./index-DAqFPrmn.js";import"./PdfViewerToolbar-C9JxT6yS.js";import"./Button-Dt_Nxhrh.js";import"./chevron-right-9bdhqDnc.js";import"./Input-DP5nsCAr.js";import"./search-DH4c7KHc.js";import"./spin-B1AZbeQj.js";import"./error-CWqhrvJ7.js";import"./withOsdkMetrics-BliYF0M9.js";import"./makeExternalStore-iXyWkOaZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
