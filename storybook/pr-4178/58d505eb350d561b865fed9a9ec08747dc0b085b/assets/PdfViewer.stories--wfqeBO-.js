import{j as r,M as s}from"./iframe-YBx9KFiE.js";import{P as p}from"./pdf-viewer-CQ9AqdOQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CItm521x.js";import"./preload-helper-L6jHOpxv.js";import"./PdfViewer-CRglsQ-c.js";import"./index-CgtaO5QM.js";import"./BasePdfViewer-BEb8F41H.js";import"./BasePdfViewer.module.css-CFHurV3D.js";import"./PdfViewerAnnotationLayer-ml_zZ_gM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nMCKy3Nr.js";import"./PdfViewerOutlineSidebar-BlIU-Pdo.js";import"./PdfViewerSidebarHeader-pT7uyP3v.js";import"./useBaseUiId-DlhJsTYI.js";import"./useControlled-CH_x4H3X.js";import"./CompositeRoot-CdaQtaZQ.js";import"./CompositeItem-C9bwnjwV.js";import"./ToolbarRootContext-C-_578ut.js";import"./composite-BJEKXzZu.js";import"./svgIconContainer-D6iAjNhU.js";import"./PdfViewerSearchBar-BI0iKxYN.js";import"./chevron-up-ChxRNWPt.js";import"./chevron-down-DfhavGPs.js";import"./cross-C3v-dhLA.js";import"./PdfViewerSidebar-B0Km9CjX.js";import"./index-N3lE_PbF.js";import"./index-B01ATWUm.js";import"./index-CLwqcVa2.js";import"./PdfViewerToolbar-Cl0jpE1R.js";import"./Button-CIORHkhd.js";import"./chevron-right-IlLKlaxr.js";import"./Input-YDKKpO0z.js";import"./search-CuFB4Okz.js";import"./spin-Bk8CNTZy.js";import"./error-CI50fd9w.js";import"./withOsdkMetrics-BU_fIGZP.js";import"./makeExternalStore-Bp5v93FT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
