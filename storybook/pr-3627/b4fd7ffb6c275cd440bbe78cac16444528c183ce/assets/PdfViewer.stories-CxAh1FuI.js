import{j as r,M as s}from"./iframe-jd4Px1O2.js";import{P as p}from"./pdf-viewer-CRbyPPCV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fExVlHsG.js";import"./preload-helper-DIuEQ6t2.js";import"./PdfRenderer-DTQeL5nN.js";import"./index-CsSiLkax.js";import"./PdfViewer-_3CMFvZD.js";import"./PdfViewer.module.css-B4vBrVWb.js";import"./PdfViewerAnnotationLayer-CS4o0PXC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuNe-0Ax.js";import"./PdfViewerOutlineSidebar-DgjXiKKk.js";import"./PdfViewerSidebarHeader-Dconm52B.js";import"./useBaseUiId-R1vsz3eJ.js";import"./useControlled-B8hu7sVk.js";import"./CompositeRoot-Bpwot5CP.js";import"./CompositeItem-BJx7uuXs.js";import"./ToolbarRootContext-CkIkhTCP.js";import"./composite--DckC5o-.js";import"./svgIconContainer-CpUasSR5.js";import"./PdfViewerSearchBar-Becb57nj.js";import"./chevron-up-Crs-lSnN.js";import"./chevron-down-Dk2idsm5.js";import"./cross-BxImFyCX.js";import"./PdfViewerSidebar-CWwz6CJf.js";import"./index-BI00Z6TB.js";import"./index-CcCjcq9f.js";import"./index-D9a7isYl.js";import"./PdfViewerToolbar-B9Ncj2-f.js";import"./Button-DYyLfOFR.js";import"./chevron-right-CN-yZIpO.js";import"./Input-DKWFM1Jz.js";import"./search-CrZw4GtA.js";import"./spin-Cpi52keH.js";import"./error-DN-1RvPM.js";import"./withOsdkMetrics-MuC8WW3b.js";import"./makeExternalStore-Xeg4gZrq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
