import{j as r,M as s}from"./iframe-CWO1fvBo.js";import{P as p}from"./pdf-viewer-DpWXCi-2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVx_yuEp.js";import"./preload-helper-CF_QmvPv.js";import"./PdfRenderer-kTuTUv-a.js";import"./index-BPBU698V.js";import"./PdfViewer-CTT6o59Z.js";import"./PdfViewer.module.css-CFYaVbMK.js";import"./PdfViewerAnnotationLayer-BP7hfSBP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-vHK_ql.js";import"./PdfViewerOutlineSidebar-Bc98wapm.js";import"./PdfViewerSidebarHeader-DQMimEAE.js";import"./useBaseUiId-DM7x9ZDC.js";import"./useControlled-BZAnElmC.js";import"./CompositeRoot-BLcsbREA.js";import"./CompositeItem-D8DaB9iF.js";import"./ToolbarRootContext-C4FQfOjX.js";import"./composite-yBh-VmZz.js";import"./svgIconContainer-BuDMXWHZ.js";import"./PdfViewerSearchBar-BTEZBnG1.js";import"./chevron-up-Br0PsDCF.js";import"./chevron-down-DAr5FmU0.js";import"./cross-C53D70xz.js";import"./PdfViewerSidebar-DRPVuqx3.js";import"./index-CBlgFxGV.js";import"./index-BSFgsXl-.js";import"./index-DNZZq66F.js";import"./PdfViewerToolbar-CjcoIcP6.js";import"./Button-BunOl2O4.js";import"./chevron-right-XlnGsm9s.js";import"./Input-D7ZPj5kI.js";import"./minus-CS4ruBfE.js";import"./search-CZ_y3M4b.js";import"./spin-D94bEIBx.js";import"./error-ConVINU8.js";import"./withOsdkMetrics-C7u0s7n-.js";import"./makeExternalStore-Cmkt9Gtj.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
