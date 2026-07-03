import{j as r,M as s}from"./iframe-jMWcMx3M.js";import{P as p}from"./pdf-viewer-c6WTSTuz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KGfpsQZS.js";import"./preload-helper-CSXSsBVj.js";import"./PdfRenderer-Di3F36Lv.js";import"./index-CNFmk-Ka.js";import"./PdfViewer-1a9AvVin.js";import"./PdfViewer.module.css-DrYS9BWP.js";import"./PdfViewerAnnotationLayer-Bva3-tRi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cecr5Kkz.js";import"./PdfViewerOutlineSidebar-DwcEiYdW.js";import"./PdfViewerSidebarHeader-BizDUV7q.js";import"./useBaseUiId-BzPi_F_r.js";import"./useControlled-DfdvD25L.js";import"./CompositeRoot-Cuk-X0qo.js";import"./CompositeItem-24qPgnKd.js";import"./ToolbarRootContext-B_AoYUT0.js";import"./composite-CsXyl166.js";import"./svgIconContainer-Cl_c0nbT.js";import"./PdfViewerSearchBar-BaMEoaak.js";import"./chevron-up-C6pzktL6.js";import"./chevron-down-CQNSuwwo.js";import"./cross-CGegxKx_.js";import"./PdfViewerSidebar-CziUFay4.js";import"./index-DLeNEXQ6.js";import"./index-DXrPGVIO.js";import"./index-ILeGXsSD.js";import"./PdfViewerToolbar-iDKrAqbQ.js";import"./Button-DwXiKTO2.js";import"./chevron-right-Bbwv1yy_.js";import"./Input-DFBBZ04U.js";import"./search-CErA-aqQ.js";import"./spin-DKj41ccV.js";import"./error-DMe8Y5ev.js";import"./withOsdkMetrics-Bd6JOpY_.js";import"./makeExternalStore-DnspD3NQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
