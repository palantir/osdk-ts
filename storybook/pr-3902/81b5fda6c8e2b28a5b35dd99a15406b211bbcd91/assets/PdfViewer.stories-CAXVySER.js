import{j as r,M as s}from"./iframe-DabUi6cR.js";import{P as p}from"./pdf-viewer-Wwygtddn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTr_46NH.js";import"./preload-helper-PB9vrEtI.js";import"./PdfViewer-Dh5WK_3N.js";import"./index-KZryrGBD.js";import"./BasePdfViewer-BfxKAEBc.js";import"./BasePdfViewer.module.css-BdIanlMw.js";import"./PdfViewerAnnotationLayer-CqqnajAR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVajyriA.js";import"./PdfViewerOutlineSidebar-DFe1MZXJ.js";import"./PdfViewerSidebarHeader-C2wqQbQw.js";import"./useBaseUiId-BcNRpk_N.js";import"./useControlled-B3zNFnxK.js";import"./CompositeRoot-DoqKkYjG.js";import"./CompositeItem-B-6r7oQp.js";import"./ToolbarRootContext-B5UjH-Re.js";import"./composite-UkAyjKG8.js";import"./svgIconContainer-Cp8yewAh.js";import"./PdfViewerSearchBar-B6outZ95.js";import"./chevron-up-C63IXcvU.js";import"./chevron-down-D7NMZO3V.js";import"./cross-DpDPaZbd.js";import"./PdfViewerSidebar-DtEWhjmi.js";import"./index-CWyEHriK.js";import"./index-CwspG28F.js";import"./index-BAuYPfKF.js";import"./PdfViewerToolbar-SWNkXiiX.js";import"./Button-CKSInnXQ.js";import"./chevron-right-A9uBeEd6.js";import"./Input-DrQQ_TlW.js";import"./search-D7BhxQDO.js";import"./spin-BZ6duLyu.js";import"./error-DzTcu7K-.js";import"./withOsdkMetrics-DxxH3flz.js";import"./makeExternalStore-BVTB5n8V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
