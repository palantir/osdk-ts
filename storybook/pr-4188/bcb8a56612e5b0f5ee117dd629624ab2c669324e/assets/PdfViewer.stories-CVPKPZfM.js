import{j as r,M as s}from"./iframe-BpcZw0Qh.js";import{P as p}from"./pdf-viewer-o903OFKT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DB67Z6Kq.js";import"./preload-helper-bs_ZWCVp.js";import"./PdfViewer-D5sKldvw.js";import"./index-RyqdaqZt.js";import"./BasePdfViewer-CJZ9eJYF.js";import"./BasePdfViewer.module.css-Bd0Zs8TR.js";import"./PdfViewerAnnotationLayer-DvuKJmK_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D21-mYUp.js";import"./PdfViewerOutlineSidebar-BYniNHei.js";import"./PdfViewerSidebarHeader-DbOWyVVa.js";import"./useBaseUiId-BsFMaRmq.js";import"./useControlled-BaPgI88u.js";import"./CompositeRoot-BKRqmrK5.js";import"./CompositeItem-CiXh4i5Q.js";import"./ToolbarRootContext-Bafsun3r.js";import"./composite-b_Vir_Qy.js";import"./svgIconContainer-B6eNnREq.js";import"./PdfViewerSearchBar-B6N__7Lh.js";import"./chevron-up-kxiQh0Uj.js";import"./chevron-down-0qsj7SKJ.js";import"./cross-BQZa2Kkg.js";import"./PdfViewerSidebar-DOtKcQf3.js";import"./index-BvmVuSqJ.js";import"./index-j_Bq1Wxb.js";import"./index-hOxH3DWt.js";import"./PdfViewerToolbar-CATqug_j.js";import"./Button-xX1VEK25.js";import"./chevron-right-CWxy3TGc.js";import"./Input-B-pxSN65.js";import"./search-C5aLdI-z.js";import"./spin-B8UK78gR.js";import"./error-DJy30QKE.js";import"./withOsdkMetrics-OlYBoQiq.js";import"./makeExternalStore-vOLbyGHJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
