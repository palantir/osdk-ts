import{j as r,M as s}from"./iframe-BxdZkH6A.js";import{P as p}from"./pdf-viewer-C2SzWfBd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5N1eZAJW.js";import"./preload-helper-kyeI2UBP.js";import"./PdfRenderer-DpRBigMA.js";import"./index-BpFtrvBx.js";import"./PdfViewer-TbOzIrzo.js";import"./PdfViewer.module.css-BtPkUdQy.js";import"./PdfViewerAnnotationLayer-DB3Em2q1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_YYtsJ1m.js";import"./PdfViewerOutlineSidebar-DOpjnG_E.js";import"./PdfViewerSidebarHeader-DiZGg4RU.js";import"./useBaseUiId-BIFZVZoh.js";import"./useControlled-C2uta6Np.js";import"./CompositeRoot-e-X4g5em.js";import"./CompositeItem-DwH973Jd.js";import"./ToolbarRootContext-CiIuJ2M6.js";import"./composite-BUhRqbHb.js";import"./svgIconContainer-DW8Dw9Bg.js";import"./PdfViewerSearchBar-CW4wgRkT.js";import"./chevron-up-jWjhlOy4.js";import"./chevron-down-lW7PZNMT.js";import"./cross-C7Vfl4hr.js";import"./PdfViewerSidebar-D_Z0RMkL.js";import"./index-CSJ77PwE.js";import"./index-hl-eFwnB.js";import"./index-CFu72cYJ.js";import"./PdfViewerToolbar-5_gzXE7z.js";import"./Button-DJoHiVcG.js";import"./chevron-right-DjLG0ni0.js";import"./Input-CJnPWafs.js";import"./search-rKvDiiHV.js";import"./spin-9aAhWv0o.js";import"./error-DJDCeW5s.js";import"./withOsdkMetrics-BVCViJi2.js";import"./makeExternalStore-B2S42JoF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
