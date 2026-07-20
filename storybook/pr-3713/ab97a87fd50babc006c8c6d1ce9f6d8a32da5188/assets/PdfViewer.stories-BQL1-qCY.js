import{j as r,M as s}from"./iframe-DH5YCN2j.js";import{P as p}from"./pdf-viewer-BC7ckl7b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dl-0og65.js";import"./preload-helper-DoLZtznl.js";import"./PdfRenderer-Br-TwsMs.js";import"./index-_qf75Onr.js";import"./PdfViewer-CvUYeiFS.js";import"./PdfViewer.module.css-Dea95HiF.js";import"./PdfViewerAnnotationLayer-BmC-YFBG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BGmFZid9.js";import"./PdfViewerOutlineSidebar-CgwneWWu.js";import"./PdfViewerSidebarHeader-CmggJGYo.js";import"./useBaseUiId-BbdPl4JJ.js";import"./useControlled-DR13xq1i.js";import"./CompositeRoot-Ce6dgwWt.js";import"./CompositeItem-CEroXGJN.js";import"./ToolbarRootContext-7yy9e54A.js";import"./composite-DlaEkCZH.js";import"./svgIconContainer-DCm06bfe.js";import"./PdfViewerSearchBar-Bt4KoDic.js";import"./chevron-up-D5feLm7g.js";import"./chevron-down-BioSFIuk.js";import"./cross-sheK920l.js";import"./PdfViewerSidebar-ZnY1-uFN.js";import"./index-BPKS3fVr.js";import"./index-C4rwa2_n.js";import"./index-DTdwmsEM.js";import"./PdfViewerToolbar-pheLg8xq.js";import"./Button-BWYkYhEl.js";import"./chevron-right-DK1Gj8w1.js";import"./Input-C7lIrWzz.js";import"./search-nrDeCzJk.js";import"./spin-CH0xTbKO.js";import"./error-wfC3mCU4.js";import"./withOsdkMetrics-CG4b5vbn.js";import"./makeExternalStore-C_s2klxa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
