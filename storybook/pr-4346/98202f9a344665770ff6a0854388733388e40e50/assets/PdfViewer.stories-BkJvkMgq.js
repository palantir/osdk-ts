import{j as r,M as s}from"./iframe-Cr2bpw19.js";import{P as p}from"./pdf-viewer-CNBnRlCA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AGQktU4k.js";import"./preload-helper-C_Wd2tIW.js";import"./PdfViewer-BR65uf4m.js";import"./index-HKSeYDtX.js";import"./BasePdfViewer-CDmPcmmJ.js";import"./BasePdfViewer.module.css-BzIwWQka.js";import"./PdfViewerAnnotationLayer-y6EQKnBV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_6TlLUG.js";import"./PdfViewerOutlineSidebar-CVW89sCz.js";import"./PdfViewerSidebarHeader-CvIplQM7.js";import"./useBaseUiId-BsHSNQc2.js";import"./useControlled-CtsC-hEl.js";import"./CompositeRoot-C0f0ZMNB.js";import"./CompositeItem-DiUvRjmE.js";import"./ToolbarRootContext-CivexTIu.js";import"./composite-Cktz544g.js";import"./svgIconContainer-BdwTWCXC.js";import"./PdfViewerSearchBar-DapAky3e.js";import"./chevron-up-D0SyYcMY.js";import"./chevron-down-CPF_RvK3.js";import"./cross-DerUaPtE.js";import"./PdfViewerSidebar-DwRThC7t.js";import"./index-qHL-28bq.js";import"./index-tVKD-Epk.js";import"./index-BWlzJ_-u.js";import"./PdfViewerToolbar-BQYWlQ7s.js";import"./Button-wtCP8XMP.js";import"./chevron-right-CoaORVFX.js";import"./Input-D8iQjGaO.js";import"./search-aGII2Iab.js";import"./spin-14prDeS3.js";import"./error-s73FCl63.js";import"./withOsdkMetrics-Ceo_vgdr.js";import"./makeExternalStore-BO-peT-K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
