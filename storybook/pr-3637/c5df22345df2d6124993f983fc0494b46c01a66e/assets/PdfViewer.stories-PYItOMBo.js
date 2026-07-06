import{j as r,M as s}from"./iframe-imDcv3EE.js";import{P as p}from"./pdf-viewer-CKUf2jEt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bpj5ZdRE.js";import"./preload-helper-CjCSWK-q.js";import"./PdfRenderer-BbLYCOhr.js";import"./index-C2OczkEn.js";import"./PdfViewer-DouG84BP.js";import"./PdfViewer.module.css-mzBcMaYL.js";import"./PdfViewerAnnotationLayer-BONBhQvx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D66SngLc.js";import"./PdfViewerOutlineSidebar-C7ITq2l5.js";import"./PdfViewerSidebarHeader-CPfpRk8T.js";import"./useBaseUiId-D2KkWekG.js";import"./useControlled-BKI12usK.js";import"./CompositeRoot-bwwEtNeA.js";import"./CompositeItem-DmHakhaD.js";import"./ToolbarRootContext-oIfP4tq4.js";import"./composite-8p9Up6Ka.js";import"./svgIconContainer-BOc0yvFF.js";import"./PdfViewerSearchBar-B9uBqxfT.js";import"./chevron-up-Ds9g4kwl.js";import"./chevron-down-9lO7rILy.js";import"./cross-CPQt21ib.js";import"./PdfViewerSidebar-BkLUJ2gb.js";import"./index-DpAblQg1.js";import"./index-Dfldg5-W.js";import"./index-BM76lNlW.js";import"./PdfViewerToolbar-DT6QH3jX.js";import"./Button-BnEd-1lG.js";import"./chevron-right-C4Xq7vHE.js";import"./Input-dYWTrWFv.js";import"./search-DzJfoJ0q.js";import"./spin-1oIH1dK7.js";import"./error-C367ak0g.js";import"./withOsdkMetrics-BdGcualC.js";import"./makeExternalStore-BHc2qmYS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
