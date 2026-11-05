import{j as r,M as s}from"./iframe-ClYhC0-S.js";import{P as p}from"./pdf-viewer-SJOpAlkc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rZRdbzBd.js";import"./preload-helper-CNkkVcag.js";import"./PdfViewer-BgCMtegj.js";import"./index-Bmj0xk3d.js";import"./BasePdfViewer-B8usMd0W.js";import"./BasePdfViewer.module.css-CuvNqgzb.js";import"./PdfViewerAnnotationLayer-D2FO-e4o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW2S0Y36.js";import"./PdfViewerOutlineSidebar-XM3y7GLH.js";import"./PdfViewerSidebarHeader-BzL675uE.js";import"./useBaseUiId-Dd8fT170.js";import"./useControlled-4Gm1FEJo.js";import"./CompositeRoot-BXpO_Vjm.js";import"./CompositeItem-CPrfZrML.js";import"./ToolbarRootContext-DAdrKT5D.js";import"./composite-BwqNvQ0F.js";import"./svgIconContainer-9bIBfj8h.js";import"./PdfViewerSearchBar-BRUioN-n.js";import"./chevron-up-DuRbxtQz.js";import"./chevron-down-DJbVh1LY.js";import"./cross-C_2oyR03.js";import"./PdfViewerSidebar-DCb3zRG5.js";import"./index-cVgcsKtQ.js";import"./index-D8PsRgog.js";import"./index-CI-u4eDt.js";import"./PdfViewerToolbar-DKof30yE.js";import"./Button-Dg23Hvs4.js";import"./chevron-right-CdN8GFh5.js";import"./Input-D8CWVoNO.js";import"./search-BBIKhGWf.js";import"./spin-DydhKjPJ.js";import"./error-BD_aaRfa.js";import"./withOsdkMetrics-BvbgqpCV.js";import"./makeExternalStore-BHHGj5YL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
