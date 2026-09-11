import{j as r,M as s}from"./iframe-ooeZhevd.js";import{P as p}from"./pdf-viewer-CHJF3yPy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLrXydis.js";import"./preload-helper-BnwSBXhQ.js";import"./PdfViewer-BXxO2w9x.js";import"./index-Opepl_3W.js";import"./BasePdfViewer-CO6UzYWz.js";import"./BasePdfViewer.module.css-C1rakktn.js";import"./PdfViewerAnnotationLayer-DoQ7D5ug.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-X8NbXy13.js";import"./PdfViewerOutlineSidebar-COcqNTQC.js";import"./PdfViewerSidebarHeader-Bnnlf1vb.js";import"./useBaseUiId-C4sL4iAi.js";import"./useControlled-Gm0PZX0G.js";import"./CompositeRoot-Mhsb_vEB.js";import"./CompositeItem-CeghUTrN.js";import"./ToolbarRootContext-DJcBXYiU.js";import"./composite-DKgZ9LEy.js";import"./svgIconContainer-ibzsHUTw.js";import"./PdfViewerSearchBar-BH_Jgyrx.js";import"./chevron-up-D1TV3JWh.js";import"./chevron-down-BdjihE2B.js";import"./cross-iJZIJRn7.js";import"./PdfViewerSidebar-psSBhm4n.js";import"./index-BYF2kMrC.js";import"./index-CYHbLiIc.js";import"./index-BCos5_Jn.js";import"./PdfViewerToolbar-BlQzwg8Z.js";import"./Button-DqC8xzBf.js";import"./chevron-right-BMB7DVfl.js";import"./Input-ChnU8vn2.js";import"./search-DiIwZt1O.js";import"./spin-CschUGDs.js";import"./error-Cy4V0hs4.js";import"./withOsdkMetrics-BKB5x-AQ.js";import"./makeExternalStore-BQ6V8XYd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
