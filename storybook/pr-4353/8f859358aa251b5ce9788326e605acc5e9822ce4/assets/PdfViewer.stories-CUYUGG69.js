import{j as r,M as s}from"./iframe-BS0M2hwP.js";import{P as p}from"./pdf-viewer-BUDC2b_5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCXbl_kG.js";import"./preload-helper-C0HkGCdU.js";import"./PdfViewer-DpG53T35.js";import"./index-CPPTt-fG.js";import"./BasePdfViewer-DGXPR3z_.js";import"./BasePdfViewer.module.css-CMPYgTCe.js";import"./PdfViewerAnnotationLayer-CCw5Zcc6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRxkOw6x.js";import"./PdfViewerOutlineSidebar-70wCMYdh.js";import"./PdfViewerSidebarHeader-BAvpHrn2.js";import"./useBaseUiId-77uYocVy.js";import"./useControlled-C2cZAxJ2.js";import"./CompositeRoot-BzvJBHno.js";import"./CompositeItem-BonvX_5i.js";import"./ToolbarRootContext-3PBXuwUh.js";import"./composite-Dtpk2934.js";import"./svgIconContainer-NUXlWCmy.js";import"./PdfViewerSearchBar-DM4sxbTO.js";import"./chevron-up-D_DWaB0_.js";import"./chevron-down-OJJdZYcx.js";import"./cross-DzypzeyC.js";import"./PdfViewerSidebar-BMqUiRNs.js";import"./index-CEsGU-7z.js";import"./index-C8CN-2yF.js";import"./index-CnbN8-s2.js";import"./PdfViewerToolbar-D9cjMAUD.js";import"./Button-Ba1VM7tv.js";import"./chevron-right-BuEzP7SJ.js";import"./Input-C2-Y_50j.js";import"./search-DzKPAVbq.js";import"./spin-DrXQ4OKJ.js";import"./error-B91-GI1R.js";import"./withOsdkMetrics-DDHgU96d.js";import"./makeExternalStore-BO2WwozP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
