import{j as r,M as s}from"./iframe-xaYq_0YR.js";import{P as p}from"./pdf-viewer-DPXN2enc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Da54IG-0.js";import"./preload-helper-CtEamZCu.js";import"./PdfViewer-BwLTF-fB.js";import"./index-BAZUgVLK.js";import"./BasePdfViewer-DTxMo7fI.js";import"./BasePdfViewer.module.css-yvuoOrZO.js";import"./PdfViewerAnnotationLayer-CM0RvKEL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFFU5hnG.js";import"./PdfViewerOutlineSidebar-CvYbqmKO.js";import"./PdfViewerSidebarHeader-B5lUK1GI.js";import"./useBaseUiId-CuYx4u3b.js";import"./useControlled-Dxi7lg4n.js";import"./CompositeRoot-DWktMQsZ.js";import"./CompositeItem-BRCxLN7a.js";import"./ToolbarRootContext-BsrWQvwk.js";import"./composite-CLd-Xsnk.js";import"./svgIconContainer-B7c-1n-U.js";import"./PdfViewerSearchBar-DSadrHWu.js";import"./chevron-up-DPpnrDxa.js";import"./chevron-down-C-g4LLea.js";import"./cross-BYWrVYOR.js";import"./PdfViewerSidebar-NzIrHxhE.js";import"./index-CnactCyz.js";import"./index-CyyrZFiN.js";import"./index-DF2Gn0NH.js";import"./PdfViewerToolbar-BrCLgd76.js";import"./Button-DeJ4BDKP.js";import"./chevron-right-D0UvM-kp.js";import"./Input-DH1br5He.js";import"./search-CSNqrmY1.js";import"./spin-Bx9MP4XR.js";import"./error-C61gPazY.js";import"./withOsdkMetrics-Cry6aqA_.js";import"./makeExternalStore-BQ-WZB7-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
