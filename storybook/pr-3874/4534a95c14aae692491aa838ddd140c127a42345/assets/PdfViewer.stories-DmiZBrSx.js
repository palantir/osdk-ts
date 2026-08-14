import{j as r,M as s}from"./iframe-Ba8PHYqF.js";import{P as p}from"./pdf-viewer-BPv352ym.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4lasydJ.js";import"./preload-helper-VSCHNqrc.js";import"./PdfViewer-CkpLgIOI.js";import"./index-CYz5sxm-.js";import"./BasePdfViewer-D0NIps5f.js";import"./BasePdfViewer.module.css-T5bo--U3.js";import"./PdfViewerAnnotationLayer-BzO_2RRk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C--KA1-j.js";import"./PdfViewerOutlineSidebar-pjPkEC_6.js";import"./PdfViewerSidebarHeader-Czfjlj8Q.js";import"./useBaseUiId-CM4KZ4gx.js";import"./useControlled-df092o7d.js";import"./CompositeRoot-CLzFPR5I.js";import"./CompositeItem-D3oTZHnf.js";import"./ToolbarRootContext-ClpWLSom.js";import"./composite-C7C0lYaE.js";import"./svgIconContainer-D3Vq6lhO.js";import"./PdfViewerSearchBar-lx3QZ9Is.js";import"./chevron-up-Bg8apwSE.js";import"./chevron-down-DcdnJMhC.js";import"./cross-BMuQzm1w.js";import"./PdfViewerSidebar-C5etUlSA.js";import"./index-CqwCmP3l.js";import"./index-7A66RV6v.js";import"./index-BH--vJui.js";import"./PdfViewerToolbar-BBAf7Uwn.js";import"./Button-H-kX3WhQ.js";import"./chevron-right-DBSJyJfi.js";import"./Input-DxXWxw4L.js";import"./search-CSidIbdR.js";import"./spin-CvwP77Hv.js";import"./error-BJ5r8zIU.js";import"./withOsdkMetrics-5o3v7rv4.js";import"./makeExternalStore-y72CzQ6c.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
