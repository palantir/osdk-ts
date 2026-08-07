import{j as r,M as s}from"./iframe-BIj6bFPD.js";import{P as p}from"./pdf-viewer-CnTVMDmx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEDKwP26.js";import"./preload-helper-CnFW70BH.js";import"./PdfRenderer-BGsDeBw-.js";import"./index-EzVNlF2P.js";import"./PdfViewer-D6ziNjw_.js";import"./PdfViewer.module.css-D8CKKRZW.js";import"./PdfViewerAnnotationLayer-CT5L_KI6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MQvOwVn8.js";import"./PdfViewerOutlineSidebar-C5pn2BR8.js";import"./PdfViewerSidebarHeader-DOC8ZePf.js";import"./useBaseUiId-DVJNGTFF.js";import"./useControlled-J3hwkrOU.js";import"./CompositeRoot--Sogg_ho.js";import"./CompositeItem-BCndZLGz.js";import"./ToolbarRootContext-CUP1TrgR.js";import"./composite-COFb-sDn.js";import"./svgIconContainer-DL-G0QrC.js";import"./PdfViewerSearchBar-Da7JaF-r.js";import"./chevron-up-W1DWw2qh.js";import"./chevron-down-BrYXFGIg.js";import"./cross-CIvbz3fr.js";import"./PdfViewerSidebar-6pNMhP6l.js";import"./index-dkrXtuUJ.js";import"./index-Cbfdor1M.js";import"./index-DhR718jz.js";import"./PdfViewerToolbar-CsvlRYN8.js";import"./Button-BGebXm9d.js";import"./chevron-right-CEmfngrm.js";import"./Input-DlOQmL8-.js";import"./search-BeRqVnC2.js";import"./spin-CLfAfgCA.js";import"./error-DibXa5zr.js";import"./withOsdkMetrics-Mx1JK8yZ.js";import"./makeExternalStore-DDikwGdp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
