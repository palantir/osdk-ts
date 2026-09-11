import{j as r,M as s}from"./iframe-gIP5vbeg.js";import{P as p}from"./pdf-viewer-DaoCgGnW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6wVvqFe.js";import"./preload-helper-DCg2y8p9.js";import"./PdfViewer-DxkSNUkx.js";import"./index-Wi5AWfmM.js";import"./BasePdfViewer-BpCSXUSP.js";import"./BasePdfViewer.module.css-CIN1IfLc.js";import"./PdfViewerAnnotationLayer-BU35OA98.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpNZmHUF.js";import"./PdfViewerOutlineSidebar-DdSJWCtj.js";import"./PdfViewerSidebarHeader-C_PwJbnf.js";import"./useBaseUiId-Dr1rdLlf.js";import"./useControlled-Ch-R23iR.js";import"./CompositeRoot-vh8LJivO.js";import"./CompositeItem-GAdV3l7-.js";import"./ToolbarRootContext-B8olE9Qo.js";import"./composite-DMSJBqo2.js";import"./svgIconContainer-DxHht3SG.js";import"./PdfViewerSearchBar-C9XqM0YJ.js";import"./chevron-up-Fc7IP0ti.js";import"./chevron-down-DCLBAa3z.js";import"./cross-B_HnIjdo.js";import"./PdfViewerSidebar-451Oui7L.js";import"./index-TRPDJKbO.js";import"./index-Cj6M27jD.js";import"./index-Dq6-SYm_.js";import"./PdfViewerToolbar-BV7b16qN.js";import"./Button-CcxNlLiB.js";import"./chevron-right-CMrJ8JE4.js";import"./Input-BP15Y0-R.js";import"./search-CUlcmVhj.js";import"./spin-CyS39kzv.js";import"./error-3Pj1FJ1e.js";import"./withOsdkMetrics-CUsP9g0j.js";import"./makeExternalStore-CwiGseBr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
