import{j as r,M as s}from"./iframe-B4QLcSZV.js";import{P as p}from"./pdf-viewer-2UrKu__c.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrAhz_Nw.js";import"./preload-helper-Bo3Ha5vh.js";import"./PdfViewer-C3KPQkMz.js";import"./index-CU2p5LDV.js";import"./BasePdfViewer-0Bwd7uZw.js";import"./BasePdfViewer.module.css-hFPqIDG6.js";import"./PdfViewerAnnotationLayer-Cus44eQp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-WcDSAmpr.js";import"./PdfViewerOutlineSidebar-QP3bthyT.js";import"./PdfViewerSidebarHeader-BZYIXjIc.js";import"./useBaseUiId-BSZdLkOo.js";import"./useControlled-BC3YGi64.js";import"./CompositeRoot-Crpmrhtq.js";import"./CompositeItem-CpoTinek.js";import"./ToolbarRootContext-CQfevRIV.js";import"./composite-CgB6Of8a.js";import"./svgIconContainer-Dh-Zaef4.js";import"./PdfViewerSearchBar-BxkDX-Ly.js";import"./chevron-up-NfVrVn1o.js";import"./chevron-down-DwcY0-Tx.js";import"./cross-DnvIeiSW.js";import"./PdfViewerSidebar-BOrv1NlI.js";import"./index-In1SvQxE.js";import"./index-B8xzy7Yy.js";import"./index-CX5vZraN.js";import"./PdfViewerToolbar-DDtRl5ku.js";import"./Button-Buk5h-ut.js";import"./chevron-right-CLAhHx_P.js";import"./Input-CSlKlom8.js";import"./search-eHSn6FPQ.js";import"./spin-CyfkkoBC.js";import"./error-DsKpT3Ih.js";import"./withOsdkMetrics-BGZuYz8s.js";import"./makeExternalStore-Dm5zWOFv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
