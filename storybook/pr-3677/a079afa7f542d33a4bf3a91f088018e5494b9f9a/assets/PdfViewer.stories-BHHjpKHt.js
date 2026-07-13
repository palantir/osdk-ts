import{j as r,M as s}from"./iframe-BrEQ26tz.js";import{P as p}from"./pdf-viewer-BKiFnwPG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bz6bgvor.js";import"./preload-helper-CXuZccyG.js";import"./PdfRenderer-D-QIVXic.js";import"./index-0puuYqU-.js";import"./PdfViewer-D-91XRmL.js";import"./PdfViewer.module.css-D-HkOA9A.js";import"./PdfViewerAnnotationLayer-DZk1HCiC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_MglZyP.js";import"./PdfViewerOutlineSidebar-UJDUdqMT.js";import"./PdfViewerSidebarHeader-vcfCmlH7.js";import"./useBaseUiId-1p3qHLXR.js";import"./useControlled-BfKXnzXK.js";import"./CompositeRoot-DjEK-l_j.js";import"./CompositeItem-Beq2XUPk.js";import"./ToolbarRootContext-fodSfPt7.js";import"./composite-3K1Hj1a6.js";import"./svgIconContainer-J7EmXi3t.js";import"./PdfViewerSearchBar-BJFF-E7n.js";import"./chevron-up-oC_L9mnM.js";import"./chevron-down-DCizwKLE.js";import"./cross-DQ7HK-Xf.js";import"./PdfViewerSidebar-MmZM1hmj.js";import"./index-DxlA-ifY.js";import"./index-vaMM0mYm.js";import"./index-CQhdakj7.js";import"./PdfViewerToolbar-D7tuF7xN.js";import"./Button-Cwz5OZa6.js";import"./chevron-right-C6nlgfdr.js";import"./Input-BksaE-tT.js";import"./search-sX3RsEDw.js";import"./spin-DyCfvKwI.js";import"./error-CjGSNoEY.js";import"./withOsdkMetrics-BfTXVCQt.js";import"./makeExternalStore-DFRDjfb3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
