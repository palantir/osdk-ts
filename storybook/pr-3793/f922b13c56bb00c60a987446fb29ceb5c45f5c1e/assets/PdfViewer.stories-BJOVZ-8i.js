import{j as r,M as s}from"./iframe-DZKZRMfI.js";import{P as p}from"./pdf-viewer-CxuCPmqN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSFhp8f4.js";import"./preload-helper-CyDM0kIy.js";import"./PdfRenderer-DevEEtSk.js";import"./index-UHNo6JXh.js";import"./PdfViewer-CZcw1xbP.js";import"./PdfViewer.module.css-DqbqqyIU.js";import"./PdfViewerAnnotationLayer-Al6Yrx2b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJJSGQl7.js";import"./PdfViewerOutlineSidebar-dFimKJGH.js";import"./PdfViewerSidebarHeader-DJJmTKoW.js";import"./useBaseUiId-BrAP3Vhg.js";import"./useControlled-Dg2uTPRC.js";import"./CompositeRoot-Dv8oASqP.js";import"./CompositeItem-BToRPTQx.js";import"./ToolbarRootContext-DRj1zGHd.js";import"./composite-Wbt-b0Wx.js";import"./svgIconContainer-C1JqEOuF.js";import"./PdfViewerSearchBar-oOLNziM_.js";import"./chevron-up-Br0mR7oz.js";import"./chevron-down-B-VJcggY.js";import"./cross-7qoEAdfk.js";import"./PdfViewerSidebar-XiAb9Nye.js";import"./index-CzSoEYKc.js";import"./index-BcZyi5e5.js";import"./index-GUxQVV6o.js";import"./PdfViewerToolbar-CeH4jBjm.js";import"./Button-Clu6RzPE.js";import"./chevron-right-BwsNoVmw.js";import"./Input-DAp8ZrwB.js";import"./search-BMN_5avI.js";import"./spin-B_ZkpKaW.js";import"./error-BGz2U_dj.js";import"./withOsdkMetrics-hhq9mBBz.js";import"./makeExternalStore-BdBWg-q-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
