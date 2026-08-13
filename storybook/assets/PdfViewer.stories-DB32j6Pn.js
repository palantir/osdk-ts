import{j as r,M as s}from"./iframe-DCe6Mdm_.js";import{P as p}from"./pdf-viewer-CVmdEtPv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DL1pMQXJ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BlGIuNMQ.js";import"./index-DEsJaMx2.js";import"./PdfViewer-CoTi-yIn.js";import"./PdfViewer.module.css-6qRMYx6H.js";import"./PdfViewerAnnotationLayer-Dw95az6M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PZcIpiFx.js";import"./PdfViewerOutlineSidebar-B8vhNCv9.js";import"./PdfViewerSidebarHeader-Breoilru.js";import"./useBaseUiId-BBf2jJQX.js";import"./useControlled-J08ycTXS.js";import"./CompositeRoot-C6srdTuY.js";import"./CompositeItem-QuRNq9IV.js";import"./ToolbarRootContext-Dg7t3l2c.js";import"./composite-D278LNPr.js";import"./svgIconContainer-DCGhfyJV.js";import"./PdfViewerSearchBar-AP2iX9B4.js";import"./chevron-up-DmgiwKcA.js";import"./chevron-down-1f-nO09j.js";import"./cross-CJsNmyRf.js";import"./PdfViewerSidebar-CW-FDGMS.js";import"./index-C2gC57rZ.js";import"./index-w4e4JQ9Y.js";import"./index-DfEtL9_w.js";import"./PdfViewerToolbar-Cc5Awb3v.js";import"./Button-CMj35CzN.js";import"./chevron-right-BDlnuscR.js";import"./Input-CexuDk3x.js";import"./search-i3wN8XPz.js";import"./spin-DPM6RXPZ.js";import"./error-DDf8VeOI.js";import"./withOsdkMetrics-DaHbZvPF.js";import"./makeExternalStore-Z40vhwY9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
