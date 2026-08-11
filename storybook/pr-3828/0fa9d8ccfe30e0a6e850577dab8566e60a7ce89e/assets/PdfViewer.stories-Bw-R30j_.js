import{j as r,M as s}from"./iframe-BYI6-aLw.js";import{P as p}from"./pdf-viewer-DaMdrFqL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-031Qx_Sh.js";import"./preload-helper-BtPj2gQg.js";import"./PdfRenderer-SBEiRAhm.js";import"./index-DQ7c9deP.js";import"./PdfViewer-i8rT4V7Y.js";import"./PdfViewer.module.css-C4HIOpPa.js";import"./PdfViewerAnnotationLayer-DYXjvuek.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGam2Bkp.js";import"./PdfViewerOutlineSidebar-BLAYlsLM.js";import"./PdfViewerSidebarHeader-HgBKoJqr.js";import"./useBaseUiId-1B5Tp9l6.js";import"./useControlled-BZTNruXv.js";import"./CompositeRoot-CK-Amh3_.js";import"./CompositeItem-DfD4viOC.js";import"./ToolbarRootContext-D3speQHo.js";import"./composite-CifwDKrs.js";import"./svgIconContainer-BBpZUtxO.js";import"./PdfViewerSearchBar-B37e1YOM.js";import"./chevron-up-CVyFRGOj.js";import"./chevron-down-BDf7yWi1.js";import"./cross-DFx6KUE4.js";import"./PdfViewerSidebar-CRG8WIfR.js";import"./index-ClnbUonH.js";import"./index-jdHVExti.js";import"./index-DK8-M2ZQ.js";import"./PdfViewerToolbar-oQoGEhQ3.js";import"./Button-CRUJ4RF7.js";import"./chevron-right-C_iiutdz.js";import"./Input-BkuGir8f.js";import"./search-CaXxmA8i.js";import"./spin-axpdXqPu.js";import"./error-DLiUuB2F.js";import"./withOsdkMetrics-WrHGmE29.js";import"./makeExternalStore-KpAAX1cn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
