import{j as r,M as s}from"./iframe-vkoUEtx2.js";import{P as p}from"./pdf-viewer-DQw2pMnd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CI2I5OMD.js";import"./preload-helper-CY67mq_z.js";import"./PdfViewer-Bepk7M6F.js";import"./index-CnABB2cx.js";import"./BasePdfViewer-JO3eDxCt.js";import"./BasePdfViewer.module.css-BVuqu11P.js";import"./PdfViewerAnnotationLayer-DJ4sq413.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-006NWdhd.js";import"./PdfViewerOutlineSidebar-BXgTL0ra.js";import"./PdfViewerSidebarHeader-C5FuuBvG.js";import"./useBaseUiId-Cn9qEQr-.js";import"./useControlled-BjJao8Of.js";import"./CompositeRoot-DLGY_SvR.js";import"./CompositeItem-B2YXnViz.js";import"./ToolbarRootContext-DG-oSyQ3.js";import"./composite-CNJa8zsy.js";import"./svgIconContainer-CTvbg6Kf.js";import"./PdfViewerSearchBar-DojHSMMo.js";import"./chevron-up-DJZspjx-.js";import"./chevron-down-B0GhQ5QL.js";import"./cross-DTB4NCzU.js";import"./PdfViewerSidebar-B-hKTqQ3.js";import"./index-CkB6dCmi.js";import"./index-Cg_Ca4SJ.js";import"./index-CTa-81VF.js";import"./PdfViewerToolbar-wFfGdxdI.js";import"./Button-yBKPIwwM.js";import"./chevron-right-D5hm38hQ.js";import"./Input-DILwrgB_.js";import"./search-BJuRvFPW.js";import"./spin-DiT36FQD.js";import"./error-WzD0MOfh.js";import"./withOsdkMetrics-1oalfrhO.js";import"./makeExternalStore-BZrOFzyq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
