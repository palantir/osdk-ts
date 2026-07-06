import{j as r,M as s}from"./iframe-B7S14Aos.js";import{P as p}from"./pdf-viewer-DC9klkt1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BfTZZ04g.js";import"./preload-helper-Bf135Psp.js";import"./PdfRenderer-C8S1BbX-.js";import"./index-C_IgEdkh.js";import"./PdfViewer-DLCr0qjq.js";import"./PdfViewer.module.css-soD4hv3X.js";import"./PdfViewerAnnotationLayer-DqgACQvZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CE_VEVGr.js";import"./PdfViewerOutlineSidebar-H0wnybvd.js";import"./PdfViewerSidebarHeader-CeFxMHC1.js";import"./useBaseUiId-DGUZpTmw.js";import"./useControlled-BsU2p9K-.js";import"./CompositeRoot-kEd3LNHU.js";import"./CompositeItem-C7J9saNp.js";import"./ToolbarRootContext-DsZj3SiA.js";import"./composite-5kjVXJgI.js";import"./svgIconContainer-KG3nrgaK.js";import"./PdfViewerSearchBar-Dg0TJANU.js";import"./chevron-up-9Okd6ypD.js";import"./chevron-down-C1prn_ux.js";import"./cross-DeAJXrbb.js";import"./PdfViewerSidebar-CFGG99jo.js";import"./index-ByLKhVd-.js";import"./index-D3yCgQZI.js";import"./index-D3qSs-3e.js";import"./PdfViewerToolbar-CBChM8ZF.js";import"./Button-pGW4ihbJ.js";import"./chevron-right-vgypsWEP.js";import"./Input-CmzlYaiR.js";import"./search-obVquwt6.js";import"./spin-Bb4e7tZ0.js";import"./error-BixB69Os.js";import"./withOsdkMetrics-mIC10yq-.js";import"./makeExternalStore-CVq6FjZk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
