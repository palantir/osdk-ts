import{j as r,M as s}from"./iframe-B9pmQzab.js";import{P as p}from"./pdf-viewer-BKBDNenZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BM6s060L.js";import"./preload-helper-8ApCze4z.js";import"./PdfViewer-BkSx95Ga.js";import"./index-DJNcHwm8.js";import"./BasePdfViewer-Du-Y6GD5.js";import"./BasePdfViewer.module.css-59o3EWNu.js";import"./PdfViewerAnnotationLayer-DTAUpqBe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxsH70SP.js";import"./PdfViewerOutlineSidebar-oQRmdghs.js";import"./PdfViewerSidebarHeader-CVrNCTV_.js";import"./useBaseUiId-CeFMmA-9.js";import"./useControlled-BWGqCRkH.js";import"./CompositeRoot-Ba6eZcsV.js";import"./CompositeItem-CxryFH5r.js";import"./ToolbarRootContext-ByReu0dc.js";import"./composite-C0QPd-_Y.js";import"./svgIconContainer-CO7Z6-JZ.js";import"./PdfViewerSearchBar-Ck8xQ4Cu.js";import"./chevron-up-D0K14Zfx.js";import"./chevron-down-CZhOdlZa.js";import"./cross-8efItR-s.js";import"./PdfViewerSidebar-Boefb7ng.js";import"./index-C31EnYzg.js";import"./index-D1sJuveY.js";import"./index-C-ZM_VQS.js";import"./PdfViewerToolbar-C7BUqhI8.js";import"./Button-Bv8-UnbE.js";import"./chevron-right-BOi9C_DM.js";import"./Input-DpZPwerh.js";import"./search-DgrCLXVb.js";import"./spin-pqwfeNZw.js";import"./error-RG5ruaVA.js";import"./withOsdkMetrics-6gbwRZ-B.js";import"./makeExternalStore-BiGH-jDa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
