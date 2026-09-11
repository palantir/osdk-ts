import{j as r,M as s}from"./iframe-CmbQZ_H0.js";import{P as p}from"./pdf-viewer-DvK-k9L7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CAp6o-V2.js";import"./preload-helper-Ecu5FnuN.js";import"./PdfViewer-CvXTqmsA.js";import"./index-QKQySa8F.js";import"./BasePdfViewer-CjGLgDZL.js";import"./BasePdfViewer.module.css-BXoRr5Wo.js";import"./PdfViewerAnnotationLayer-ykqZInFC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuMxHHL6.js";import"./PdfViewerOutlineSidebar-B2i5O24D.js";import"./PdfViewerSidebarHeader-DpwZ0Bzu.js";import"./useBaseUiId-M00ioKA7.js";import"./useControlled-CF22MFs5.js";import"./CompositeRoot-DAnOUuwB.js";import"./CompositeItem-ByYHjWLD.js";import"./ToolbarRootContext-B1xhX1z_.js";import"./composite-Cb2is0DJ.js";import"./svgIconContainer-CUFAWoTA.js";import"./PdfViewerSearchBar-BgesjKqL.js";import"./chevron-up-DJsx5Vpk.js";import"./chevron-down-BhlVnWsI.js";import"./cross-6T8h1X1A.js";import"./PdfViewerSidebar-6nEXJxs-.js";import"./index-B3o3BLIH.js";import"./index-DlNrqWid.js";import"./index-CnDEnPo5.js";import"./PdfViewerToolbar-Dzb-loY1.js";import"./Button-CDF-lBwk.js";import"./chevron-right-BovYYjYE.js";import"./Input-B5NiOwJX.js";import"./search-CVqyjRk8.js";import"./spin-CGMoTOtb.js";import"./error-Beqgpujq.js";import"./withOsdkMetrics-DoacziBi.js";import"./makeExternalStore-BB3Iwwej.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
