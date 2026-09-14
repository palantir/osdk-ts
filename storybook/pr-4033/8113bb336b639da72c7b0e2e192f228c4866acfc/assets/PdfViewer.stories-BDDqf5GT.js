import{j as r,M as s}from"./iframe-DnMZhogX.js";import{P as p}from"./pdf-viewer-DvKSpbg2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_E2GsCO.js";import"./preload-helper-D4NPUWDF.js";import"./PdfViewer-mnm6SO4c.js";import"./index-C6vUCj3I.js";import"./BasePdfViewer-WYNzgR-L.js";import"./BasePdfViewer.module.css-Ce6CPN-S.js";import"./PdfViewerAnnotationLayer-B28qdywS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2Qnfj1a.js";import"./PdfViewerOutlineSidebar-J0YLfQZS.js";import"./PdfViewerSidebarHeader-DNxEHCIB.js";import"./useBaseUiId-BQvmXl_6.js";import"./useControlled-B2iKOn4D.js";import"./CompositeRoot-CroFFjns.js";import"./CompositeItem-r96J_nIs.js";import"./ToolbarRootContext-BocpL34Y.js";import"./composite-C04hi1zy.js";import"./svgIconContainer-BVAzBycF.js";import"./PdfViewerSearchBar-CCwDu9Nz.js";import"./chevron-up-6peZ01KG.js";import"./chevron-down-q0wNWe4O.js";import"./cross-B0Br0EiR.js";import"./PdfViewerSidebar-1rv7Nqgw.js";import"./index-3k87IEg2.js";import"./index-t2KVREOA.js";import"./index-CkhjCsS5.js";import"./PdfViewerToolbar-CWHzkU2-.js";import"./Button-DNd_NMyi.js";import"./chevron-right-OpZM0xdV.js";import"./Input-LnfuE3I2.js";import"./search-Dq0e8pTI.js";import"./spin-BVFkwjji.js";import"./error-DSDfnydb.js";import"./withOsdkMetrics-DSRao68Z.js";import"./makeExternalStore-EsKTsg8A.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
