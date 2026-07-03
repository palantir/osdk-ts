import{j as r,M as s}from"./iframe-BOrZOH79.js";import{P as p}from"./pdf-viewer-CCEkfNJg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyWQAE2a.js";import"./preload-helper-khfNwF8y.js";import"./PdfRenderer-bi1zwSPP.js";import"./index-OpS2NLnD.js";import"./PdfViewer-ZK5YuxuJ.js";import"./PdfViewer.module.css-CmGjufvL.js";import"./PdfViewerAnnotationLayer-BaaJHaDG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1SReXHy.js";import"./PdfViewerOutlineSidebar-CnUd4pZc.js";import"./PdfViewerSidebarHeader-oPMwYC4R.js";import"./useBaseUiId-DAWJ6vhm.js";import"./useControlled-DPZKFoRo.js";import"./CompositeRoot-D2o5sp0p.js";import"./CompositeItem-DvdL8HCm.js";import"./ToolbarRootContext-CHp8HRoD.js";import"./composite-psPfsiUD.js";import"./svgIconContainer-CMXfsOVq.js";import"./PdfViewerSearchBar-CWXyVpLs.js";import"./chevron-up-BUjejnGY.js";import"./chevron-down-CsRdFZuq.js";import"./cross-UxVdD4yY.js";import"./PdfViewerSidebar-BZPUxXFI.js";import"./index-DApebEpM.js";import"./index-5ZZLI3HR.js";import"./index-C2B3qSMb.js";import"./PdfViewerToolbar-CJY7NbAI.js";import"./Button-DSYtuHzp.js";import"./chevron-right-CGWYvk6_.js";import"./Input-B1DTLM-E.js";import"./search-DmJUhD9Z.js";import"./spin-Cw0PLFbN.js";import"./error-DlL9jGSd.js";import"./withOsdkMetrics-DLG4JOdP.js";import"./makeExternalStore-VMftzzJI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
