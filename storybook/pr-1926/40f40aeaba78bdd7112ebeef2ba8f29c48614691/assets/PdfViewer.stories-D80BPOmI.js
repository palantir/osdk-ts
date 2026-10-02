import{j as r,M as s}from"./iframe-CKrQ01Tw.js";import{P as p}from"./pdf-viewer-D4d103Ad.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-W5Q5KKlM.js";import"./preload-helper-ChvNP4Pl.js";import"./PdfViewer-BQke9DRQ.js";import"./index-BIdRQM2S.js";import"./BasePdfViewer-Dyneuzpa.js";import"./BasePdfViewer.module.css-Cko2grxe.js";import"./PdfViewerAnnotationLayer-D2tmTmWp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJzLjUjS.js";import"./PdfViewerOutlineSidebar-BR42zNcG.js";import"./PdfViewerSidebarHeader-B_DWbWco.js";import"./useBaseUiId-B2KTelTM.js";import"./useControlled-BlU5vlUe.js";import"./CompositeRoot-BKrbmhMz.js";import"./CompositeItem-Bisu6D-H.js";import"./ToolbarRootContext-DNlCsrGQ.js";import"./composite-CgNTf1JJ.js";import"./svgIconContainer-BWrjI0N2.js";import"./PdfViewerSearchBar-Cqcj9DcW.js";import"./chevron-up-PQcG-fSL.js";import"./chevron-down-BWfpQhPj.js";import"./cross-Bj1Rnssl.js";import"./PdfViewerSidebar-CaMS1bDS.js";import"./index-BgdQNo10.js";import"./index-xXO27wOh.js";import"./index-OkCRkK7-.js";import"./PdfViewerToolbar-BYUWtLhH.js";import"./Button-Cq8nZ_ey.js";import"./chevron-right-DPofkp_z.js";import"./Input-Cq0Ol3YB.js";import"./search-G6EfpRFi.js";import"./spin-DnkroIEf.js";import"./error-BeLhzW1q.js";import"./withOsdkMetrics-5P2QGy1j.js";import"./makeExternalStore-DmTWPGlO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
