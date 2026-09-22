import{j as r,M as s}from"./iframe-D6GK-HvP.js";import{P as p}from"./pdf-viewer-kpDaPx4x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDMbQXiW.js";import"./preload-helper-BFH31g1G.js";import"./PdfViewer-gu_zU1NM.js";import"./index-B8Opp0Aq.js";import"./BasePdfViewer-B8JrsWam.js";import"./BasePdfViewer.module.css-BHNWm_Rq.js";import"./PdfViewerAnnotationLayer-B4lgpdbE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UYp9H3rr.js";import"./PdfViewerOutlineSidebar-gmAvF5T2.js";import"./PdfViewerSidebarHeader-DbXY0X8_.js";import"./useBaseUiId-8c0vpIbF.js";import"./useControlled-DuFMSGQq.js";import"./CompositeRoot-DJ4VfHgE.js";import"./CompositeItem-XBxLSQGB.js";import"./ToolbarRootContext-DGSqIy6x.js";import"./composite-CrjUHFOu.js";import"./svgIconContainer-CSrNgshe.js";import"./PdfViewerSearchBar-Bkd7xidp.js";import"./chevron-up-Ql3JU-yU.js";import"./chevron-down-B7x3jao1.js";import"./cross-Dd2BFVFf.js";import"./PdfViewerSidebar-hT3heSP2.js";import"./index-C08EsZev.js";import"./index-P8xupo9q.js";import"./index-BJnCsIvw.js";import"./PdfViewerToolbar-Bq8QW8_x.js";import"./Button-oq6XXTdR.js";import"./chevron-right-BBuX6Vy-.js";import"./Input-CEqlI-vi.js";import"./search-BIJa8P83.js";import"./spin-BGHrFvWR.js";import"./error-CecGBnpf.js";import"./withOsdkMetrics-D368-fbW.js";import"./makeExternalStore-DeRAagV9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
