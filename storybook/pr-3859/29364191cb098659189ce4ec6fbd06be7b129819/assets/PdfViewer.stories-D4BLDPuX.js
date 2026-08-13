import{j as r,M as s}from"./iframe-ClxO4NjR.js";import{P as p}from"./pdf-viewer-CcZSI1n8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6S5ghXO.js";import"./preload-helper-C0zwqbnX.js";import"./PdfRenderer-BXY3A14G.js";import"./index-BWCYhOnm.js";import"./PdfViewer-0og5mdUJ.js";import"./PdfViewer.module.css-BBIpk1kH.js";import"./PdfViewerAnnotationLayer-BK9JNClO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C3-CIoh4.js";import"./PdfViewerOutlineSidebar-BFDg9AF0.js";import"./PdfViewerSidebarHeader-A43jV1NQ.js";import"./useBaseUiId-mbHRa4ig.js";import"./useControlled-CBuD11wc.js";import"./CompositeRoot-D8GbAxWM.js";import"./CompositeItem-CIWFMAgC.js";import"./ToolbarRootContext-CCOvFsGt.js";import"./composite-B__OAHDn.js";import"./svgIconContainer-BvC_SFje.js";import"./PdfViewerSearchBar-B6CWLDqd.js";import"./chevron-up-DwfMvogK.js";import"./chevron-down-BXi8nOG0.js";import"./cross-DXyr0bNz.js";import"./PdfViewerSidebar-ZY7KWYAH.js";import"./index-D92ajlqI.js";import"./index-BZg1jqES.js";import"./index-DE2Njq5W.js";import"./PdfViewerToolbar-D3R27hKT.js";import"./Button-CrUVT3U1.js";import"./chevron-right-DwydP4LR.js";import"./Input-CDMrsEOr.js";import"./search-C0Wbe_TX.js";import"./spin-CQFEfD3M.js";import"./error-97F9Ilv7.js";import"./withOsdkMetrics-CfQvwroh.js";import"./makeExternalStore-CFCzzqiP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
