import{j as r,M as s}from"./iframe-Dn-9qR05.js";import{P as p}from"./pdf-viewer-iDJ7srXL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTRpRMs-.js";import"./preload-helper-CEUgRBGl.js";import"./PdfViewer-DOZLYYlp.js";import"./index-CShzoPuj.js";import"./BasePdfViewer-d7ETrwGD.js";import"./BasePdfViewer.module.css-D4fEclra.js";import"./PdfViewerAnnotationLayer-BGf9xS61.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yYxyDdu_.js";import"./PdfViewerOutlineSidebar-CZDlSadi.js";import"./PdfViewerSidebarHeader-CZ3XMx0-.js";import"./useBaseUiId-DlYLGnbC.js";import"./useControlled-CX6Xi137.js";import"./CompositeRoot-ZIcBBMhy.js";import"./CompositeItem-DUnPjw9m.js";import"./ToolbarRootContext-C6ldVUmb.js";import"./composite-Dam7p1Gi.js";import"./svgIconContainer-DN7hY7wX.js";import"./PdfViewerSearchBar-KBM5us8C.js";import"./chevron-up-CNSvrdQH.js";import"./chevron-down-fpE-PXKH.js";import"./cross-CFJY3pI7.js";import"./PdfViewerSidebar-Bb3ERHNg.js";import"./index-B79Dn3Wp.js";import"./index-siGyqdKv.js";import"./index-Cm5JEtld.js";import"./PdfViewerToolbar-zVDk_g17.js";import"./Button-CD6ruQEI.js";import"./chevron-right-W_6B7z7T.js";import"./Input-Ckj63NR0.js";import"./search-B9RszC_k.js";import"./spin-C3OOqG1O.js";import"./error-Cuq16P9x.js";import"./withOsdkMetrics-BQNjNhlw.js";import"./makeExternalStore-Dqgr7oFO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
