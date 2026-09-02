import{j as r,M as s}from"./iframe-CqkLHc_c.js";import{P as p}from"./pdf-viewer-Zq6Io49H.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Uu9ZCmPp.js";import"./preload-helper-tK9KftsW.js";import"./PdfViewer-QHO0gpQp.js";import"./index-BkdZmWk5.js";import"./BasePdfViewer-T81VbKKB.js";import"./BasePdfViewer.module.css-BO1p4be0.js";import"./PdfViewerAnnotationLayer-DZBbbQns.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yegIRgZW.js";import"./PdfViewerOutlineSidebar-ASvU8zyr.js";import"./PdfViewerSidebarHeader-COyM5onK.js";import"./useBaseUiId-tebTh8Gp.js";import"./useControlled-DG0f7MEe.js";import"./CompositeRoot-BZK799xy.js";import"./CompositeItem-DLFLEE2w.js";import"./ToolbarRootContext-BoN7sVx8.js";import"./composite-BYm3d5-q.js";import"./svgIconContainer-Blo0ZtB6.js";import"./PdfViewerSearchBar-CtVfacdy.js";import"./chevron-up-i85YTXlA.js";import"./chevron-down-Dm_-uRNW.js";import"./cross-BK5qmSmv.js";import"./PdfViewerSidebar-B-J8miJw.js";import"./index-DkCpc9rG.js";import"./index-BPryo7yS.js";import"./index-ESRslAge.js";import"./PdfViewerToolbar-Nv6DG7jy.js";import"./Button-B3Rn0blP.js";import"./chevron-right-dlYq_54a.js";import"./Input-CDogb2Gc.js";import"./search-PNHKhQFY.js";import"./spin-D4lSHjLR.js";import"./error-DVJcn8Pc.js";import"./withOsdkMetrics-DbuLeRiC.js";import"./makeExternalStore-Cg161Yxc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
