import{j as r,M as s}from"./iframe-DpYBlUf6.js";import{P as p}from"./pdf-viewer-D_4K2Thu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDooHwJO.js";import"./preload-helper-aJL6Jgcy.js";import"./PdfViewer-C2PCZ9Q6.js";import"./index-DG12qFyq.js";import"./BasePdfViewer-5-eKaed1.js";import"./BasePdfViewer.module.css-Btf9DWVQ.js";import"./PdfViewerAnnotationLayer-C4hc5g3F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtXLCq7x.js";import"./PdfViewerOutlineSidebar-HCCqbbqy.js";import"./PdfViewerSidebarHeader-Bu3ReIMI.js";import"./useBaseUiId-Cvpk5u0b.js";import"./useControlled-BzCwoTTi.js";import"./CompositeRoot-C4FRlMLp.js";import"./CompositeItem-3SIjESMP.js";import"./ToolbarRootContext-D5uSuuYr.js";import"./composite-kZPGPCkC.js";import"./svgIconContainer-BNnaw46F.js";import"./PdfViewerSearchBar-CmCRVHBY.js";import"./chevron-up-cEkFZZuZ.js";import"./chevron-down-DiWPSqGR.js";import"./cross-hvj-E3FQ.js";import"./PdfViewerSidebar-CeuVI1Ol.js";import"./index-DvRXLSHl.js";import"./index-Zn6BbNql.js";import"./index-gjgAmiRP.js";import"./PdfViewerToolbar-CQ7D_A7h.js";import"./Button-OjQdDHcR.js";import"./chevron-right-C6iXKlAO.js";import"./Input-BuqKJ0cI.js";import"./search-B-2FwTug.js";import"./spin-C30_OflA.js";import"./error-_sVszbe4.js";import"./withOsdkMetrics-Db3uKV6F.js";import"./makeExternalStore-Dk5562or.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
