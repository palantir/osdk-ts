import{j as r,M as s}from"./iframe-yzha5v0q.js";import{P as p}from"./pdf-viewer-B_IBA8wC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lujOesX6.js";import"./preload-helper-D-8FAAW5.js";import"./PdfViewer-CI9U0bj8.js";import"./index-60EGa8qT.js";import"./BasePdfViewer-BGkK2QQS.js";import"./BasePdfViewer.module.css-Y8aSVnfE.js";import"./PdfViewerAnnotationLayer-CkMxbZGn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8bXvwaeo.js";import"./PdfViewerOutlineSidebar-3_ONyoEt.js";import"./PdfViewerSidebarHeader-CSicL9dn.js";import"./useBaseUiId-BbIMkHOG.js";import"./useControlled-D0bVi2TG.js";import"./CompositeRoot-BTH8FPsW.js";import"./CompositeItem-ha9gBhOi.js";import"./ToolbarRootContext-D2IbjqCY.js";import"./composite-BDH9_dFX.js";import"./svgIconContainer-C44iOk89.js";import"./PdfViewerSearchBar-C5tVhWF7.js";import"./chevron-up-CKX1qmzh.js";import"./chevron-down-DLVlSQ8P.js";import"./cross-BlwLOBUQ.js";import"./PdfViewerSidebar-VYpEABYd.js";import"./index-DbIozRF2.js";import"./index-O5EAmeT1.js";import"./index-BVrkRt64.js";import"./PdfViewerToolbar-Dgl4M-Vs.js";import"./Button-BiUOfKuO.js";import"./chevron-right-J4xDkOKG.js";import"./Input-EyuyzT2W.js";import"./search-gm56Xs7t.js";import"./spin-D-P5tF_4.js";import"./error-B0YQBao9.js";import"./withOsdkMetrics-DqbCp-LC.js";import"./makeExternalStore-DbXaKl2K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
