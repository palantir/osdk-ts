import{j as r,M as s}from"./iframe-DDyklOqc.js";import{P as p}from"./pdf-viewer-D1dlQcpO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQZ63E8p.js";import"./preload-helper-zGI7Yyr8.js";import"./PdfRenderer-D1LX1sFP.js";import"./index-Cq1GlceI.js";import"./PdfViewer-BdUzhUJM.js";import"./PdfViewer.module.css-B5NcWrP9.js";import"./PdfViewerAnnotationLayer-BaITlQjp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bsnj8y9v.js";import"./PdfViewerOutlineSidebar-BAIXgP3p.js";import"./PdfViewerSidebarHeader-CzC4so63.js";import"./useBaseUiId-CL2qao4v.js";import"./useControlled-cTNIA0eo.js";import"./CompositeRoot-CivD1euM.js";import"./CompositeItem-5eebd8XY.js";import"./ToolbarRootContext-D_6EPlUH.js";import"./composite-DjHmc_aQ.js";import"./svgIconContainer-DYYBsVyS.js";import"./PdfViewerSearchBar-DNy8OVkQ.js";import"./chevron-up-fCrHJNs-.js";import"./chevron-down-1ywypSY9.js";import"./cross-cqgsxvxK.js";import"./PdfViewerSidebar-CDK0d6UH.js";import"./index-BCJ7CEmI.js";import"./index-Hm27E7QB.js";import"./index-NsWDHRkU.js";import"./PdfViewerToolbar-D1FfvR-b.js";import"./Button-LADwC7On.js";import"./chevron-right-CgTqV_6Q.js";import"./Input-D2DBw9lp.js";import"./search-C4C3nIjd.js";import"./spin-VFEtH1A3.js";import"./error-LXH3sKTV.js";import"./withOsdkMetrics-D9G2IFka.js";import"./makeExternalStore-CLRDsfbG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
