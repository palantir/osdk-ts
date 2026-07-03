import{j as r,M as s}from"./iframe-t9TTBx3O.js";import{P as p}from"./pdf-viewer-AcDBaGYL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2wxH7cX.js";import"./preload-helper-BTVK78Hf.js";import"./PdfRenderer-CBV9wej3.js";import"./index-C4rPRc03.js";import"./PdfViewer-B9kgOLD-.js";import"./PdfViewer.module.css-DLyFGD-X.js";import"./PdfViewerAnnotationLayer-DwPRMCRm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DeqORqzW.js";import"./PdfViewerOutlineSidebar-BuSrToA2.js";import"./PdfViewerSidebarHeader-D9H7IkZF.js";import"./useBaseUiId--fUJLLjc.js";import"./useControlled-r95VK43g.js";import"./CompositeRoot-BnYiDRYL.js";import"./CompositeItem-hZNys6h7.js";import"./ToolbarRootContext-DCBe-3lE.js";import"./composite-B8HA_4Kt.js";import"./svgIconContainer-DnRCoAiO.js";import"./PdfViewerSearchBar-CFw7PqeO.js";import"./chevron-up-CVaqGlDg.js";import"./chevron-down--r_1t3Ap.js";import"./cross-Bou-Rogg.js";import"./PdfViewerSidebar-DTKQ2AEE.js";import"./index-D19hciPE.js";import"./index-C3C7wtTj.js";import"./index-Ba2CP1zg.js";import"./PdfViewerToolbar-DM9hyJzg.js";import"./Button-BKDoReyy.js";import"./chevron-right-BRvgG91U.js";import"./Input-oJupuVco.js";import"./search-BlOD3K4L.js";import"./spin-BEfiFgHS.js";import"./error-BEYVnpIK.js";import"./withOsdkMetrics-Cri9smis.js";import"./makeExternalStore-vtaBhezz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
