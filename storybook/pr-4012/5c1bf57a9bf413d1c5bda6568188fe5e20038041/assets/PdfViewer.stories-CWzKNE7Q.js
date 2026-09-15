import{j as r,M as s}from"./iframe-Szo9Zkn-.js";import{P as p}from"./pdf-viewer-B6H_ouQg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-45NeIYoc.js";import"./preload-helper-Dhbsewg0.js";import"./PdfViewer-JWDsorId.js";import"./index-w7MyO4j0.js";import"./BasePdfViewer-BGg1Xrtd.js";import"./BasePdfViewer.module.css-BS5Hotfz.js";import"./PdfViewerAnnotationLayer-opnUh_as.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CA0juIkT.js";import"./PdfViewerOutlineSidebar-BvJedz70.js";import"./PdfViewerSidebarHeader-CnhiyVDE.js";import"./useBaseUiId-sDWiAP1v.js";import"./useControlled-eHJHqQYa.js";import"./CompositeRoot-XsUo5U8Y.js";import"./CompositeItem-BHJmqDb8.js";import"./ToolbarRootContext-Bfqc1Rf4.js";import"./composite-BNkcDv4u.js";import"./svgIconContainer-CC53kbHO.js";import"./PdfViewerSearchBar-ZnVzlCle.js";import"./chevron-up-DMkim50r.js";import"./chevron-down-B2_IYtaL.js";import"./cross-Bg9KGljm.js";import"./PdfViewerSidebar-BIY0n_dt.js";import"./index-CtOtUzNQ.js";import"./index-BaSJaIuK.js";import"./index-BZZ6jb1f.js";import"./PdfViewerToolbar-DCRXKGhG.js";import"./Button-CEu9_vPj.js";import"./chevron-right-D4eN3Ggp.js";import"./Input-CZ0TTU7d.js";import"./search-BfldJRDn.js";import"./spin-D6Nt8_nF.js";import"./error-3jlDe3tK.js";import"./withOsdkMetrics-DNdzNBP7.js";import"./makeExternalStore-C62oCblT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
