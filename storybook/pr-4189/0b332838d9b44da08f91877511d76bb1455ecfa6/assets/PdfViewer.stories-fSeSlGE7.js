import{j as r,M as s}from"./iframe-D2-93i0D.js";import{P as p}from"./pdf-viewer-Q2kegrfB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_IUyVDB.js";import"./preload-helper-B5ioDAdF.js";import"./PdfViewer-DIPdvTZP.js";import"./index-ZkzuTgCa.js";import"./BasePdfViewer-V3el8r56.js";import"./BasePdfViewer.module.css-WPnV_pV0.js";import"./PdfViewerAnnotationLayer-DEwTblqp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQHzvtwU.js";import"./PdfViewerOutlineSidebar-d_eTSCvC.js";import"./PdfViewerSidebarHeader-DonhJRCC.js";import"./useBaseUiId-O9oPLbry.js";import"./useControlled-BJsQhtpL.js";import"./CompositeRoot-DmGvMXWw.js";import"./CompositeItem-D9rSr-Un.js";import"./ToolbarRootContext-CbCHGeOF.js";import"./composite-D2489evg.js";import"./svgIconContainer-C_WiUj7c.js";import"./PdfViewerSearchBar-ClhbnkTF.js";import"./chevron-up-_6fn2oC3.js";import"./chevron-down-vlgCUq2z.js";import"./cross-XZbp8X1U.js";import"./PdfViewerSidebar-QJuWSu6Y.js";import"./index-bBa3vPeF.js";import"./index-CouUEHg5.js";import"./index-C9V5vUYP.js";import"./PdfViewerToolbar-YFKNRcot.js";import"./Button-BaohMVfV.js";import"./chevron-right-CouxvSnm.js";import"./Input-BVsduhCe.js";import"./search-e1zERwtP.js";import"./spin-BkFrqrsn.js";import"./error-C7BXsrlL.js";import"./withOsdkMetrics-B-CCJubj.js";import"./makeExternalStore-D-FYFBVJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
