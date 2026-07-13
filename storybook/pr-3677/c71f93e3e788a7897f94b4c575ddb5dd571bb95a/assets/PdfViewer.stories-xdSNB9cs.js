import{j as r,M as s}from"./iframe-Ct5U6xeR.js";import{P as p}from"./pdf-viewer-Cx9IngP-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGxGPaX9.js";import"./preload-helper-CdzdMHdl.js";import"./PdfRenderer-D9DrqoS-.js";import"./index-Dgl4nJuA.js";import"./PdfViewer-DEvgISPn.js";import"./PdfViewer.module.css-KrbDgVWH.js";import"./PdfViewerAnnotationLayer-bMkuO3nX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DXS00RNq.js";import"./PdfViewerOutlineSidebar-qx45Oqtq.js";import"./PdfViewerSidebarHeader-BDogZOAt.js";import"./useBaseUiId-nrauk7OM.js";import"./useControlled-BAy3aki5.js";import"./CompositeRoot-BZwUfGnt.js";import"./CompositeItem-BLgRRv78.js";import"./ToolbarRootContext-DWeXieT0.js";import"./composite-ecDtriP6.js";import"./svgIconContainer-CTihE-cS.js";import"./PdfViewerSearchBar-byr09-U4.js";import"./chevron-up-De0VEo-R.js";import"./chevron-down-CRq_s3Fv.js";import"./cross-CFO-dET5.js";import"./PdfViewerSidebar-CmO1B4A-.js";import"./index-BFmQGs5j.js";import"./index-lLm2r21o.js";import"./index-mpVEuWzZ.js";import"./PdfViewerToolbar-QSruXkKu.js";import"./Button-BTJJpdUb.js";import"./chevron-right-B7j6PuHs.js";import"./Input-COl4G5TA.js";import"./search-BvDZFYef.js";import"./spin-DDPdZtw8.js";import"./error-u64wl0pz.js";import"./withOsdkMetrics-B7UuXrPe.js";import"./makeExternalStore-CYKQyVfe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
