import{j as r,M as s}from"./iframe-_z3jDROO.js";import{P as p}from"./pdf-viewer-DbXRiVwM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DT9xX_fx.js";import"./preload-helper-Cp-TKz0z.js";import"./PdfRenderer-z0Y_spn0.js";import"./index-Q8EEyY0v.js";import"./PdfViewer-CIffJ6Eg.js";import"./PdfViewer.module.css-DDHtJ-GN.js";import"./PdfViewerAnnotationLayer-Cjl7aYg6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdX0Dl92.js";import"./PdfViewerOutlineSidebar-Dxsk9-20.js";import"./PdfViewerSidebarHeader-DaTOhzyg.js";import"./useBaseUiId-kiHD9n4O.js";import"./useControlled-jrF362GW.js";import"./CompositeRoot-6G42oGen.js";import"./CompositeItem-C1yClhJ6.js";import"./ToolbarRootContext-ClX35K5_.js";import"./composite-C0nd1t90.js";import"./svgIconContainer-B7vtt4qG.js";import"./PdfViewerSearchBar-BYdSHeOu.js";import"./chevron-up-Dww_3jKW.js";import"./chevron-down-DKrfrKEw.js";import"./cross-D6Si-XhJ.js";import"./PdfViewerSidebar-CRiMSfTh.js";import"./index-B39ZDa_b.js";import"./index-DD50tvSO.js";import"./index-BunQhVyv.js";import"./PdfViewerToolbar-BTJnKnlT.js";import"./Button-BM6D-CE6.js";import"./chevron-right-xblMO5dN.js";import"./Input-dTB1h5Gz.js";import"./search-BaaSJoub.js";import"./spin-DiMu7zSz.js";import"./error-CHbuT9qj.js";import"./withOsdkMetrics-BH6dSoSr.js";import"./makeExternalStore-Zu8KmZY0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
