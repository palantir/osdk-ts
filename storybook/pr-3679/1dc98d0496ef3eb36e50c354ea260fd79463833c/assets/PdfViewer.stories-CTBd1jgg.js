import{j as r,M as s}from"./iframe-cDHMUf1F.js";import{P as p}from"./pdf-viewer-yt80Hx3y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CGPTUlSl.js";import"./preload-helper-Bsvc15g1.js";import"./PdfRenderer-x3WE2Rwz.js";import"./index-BB1SOIbb.js";import"./PdfViewer-Cdl4xmOp.js";import"./PdfViewer.module.css-BYl1fQtO.js";import"./PdfViewerAnnotationLayer-DoYdJpTU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BhG4agzi.js";import"./PdfViewerOutlineSidebar-Cf5DR_er.js";import"./PdfViewerSidebarHeader-B4bp-Bhz.js";import"./useBaseUiId-DCzNJ-nW.js";import"./useControlled-BlNT2JSa.js";import"./CompositeRoot-CGtdmozk.js";import"./CompositeItem-DkupiegZ.js";import"./ToolbarRootContext-sWq0SK_m.js";import"./composite-B2I1dKs8.js";import"./svgIconContainer-MVxB4RAP.js";import"./PdfViewerSearchBar-z2PhU_of.js";import"./chevron-up-G5o60ujf.js";import"./chevron-down-C5qE43wO.js";import"./cross-P0qExKXN.js";import"./PdfViewerSidebar-BNZhqx61.js";import"./index-BBsVv4oR.js";import"./index-BmJ1z2Uc.js";import"./index-1GJkM2hk.js";import"./PdfViewerToolbar-BsckuQ8F.js";import"./Button-DnNWadzY.js";import"./chevron-right-a1OZF3YI.js";import"./Input-B7l3I1I-.js";import"./search-CaZjzeYa.js";import"./spin-aJwW-tHi.js";import"./error-DUNRbXEF.js";import"./withOsdkMetrics-BnjnR1i-.js";import"./makeExternalStore-Bl0HAa3G.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
