import{j as r,M as s}from"./iframe-DRuc0GBP.js";import{P as p}from"./pdf-viewer-C2AAb6Dz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dc8TkngW.js";import"./preload-helper-CRRYqW21.js";import"./PdfViewer-D5ClNJZJ.js";import"./index-Df25XFZb.js";import"./BasePdfViewer-DHYPMIDV.js";import"./BasePdfViewer.module.css-CfQK7XPC.js";import"./PdfViewerAnnotationLayer-B1NfjflF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DBPfIG13.js";import"./PdfViewerOutlineSidebar-1DoPmVhP.js";import"./PdfViewerSidebarHeader-Cex7h4Kq.js";import"./useBaseUiId-DbcBxDLS.js";import"./useControlled-DhQ1jfam.js";import"./CompositeRoot-BLi7Xp_8.js";import"./CompositeItem-BC6rjLhn.js";import"./ToolbarRootContext-DMBrxqfV.js";import"./composite-DCht-HgF.js";import"./svgIconContainer-8epjwYsu.js";import"./PdfViewerSearchBar-BWPG1RuM.js";import"./chevron-up-Cfjb4lHM.js";import"./chevron-down-Bj7gjeyM.js";import"./cross-C3j-rtHx.js";import"./PdfViewerSidebar-BV_P9UEj.js";import"./index-BUJ8RC2M.js";import"./index-DpJFda_e.js";import"./index-BalUdg1Y.js";import"./PdfViewerToolbar-PBzvZuE6.js";import"./Button-DNV5pzPO.js";import"./chevron-right-CZ3TG2bZ.js";import"./Input-qFxyrE0p.js";import"./search-De5zerSm.js";import"./spin-DQ2pqxWl.js";import"./error-CajMr2N5.js";import"./withOsdkMetrics-BIITkI-U.js";import"./makeExternalStore-DzVXPn5S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
