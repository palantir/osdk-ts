import{j as r,M as s}from"./iframe-C3ALe4XI.js";import{P as p}from"./pdf-viewer-mKvIou3o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DX22v1Rn.js";import"./preload-helper-B9j09Kt9.js";import"./PdfRenderer-Ci8phgjx.js";import"./index-BKEuSw5B.js";import"./PdfViewer-CsARtpBK.js";import"./PdfViewer.module.css-CBqn3Zma.js";import"./PdfViewerAnnotationLayer-DJUqgA46.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CP9ZaPw_.js";import"./PdfViewerOutlineSidebar-DeQeux2X.js";import"./PdfViewerSidebarHeader-DFnFFcgM.js";import"./useBaseUiId-BSt1DJMO.js";import"./useControlled-0I4c4VXm.js";import"./CompositeRoot-ClfzYjSV.js";import"./CompositeItem-BM9OL0D5.js";import"./ToolbarRootContext-DNoY9ks9.js";import"./composite-DeQnDke6.js";import"./svgIconContainer-BzK9nnYn.js";import"./PdfViewerSearchBar-BIA4CEMw.js";import"./chevron-up-258sz72W.js";import"./chevron-down-CUMOZsgH.js";import"./cross-BPeYQOFT.js";import"./PdfViewerSidebar-BA9Z-cyI.js";import"./index-youBsOyB.js";import"./index-Cuwjur7y.js";import"./index-B38kr0Il.js";import"./PdfViewerToolbar-CL9hn1_i.js";import"./Button-BxW1qJC_.js";import"./chevron-right-DhWduSry.js";import"./Input-CYYeu1Fk.js";import"./search-OQfzWaBH.js";import"./spin-C9gib1zC.js";import"./error-BWQuAm4M.js";import"./withOsdkMetrics-BH6CmtMf.js";import"./makeExternalStore-B52bRWSj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
