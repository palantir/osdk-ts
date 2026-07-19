import{j as r,M as s}from"./iframe-HrSYXef6.js";import{P as p}from"./pdf-viewer-CHo4Nwta.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BH-81yMA.js";import"./preload-helper-BScVS8UW.js";import"./PdfRenderer-BxSgJogf.js";import"./index-AWa3BkWB.js";import"./PdfViewer-5a7rP6sn.js";import"./PdfViewer.module.css-Dy1yUMsp.js";import"./PdfViewerAnnotationLayer-B4RGoN-C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGHYZPU_.js";import"./PdfViewerOutlineSidebar-C2BLi9M6.js";import"./PdfViewerSidebarHeader-oi-qgC9p.js";import"./useBaseUiId-CP873lVF.js";import"./useControlled-H7YIdve8.js";import"./CompositeRoot-BRGRahOw.js";import"./CompositeItem-CRiUf8NT.js";import"./ToolbarRootContext-Dyl78ELg.js";import"./composite-Cu2-AIlr.js";import"./svgIconContainer-D1I0WwWy.js";import"./PdfViewerSearchBar-BVy5AB1p.js";import"./chevron-up-Bd09mtzQ.js";import"./chevron-down-CipEir7k.js";import"./cross-BBP-YUQE.js";import"./PdfViewerSidebar-L_vhoI8b.js";import"./index-sYfUvVaf.js";import"./index-qGS5hC5d.js";import"./index-BrjiQCBd.js";import"./PdfViewerToolbar-Bg3mqdLW.js";import"./Button-Bad58QMI.js";import"./chevron-right-C7LCmT1g.js";import"./Input-DfqShC2r.js";import"./search-DLw3eFfX.js";import"./spin-BdOgKQp7.js";import"./error-TbGpn11h.js";import"./withOsdkMetrics-CPFanBGF.js";import"./makeExternalStore-CErrcljM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
