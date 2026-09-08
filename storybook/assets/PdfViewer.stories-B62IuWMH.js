import{j as r,M as s}from"./iframe-DSHto0DU.js";import{P as p}from"./pdf-viewer-BHPcKYn_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyZu55jl.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-D9ZTv5Rn.js";import"./index-DgEgOLFM.js";import"./BasePdfViewer-tqEIoHWW.js";import"./BasePdfViewer.module.css-CaOmd6cQ.js";import"./PdfViewerAnnotationLayer-HsYoE_e7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QfliC0Gj.js";import"./PdfViewerOutlineSidebar-C-pEtp4S.js";import"./PdfViewerSidebarHeader-COvO2Jso.js";import"./useBaseUiId-C-ni1EUd.js";import"./useControlled-vcfVgJyd.js";import"./CompositeRoot-50pCyPM4.js";import"./CompositeItem-vxVvcXOU.js";import"./ToolbarRootContext-CSFHIoxQ.js";import"./composite-CGWcZn8w.js";import"./svgIconContainer-D1SJmbot.js";import"./PdfViewerSearchBar-D6vVHgUA.js";import"./chevron-up-gtGCZXyv.js";import"./chevron-down-DEDDGssX.js";import"./cross-FFwPOx1g.js";import"./PdfViewerSidebar-CKsToFw-.js";import"./index-D1lPazbO.js";import"./index-Dsj4AUeZ.js";import"./index-Da1D6qV_.js";import"./PdfViewerToolbar-B9buzFu6.js";import"./Button-3LMPugrf.js";import"./chevron-right-CSCGIpzQ.js";import"./Input-KYVV9ro4.js";import"./search-BdBx2XvV.js";import"./spin-SDTMB1bX.js";import"./error-DjYRJjuj.js";import"./withOsdkMetrics-BVxbOnBr.js";import"./makeExternalStore--ixwTB0S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
