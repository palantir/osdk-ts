import{j as r,M as s}from"./iframe-BkN_38ur.js";import{P as p}from"./pdf-viewer-DCL_P69N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Crod4VT2.js";import"./preload-helper-BysSMJyv.js";import"./PdfViewer-DhWb1wek.js";import"./index-VCNAMxPB.js";import"./BasePdfViewer-DYFdJez2.js";import"./BasePdfViewer.module.css-CCkZJu_g.js";import"./PdfViewerAnnotationLayer-Bpbd65kZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGaM5vdR.js";import"./PdfViewerOutlineSidebar-znVonwwh.js";import"./PdfViewerSidebarHeader-BxxqGVva.js";import"./useBaseUiId-DDXpceTn.js";import"./useControlled-Cl0okxKJ.js";import"./CompositeRoot-B6tfnWh3.js";import"./CompositeItem-DeZdbGTL.js";import"./ToolbarRootContext-DsnyQOq9.js";import"./composite-DTpp6U8p.js";import"./svgIconContainer-CleM6Ots.js";import"./PdfViewerSearchBar-qRDlO47h.js";import"./chevron-up-D-KCmq92.js";import"./chevron-down-DQ_KkOEg.js";import"./cross-QuNtfWNx.js";import"./PdfViewerSidebar-BmcCH_pr.js";import"./index-tJ30rsuQ.js";import"./index-B8WRO5V1.js";import"./index-B4VzS2Ja.js";import"./PdfViewerToolbar-BSk8kPkj.js";import"./Button-Bz7lNxsT.js";import"./chevron-right-5yQmx5HF.js";import"./Input-BB5NVTdl.js";import"./search-DLVM4UyR.js";import"./spin-CkboCgBh.js";import"./error-B2ZdHohT.js";import"./withOsdkMetrics-Bgcs-XTD.js";import"./makeExternalStore-BQFFGO0N.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
