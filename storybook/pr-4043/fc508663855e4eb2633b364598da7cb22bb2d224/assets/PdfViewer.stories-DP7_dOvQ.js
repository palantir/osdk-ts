import{j as r,M as s}from"./iframe-DQjaRBUi.js";import{P as p}from"./pdf-viewer-DUoYkKKN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B4d_MyqE.js";import"./preload-helper-B51_55sC.js";import"./PdfViewer-D-qFziLy.js";import"./index-a9fHowso.js";import"./BasePdfViewer-BEekAkd1.js";import"./BasePdfViewer.module.css-rLw8yba5.js";import"./PdfViewerAnnotationLayer-DUeo0KZl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQbwexhN.js";import"./PdfViewerOutlineSidebar-CJeZE0h-.js";import"./PdfViewerSidebarHeader-C4XNgsaA.js";import"./useBaseUiId-CsxSSmlu.js";import"./useControlled-BLfmFiCd.js";import"./CompositeRoot-BfZMTdOJ.js";import"./CompositeItem-CKeLa0nw.js";import"./ToolbarRootContext-N17gF4sL.js";import"./composite-h2wwgXba.js";import"./svgIconContainer-P1Q9eNRM.js";import"./PdfViewerSearchBar-brKniKbY.js";import"./chevron-up-5_nHH3cO.js";import"./chevron-down-BCCVuGBy.js";import"./cross-CzaogkbO.js";import"./PdfViewerSidebar-BSf_JEKr.js";import"./index-T90468VQ.js";import"./index-4Rz5xHWo.js";import"./index-4wWSGius.js";import"./PdfViewerToolbar-BFo45R4I.js";import"./Button-DgMUmpJg.js";import"./chevron-right-DjyWW2fs.js";import"./Input-CsAKN6EM.js";import"./search-Dh1WJUP1.js";import"./spin-CxFIKK8f.js";import"./error-w3bPHlOX.js";import"./withOsdkMetrics-DnZQS4XI.js";import"./makeExternalStore-B1bL49mU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
