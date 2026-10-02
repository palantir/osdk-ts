import{j as r,M as s}from"./iframe-J9lCjP1k.js";import{P as p}from"./pdf-viewer-BOHoM4Ox.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--9JqYniO.js";import"./preload-helper-BXO0w5mF.js";import"./PdfViewer-BiFTsBfW.js";import"./index-xbscF9ue.js";import"./BasePdfViewer-DguR5BfC.js";import"./BasePdfViewer.module.css-BMgHwDG5.js";import"./PdfViewerAnnotationLayer-Dk-P-Ydc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh_NY6Cq.js";import"./PdfViewerOutlineSidebar-BpsQwDem.js";import"./PdfViewerSidebarHeader-Cw3XSKt_.js";import"./useBaseUiId-BbYI3Fho.js";import"./useControlled-DItBXz5T.js";import"./CompositeRoot-iW1fmmod.js";import"./CompositeItem-C-k99tdq.js";import"./ToolbarRootContext-DRYgzWjU.js";import"./composite-DI_eiBD4.js";import"./svgIconContainer-CLwoVSXr.js";import"./PdfViewerSearchBar-D__5LO_s.js";import"./chevron-up-wekAADiQ.js";import"./chevron-down-C5IBZF4F.js";import"./cross-D1CxmRAM.js";import"./PdfViewerSidebar-Dn84BwrX.js";import"./index-5j_M01Uz.js";import"./index-BcwSN1Tg.js";import"./index-DQUI6WyQ.js";import"./PdfViewerToolbar-C3A-INWo.js";import"./Button-VEce61GE.js";import"./chevron-right-B9KXmMoe.js";import"./Input-Ba7RqXqy.js";import"./search-Bzg3xwEF.js";import"./spin-C3fa_nIL.js";import"./error-XzIXc-ko.js";import"./withOsdkMetrics-C6QFCRSF.js";import"./makeExternalStore-j1jcO9d9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
