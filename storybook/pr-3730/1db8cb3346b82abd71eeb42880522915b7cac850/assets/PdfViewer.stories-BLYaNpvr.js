import{j as r,M as s}from"./iframe-Ct-TSTf4.js";import{P as p}from"./pdf-viewer-DNQgzDeG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ut6E4pnX.js";import"./preload-helper-Chs-M_kI.js";import"./PdfRenderer-RF03nzdj.js";import"./index-DXx_LEB8.js";import"./PdfViewer-BMVWr8Yn.js";import"./PdfViewer.module.css-Deja7J3w.js";import"./PdfViewerAnnotationLayer-CXVvOuvb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_FLBE7Q.js";import"./PdfViewerOutlineSidebar-DCPlPxSJ.js";import"./PdfViewerSidebarHeader-CiO4i-KG.js";import"./useBaseUiId-BVv5au8X.js";import"./useControlled-BC0Cr05M.js";import"./CompositeRoot-BMxFbOHq.js";import"./CompositeItem-DDUvXDtM.js";import"./ToolbarRootContext-CzJN9Tg9.js";import"./composite-eQnjTMS2.js";import"./svgIconContainer-GibNCSph.js";import"./PdfViewerSearchBar-jVCpAGyr.js";import"./chevron-up-Bt2YwcGY.js";import"./chevron-down-Cz6YTiug.js";import"./cross-ArjRnsTp.js";import"./PdfViewerSidebar-CCWA0xnE.js";import"./index-BXqUX4Di.js";import"./index-Ws6usDuy.js";import"./index-D6O9mxxz.js";import"./PdfViewerToolbar-CXzLZl1J.js";import"./Button-CTfjkduN.js";import"./chevron-right-vm8U4Z5G.js";import"./Input-BoNksdiP.js";import"./search-5rXyKs3l.js";import"./spin-BWqgGnt7.js";import"./error-DwinDpqB.js";import"./withOsdkMetrics-D9KuKGm5.js";import"./makeExternalStore-BpaTocvK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
