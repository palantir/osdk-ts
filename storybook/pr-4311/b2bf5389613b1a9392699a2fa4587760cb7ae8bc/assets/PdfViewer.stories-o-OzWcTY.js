import{j as r,M as s}from"./iframe-DyyhsHPN.js";import{P as p}from"./pdf-viewer-VfC6bqlX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_xfJLin.js";import"./preload-helper-TecF9w53.js";import"./PdfViewer-DDPjF9Cj.js";import"./index-CvvBsxWW.js";import"./BasePdfViewer-B5x38vb_.js";import"./BasePdfViewer.module.css-Cv6RYHvx.js";import"./PdfViewerAnnotationLayer-D98O4aXQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcPTgMoA.js";import"./PdfViewerOutlineSidebar-B94LyE8T.js";import"./PdfViewerSidebarHeader-BPdNMQcu.js";import"./useBaseUiId-BJ6PIN04.js";import"./useControlled-u76uhEJm.js";import"./CompositeRoot-DBGQOlpG.js";import"./CompositeItem-COlnvMhp.js";import"./ToolbarRootContext-DTFkxjo1.js";import"./composite-Bsp9V2TC.js";import"./svgIconContainer-g2nhA_co.js";import"./PdfViewerSearchBar-CCQTY43m.js";import"./chevron-up-DZKDbO-O.js";import"./chevron-down-7VC2t8Hz.js";import"./cross-DpLnPIVs.js";import"./PdfViewerSidebar-CpoYqVGR.js";import"./index-Bb3R8qQ9.js";import"./index-BbJuL6dd.js";import"./index-CGUIbyJe.js";import"./PdfViewerToolbar-WGA_hwWS.js";import"./Button-xW-9IrmO.js";import"./chevron-right-BFQs2aD3.js";import"./Input-DLcXZfv5.js";import"./search-CPGUiXny.js";import"./spin-C9K0KF9l.js";import"./error-CHS0y63D.js";import"./withOsdkMetrics-DkePQGfR.js";import"./makeExternalStore-sflRCuNQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
