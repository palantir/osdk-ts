import{j as r,M as s}from"./iframe-DzwZADhG.js";import{P as p}from"./pdf-viewer-1WREiwll.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBHMQWb1.js";import"./preload-helper-D4CIUPhb.js";import"./PdfViewer-BVorHaGW.js";import"./index-bPezx-Jx.js";import"./BasePdfViewer-BnnvCBX9.js";import"./BasePdfViewer.module.css-D8q3Yipa.js";import"./PdfViewerAnnotationLayer-BFXCFDas.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dn9rg_Kv.js";import"./PdfViewerOutlineSidebar-B537Ynk6.js";import"./PdfViewerSidebarHeader-4-lcXlF6.js";import"./useBaseUiId-DCeowPEc.js";import"./useControlled-BKgOzc4N.js";import"./CompositeRoot-DU4J_RW3.js";import"./CompositeItem-Cis4rFWY.js";import"./ToolbarRootContext-DiUMk1ef.js";import"./composite-C5aR63In.js";import"./svgIconContainer-BcCLnS_P.js";import"./PdfViewerSearchBar-CcU2J5qB.js";import"./chevron-up-C5g2LH0L.js";import"./chevron-down-CZ1AUZYm.js";import"./cross-CyC5zJCO.js";import"./PdfViewerSidebar-BqxUhwoK.js";import"./index-D8Hs_QlL.js";import"./index-C3Zy7bdQ.js";import"./index-60H3em-G.js";import"./PdfViewerToolbar-CX956oEf.js";import"./Button-C5a400vo.js";import"./chevron-right-CcPU8Yxy.js";import"./Input-DGm0m1Rw.js";import"./search-BQh3drJY.js";import"./spin-D1XwUdhC.js";import"./error-CM-fSgTg.js";import"./withOsdkMetrics-BnNJyFKx.js";import"./makeExternalStore-BH_h44UZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
