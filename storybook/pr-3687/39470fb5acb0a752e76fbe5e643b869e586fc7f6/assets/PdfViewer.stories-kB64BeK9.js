import{j as r,M as s}from"./iframe-BQdKTA3B.js";import{P as p}from"./pdf-viewer-CclPH7FS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CNbNRfbr.js";import"./preload-helper-D6pDrBrI.js";import"./PdfRenderer-BscXqAm2.js";import"./index-yRrmqH44.js";import"./PdfViewer-Cq8OdHMk.js";import"./PdfViewer.module.css-BY4ayZj9.js";import"./PdfViewerAnnotationLayer-LM4oqJ7f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzdBvAxa.js";import"./PdfViewerOutlineSidebar-QdbnHvnZ.js";import"./PdfViewerSidebarHeader-BZxUW-fI.js";import"./useBaseUiId-AbGP9aXI.js";import"./useControlled-DA1gI_2t.js";import"./CompositeRoot-iCmiveiu.js";import"./CompositeItem-BjGWU9xA.js";import"./ToolbarRootContext-D6hSTuri.js";import"./composite-BtNcypUO.js";import"./svgIconContainer-zPLSAFiw.js";import"./PdfViewerSearchBar-DPYniuV9.js";import"./chevron-up-D9l3XttX.js";import"./chevron-down-DXrq4IEb.js";import"./cross-CHRhgEve.js";import"./PdfViewerSidebar-BDIfh1-v.js";import"./index-Duh_3BMp.js";import"./index-ClaWqMrq.js";import"./index-Cvi1Jpje.js";import"./PdfViewerToolbar-eil6oNvg.js";import"./Button-BN0G4ykr.js";import"./chevron-right-BO1suRJ9.js";import"./Input-B1zZBTfB.js";import"./search-BD9Xz5zR.js";import"./spin-Q-pADPa0.js";import"./error-C9pGDhKB.js";import"./withOsdkMetrics-CLpE56yC.js";import"./makeExternalStore-BmyKLWUH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
