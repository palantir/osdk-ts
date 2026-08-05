import{j as r,M as s}from"./iframe-DlsSxhci.js";import{P as p}from"./pdf-viewer-DrW65x_F.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BG4HTmoR.js";import"./preload-helper-C-s1U77H.js";import"./PdfRenderer-CzMwWjvj.js";import"./index-cP9eqqta.js";import"./PdfViewer-Cn6_p0Cp.js";import"./PdfViewer.module.css-BhMD4vfp.js";import"./PdfViewerAnnotationLayer-DsPhHJLg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-By_W46as.js";import"./PdfViewerOutlineSidebar-BUzHyqdo.js";import"./PdfViewerSidebarHeader-DH8b0GNj.js";import"./useBaseUiId-C02HFIUM.js";import"./useControlled-Z7ZWa5VR.js";import"./CompositeRoot-D5AoPV9I.js";import"./CompositeItem-drMwpLA_.js";import"./ToolbarRootContext-vkAvhQwM.js";import"./composite-H8SSz-ne.js";import"./svgIconContainer-DPjUtDUg.js";import"./PdfViewerSearchBar-UpwilyMe.js";import"./chevron-up-B1y54rlh.js";import"./chevron-down-DonJjnvl.js";import"./cross-C60t9tFZ.js";import"./PdfViewerSidebar-BTSFCUaD.js";import"./index-CBkUqlyA.js";import"./index-cF6qZyvr.js";import"./index-DNVt94aI.js";import"./PdfViewerToolbar-BOf4iANW.js";import"./Button-CxITngjL.js";import"./chevron-right-BAKyh-1G.js";import"./Input-Ci6C2hr-.js";import"./search-BqsY1PeE.js";import"./spin-DOhDq0nd.js";import"./error-IK-rXp7z.js";import"./withOsdkMetrics-Bw6076Jo.js";import"./makeExternalStore-CH2NQdic.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
